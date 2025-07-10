import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

import express from "express";

const app = express();

app.use(express.json());

app.get('/user/:id', async (req,res)=>{
    const id = req.params.id as unknown as number;
    const data = await client.user.findFirst({
        where:{
            id:Number(id)
        },
        select:{
            password:false,
            username:true,
            email:true,
            Gender:true,
            age:true
        }
    });
    res.json(data)
})

app.get('/todos/:id', async (req,res) => {
    const id = req.params.id as unknown as number;
    const data = await client.user.findFirst({
        where:{
            id:Number(id)
        },
        select:{
            todos:true
        }
    });
    console.log(data)
    res.json({
        data
    })

})

app.listen(3000);