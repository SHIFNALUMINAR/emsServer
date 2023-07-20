const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log(".... mongodb atlas connected successfully ....");
}).catch((error)=>{
    console.log("mongodb connection error"+error);
})