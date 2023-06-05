const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const { MongoClient, ObjectId } = require('mongodb');
const routerApi = require('./routes')

require('dotenv').config();

//const uri = "mongodb+srv://el-profe1:el-profe1@cluster0.gdzt1ar.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

const app = express();

//Middlewares
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(cors);

routerApi(app);

//Routes
app.get('/api',(req, res)=>{
    res.send('API de peliculas');
})

// /**
//  * MOVIES
//  */

// //2. READ
// //2.1 find()
// app.get('/movies', async (req, res)=>{
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const movies = await client.db("sample_mflix").collection("movies").find({}).limit(10).toArray();
//         if(movies){
//             res.send(movies);
//         }else{
//             res.send("No se encontro la informacion");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

// //2.2 findOne()
// app.get('/movies/:id', async (req, res)=>{
//     const id = req.params.id
//     const client = new MongoClient(uri)
//     try{
//         await client.connect()
//         const movie = await client.db('sample_mflix').collection('movies').findOne({_id: new ObjectId(id)})
//         if(movie){
//             res.status(200).send(movie);
//         }else{
//             res.error('Not found');
//         }
//     }finally{
//         await client.close();
//     }
// })

// //1. CREATE
// //1.1 insertOne()
// app.post('/movies', async (req, res)=>{
//     const body = req.body
//     const client = new MongoClient(uri)
//     try{
//         await client.connect()
//         const result = await client.db('sample_mflix').collection('movies').insertOne(body);
//         res.status(201).json({
//             message: 'created',
//             data: body,
//             result
//         })
//     }finally{
//         await client.close();
//     }
// })

// //1.2 insertMany()
// app.post('/movies/add-movies', async (req, res)=>{
//     const movies = req.body
//     const client = new MongoClient(uri)
//     try{
//         await client.connect()
//         // await client.db('sample_mflix').collection('movies').insertMany(movies);
//         const result = await client.db('sample_mflix').collection('movies').insertMany(movies);
//         res.status(201).json({
//             message: 'created',
//             // data: movies,
//             result
//         })
//     }finally{
//         await client.close();
//     }
// })

// //3. UPDATE
// //3.1 updateOne
// app.patch('/movies/:id', async (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     const client = new MongoClient(uri)
//     try{
//         await client.connect()
//         await client.db('sample_mflix').collection('movies').updateOne({_id: new ObjectId(id)},{$set:{title:body.title, year:body.year}})
//         res.status(200).send({
//             message: 'updated',
//             data: body,
//             id,
//           })
//     }finally{
//         await client.close()
//     }    
//   });

// //4. DELETE
// //4.1 deleteOne()
// app.delete('/movies/:id', async (req, res) => {
//     const { id } = req.params;
//     const client = new MongoClient(uri)
//     try{
//         await client.connect()
//         await client.db('sample_mflix').collection('movies').deleteOne({_id: new ObjectId(id)})
//         res.status(200).json({
//             message: 'deleted',
//             id,
//           })
//     }finally{
//         await client.close()
//     }     
//   });

// /**
//  * COMMENTS
//  */

// //1. CREATE
// //1.1 insertOne()
// //1.2 insertMany()
// //2. READ
// //2.1 find()
// //2.2 findOne()
// //3. UPDATE
// //3.1 updateOne
// //4. DELETE
// //4.1 deleteOne()

// //2. READ
// //2.1 find()
// app.get('/comments',async (req, res)=>{
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const movies = await client.db("sample_mflix").collection("comments").find({}).limit(10).toArray();
//         if(movies){
//             res.send(movies);
//         }else{
//             res.send("No se encontro la informacion");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

// /**
//  * SESSIONS
//  */
// app.get('/sessions',async (req, res)=>{
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const movies = await client.db("sample_mflix").collection("sessions").find({}).limit(10).toArray();
//         if(movies){
//             res.send(movies);
//         }else{
//             res.send("No se encontro la informacion");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

// /**
//  * THEATERS
//  */
// app.get('/theaters',async (req, res)=>{
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const movies = await client.db("sample_mflix").collection("movies").find({}).limit(10).toArray();
//         if(movies){
//             res.send(movies);
//         }else{
//             res.send("No se encontro la informacion");
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// })

app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
})