import express from 'express';
// import { getUser, getUsers } from './database.js';

const app = express();

// app.get("/users", async (req, res) => {
//     const users = await getUsers();
//     res.send(users);
// })

// app.get("/user/:id", async (req, res) => {
//     const id = req.params.id;
//     const users = await getUser(id);
//     res.send(users);
// })

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})