import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'staging';
dotenv.config({ path: `.env.${env}` });

export default {
    env,
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
}; 