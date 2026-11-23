import express from 'express';
import config from './config/env.js';
import { connectDB } from './config/db.js';
import taskRoutes from './routes/task.routes.js';

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

connectDB().then(() => {
    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port} (${config.env})`);
    });
});