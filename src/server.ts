import { sequelize } from './database';
import express from 'express';

const app = express();
const PORT = 3000;

const userRoutes = require('./routes/UserRoutes');
const fileRoutes = require('./routes/FileRoutes');
const sharedWithRoutes = require('./routes/SharedWithRoutes');

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', fileRoutes);
app.use('/api', sharedWithRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

export default sequelize;