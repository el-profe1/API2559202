const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.URI;

const router = express.Router();

/**
 * MOVIES
 */

//2. READ
//2.1 find()
router.get('/', async (req, res)=>{
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const movies = await client.db("sample_mflix").collection("movies").find({}).limit(10).toArray();
        if(movies){
            res.send(movies);
        }else{
            res.send("No se encontro la informacion");
        }
    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
})

//2.2 findOne()
router.get('/:id', async (req, res)=>{
    const id = req.params.id
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const movie = await client.db('sample_mflix').collection('movies').findOne({_id: new ObjectId(id)})
        if(movie){
            res.status(200).send(movie);
        }else{
            res.send('Not found');
        }
    }finally{
        await client.close();
    }
})

//1. CREATE
//1.1 insertOne()
router.post('/', async (req, res)=>{
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('sample_mflix').collection('movies').insertOne(body);
        res.status(201).json({
            message: 'created',
            data: body,
            result
        })
    }finally{
        await client.close();
    }
})

//1.2 insertMany()
router.post('/add-movies', async (req, res)=>{
    const movies = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        // await client.db('sample_mflix').collection('movies').insertMany(movies);
        const result = await client.db('sample_mflix').collection('movies').insertMany(movies);
        res.status(201).json({
            message: 'created',
            // data: movies,
            result
        })
    }finally{
        await client.close();
    }
})

//3. UPDATE
//3.1 updateOne
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const client = new MongoClient(uri)
    try{
        await client.connect()
        await client.db('sample_mflix').collection('movies').updateOne({_id: new ObjectId(id)},{$set:{title:body.title, year:body.year}})
        res.status(200).send({
            message: 'updated',
            data: body,
            id,
          })
    }finally{
        await client.close()
    }    
  });

//4. DELETE
//4.1 deleteOne()
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const client = new MongoClient(uri)
    try{
        await client.connect()
        await client.db('sample_mflix').collection('movies').deleteOne({_id: new ObjectId(id)})
        res.status(200).json({
            message: 'deleted',
            id,
          })
    }finally{
        await client.close()
    }     
  });

  module.exports = router;