const express=require('express')
const MongoClient=require('mongoose')
const dotEnv=require('dotenv')
const bodyParser=require('body-parser')
const EmployeeRoutes=require('./routes/EmployeeRoutes')
const app=express();
app.use(bodyParser.json());
dotEnv.config();

const PORT=process.env.PORT || 7766;
MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connection is success")
})
.catch((error)=>{
    console.log(error);
})

app.use("/employees",EmployeeRoutes)

app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`)
})