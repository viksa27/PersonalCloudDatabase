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

/*
var i = 0;
async function testCreateUser() {
    const userData = {
        username: `test_user${i}`,
        password: 'test_password',
        email: `test${i}@example.com`,
    };
    i++;

    
    try {
        const newUser = await UserService.createUser(userData);
        if(!newUser) {
                console.log('Failed to create user.');
                return;
            }
        console.log('User created successfully:', newUser.toJSON());
    } catch(error) {
        console.error('Error getting files by owner ID:', error);
    }
}

app.get("/testCreateUser", async (req, res) => {
    await testCreateUser();

    res.send("Test done.");
});

app.get("/testDeleteUser/:id", async (req, res) => {
    const userId = req.params.id;
    UserService.deleteUser(userId);
    res.send("Test done")
});

app.get("/getUserById/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);
    res.send(user);
});

app.get("/updateUser/:id", async (req, res) => {
    const userId = req.params.id;

    const userData = {
        username: `editedusername${i}`,
        password: 'test_password',
        email: `edited${i}@example.com`,
    };
    i++

    const result = await UserService.updateUser(userId, userData);

    if(result == null) {
        res.send("Couldn't update user");
    }

    res.send("Success");
});

app.get("/createFile/:id", async (req, res) => {
    const fd = {
        owner_id: req.params.id,
        parent_id: null,
        is_folder: false,
        filename: `filename${i}`,
        filepath: `filepath${i}`,
        size: i,
    }

    const result = await FileService.createFile(fd);
    i++;
    res.send(result);
});

app.get("/createFolder/:id", async (req, res) => {
    const fd = {
        owner_id: req.params.id,
        parent_id: null,
        is_folder: true,
        filename: `foldername${i}`,
        filepath: `folderpath${i}`,
        size: i,
    }

    const result = await FileService.createFile(fd);
    i++;
    res.send(result);
});

app.get("/getUserById/:id", async (req, res) => {
    const result = await UserService.getUserById(req.params.id);

    res.send(result);
});

app.get("/deleteFile/:fileId", async (req, res) => {
    const result = await FileService.deleteFile(req.params.fileId);

    res.send(result);
});

app.get("/getFiles/:ownerId", async (req, res) => {
    const result = await FileService.getFilesByOwnerId(req.params.ownerId);

    res.send(result);
});

app.get("/moveFile/:fileId/:folderId", async (req, res) => {
    const result = await FileService.moveFile(req.params.fileId, req.params.folderId);

    res.send(result);
});

app.get("/renameFile/:fileId/:fileName", async (req, res) => {
    const result = await FileService.renameFile(req.params.fileId, req.params.fileName);

    res.send(result);
});

async function startServer() {
    try {

        app.use(express.json());


        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

//startServer();



// Test the database connection
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection successful!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//testDatabaseConnection();
*/
export default sequelize;