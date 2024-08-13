import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";
import { createDirIfNonexistent } from "./utils/createDirIfNonexistent.js";
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from "./constants/index.js";

const bootstrap = async () => {
    await initMongoConnection();
    await createDirIfNonexistent(TEMP_UPLOAD_DIR);
    await createDirIfNonexistent(UPLOAD_DIR);
    setupServer();
};

bootstrap();
