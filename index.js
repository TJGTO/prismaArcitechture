const express = require("express");
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const app = express();

app.use(express.json());
app.use(cors())

app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany({
        select: {
            name: true,
            Profilr: true
        }
    })
    res.status(200).send(users)
})

app.get('/trainning', async (req, res) => {

    const users = await prisma.trainingDetails.findMany()
    res.status(200).send(users)
})

app.listen(8000, () => console.log("Hello"))