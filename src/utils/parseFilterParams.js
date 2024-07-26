const parseName = (name) => {
    const isString = typeof name === 'string';
    if (!isString) return;
    return name;
};

const parsePhoneNumber = (number) => {
    const isString = typeof number === 'string';
    if (!isString) return;
    return number;
};

const parseEmail = (email) => {
    const isString = typeof email === 'string';
    if (!isString) return;
    return email;
};

const parseFavourite = (isFavourite) => {
    const isString = typeof isFavourite === 'string';
    if (!isString) return;

    const isBoolean = ['true', 'false'].includes(isFavourite);
    if (!isBoolean) return;

    return isFavourite;
};

const parseContactType = (type) => {
    const isString = typeof type === 'string';
    if (!isString) return;

    const isType = ['work', 'home', 'personal'].includes(type);
    if (!isType) return;

    return type;
};


export const parseFilterParams = (query) => {
    const { name, phoneNumber, email, isFavourite, contactType } = query;

    const parsedName = parseName(name);
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber);
    const parsedEmail = parseEmail(email);
    const parsedIsFavourite = parseFavourite(isFavourite);
    const parsedContactType = parseContactType(contactType);

    return {
        name: parsedName,
        phoneNumber: parsedPhoneNumber,
        email: parsedEmail,
        isFavourite: parsedIsFavourite,
        contactType: parsedContactType,
    };
};



