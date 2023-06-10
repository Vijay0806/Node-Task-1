const express = require ("express");
const fs = require ("fs");
const path = require("path")

const dirPath=path.join(__dirname,"timestamps")
console.log("dirpath", dirPath);

const app=express();

app.use(express.static("timestamps"))

app.get("/",(request,response)=>{

    response.send("Hi ... This Vijay💚🥰💜")
})

app.get("/timestamp",(request,response)=>{

let time=new Date();
let date=time.toUTCString().slice(0,-4)
console.log(date)


// Write files:
// if(fs.existsSync(filePath)){

// }

const timestamp = `LastUpdated TimeStamps:${date}`
    fs.writeFileSync(`${dirPath}/date-time.txt`,timestamp,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file created")
            console.log(data)
    
        }
    })

    response.sendFile(path.join(__dirname,"timestamps/date-time.txt"))
})

app.listen(3010,()=>console.log("This Node application is running on port")) 




