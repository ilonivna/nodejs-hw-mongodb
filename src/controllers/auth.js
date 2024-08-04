import { registerUser, loginUser, logoutUser } from "../services/auth.js";
import { ONE_DAY } from "../constants/index.js";



export const registerUserController = async (req, res) => {
    const user = await registerUser(req.body);

    res.status(201).json({
        status: 201,
        message: 'Successfully registered a user!',
        data: user,
    });
};

export const loginUserController = async (req, res) => {
    const session =  await loginUser(req.body);

    res.cookie('refreshToken', session.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });

    res.cookie('sessionId', session._id, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });

    res.json({
        status: 200,
        message: 'Successfully logged in a user!',
        data: {
            accessToken: session.accessToken,
        },
    });

};

export const logoutUserController = async (res, req) => {
    if (req.cookies.sessionId) {
        await logoutUser(req.cookies.sessionId);
    }

    res.clearCookies('sessionId');
    res.clearCookies('refreshToken');

    res.status(204).send();
};
