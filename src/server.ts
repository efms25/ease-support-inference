import * as dotenv from "dotenv"
dotenv.config();

import app from "./app.ts"

const start = async (): Promise<void> => {
    try {
        app.listen({
            port: 3000,
            host: '0.0.0.0'
        });
    } catch (err: any) {
        app.log.error(err);
        process.exit(1);
    }
}

start();