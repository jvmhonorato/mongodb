const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    const db = client.db('fsm')
    const pessoas = db.collection('pessoas')
    //inserir dados com inserOne
    // pessoas.insertOne({
    //     nome:'Agda Honorato',
    //     idade:'1983-06-18'
    // },(err,res)=>{
    //     console.log(err,res)
    // })
    
    //update data
    // pessoas.updateOne(
    //     {
    //     _id: mongodb.ObjectId("63147fe6279e0c1df935dcfb")
    //     },
    //     {
    //         $set:{
    //             nome: 'Jesus Cristo',
    //             idade: '0000-12-25'
    //         }
    //     },(err, res)=>{console.log(err,res)}
    //   )

    //remove data
    // pessoas.deleteOne(
    //     {
    //     _id: mongodb.ObjectId("63147fe6279e0c1df935dcfb")
    //     },(err, res)=>{console.log(err,res)}
    //   )



    //buscar dados com forEach
    const cursorPessoas = pessoas.find({})
    cursorPessoas.forEach(doc => {
        console.log(doc)
    }, ()=>console.log('fim'))
})