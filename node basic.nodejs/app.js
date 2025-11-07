const express=require('express')
const app=express()

app.set("view engine", "ejs")

app.get("/home", (req, res)=>{
    const person ={
        name:"pika",
        age:22,
        address:"japan"
    }
    const name = "Suku singh"
    res.render("home.ejs",{haha : name, person:person})
})

app.get("/about", (req, res)=>{
    res.render("about.ejs")
})
app.get("/contact", (req, res)=>{
    res.render("contact.ejs")
})

app.listen(3000, ()=>{
    console.log("Project has started at port no 3000")
})