const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected to database.")
})
.catch(err => {
    console.log("Can't connect to database", err)
    process.exit();
});

app.get('/', (req, res)=>{
    res.json({message: "Welcome to pune!!!"})
});
require("./app/routes/employee.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})