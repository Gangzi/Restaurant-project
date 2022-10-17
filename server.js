let http = require('http')
let server = http.createServer((req,res)=>{
    res.write("<h1 style='color:red'>Hello Programmers!!!!!!!</h1>")
    res.end()
})

server.listen(3000, ()=>{
 console.log('Server is running!!')
})