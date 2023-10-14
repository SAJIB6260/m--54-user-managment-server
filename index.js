const express = require('express'); //must 
const cors = require("cors"); //middleware er jonno
const app = express();
const port = process.env.PORT || 5000;  // eita korle deployment e kono problem hobe na

//middleware
app.use(cors());
app.use(express.json());  // express.json()  calll na korle amra server side e receive korte parbo na


const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'sabnom', email: 'sabnom@gmail.com'},
    {id: 3, name: 'sabila', email: 'sabila@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('users Managment server is running')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post("/users", (req, res) => {    // app.post dite hoibo jodi get dei tahile ager get e hit kore chole jaibo
    console.log("post api hitting")
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1 ;  //uniq id er jonno korte hoibo
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () =>{     //app.listen korte hoibo 
    console.log(`server is runing : ${port}`)
})