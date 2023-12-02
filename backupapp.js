const users = require('./users')
console.log(users.userName)
console.log(users.userAge)
console.log("Hello world")
users.func()


var http = require("http")

var server = http.createServer((req,res)=>{
    console.log('server is running')
})

var user = {
    id:1,
    name:"harshil"
}

var users = [ 
    {name:"raj"},
    {name:"rahul"},
    {name:"harshil"}
]

app.get("/user",(req,res)=>{
    res.json({
        message:"api called",
        user:user
    })
})



/*app.get("/user/:id",(req,res)=>{
    const id = req.params.id
    const query = req.query

    res.json({
        message:"api called",
        id:id,
        name:query.name
    })
})*/



app.get("/user/name",(req,res)=>{
    const name = req.query.name
    console.log(name)
    const newUsers = users.filter((name) => users.name != name)
    res.json({
        message:"api called",
        user:newUsers
    })
})


server.listen(8000,()=>{
    console.log('server is running')
})