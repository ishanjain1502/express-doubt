const express = require("express");
const app = express();
const router = require("./routes/tasks");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( "/api/v1/tasks" , router);

const PORT = process.env.PORT || 1337;

app.get("/hello" , (req,res) => {
    res.status(200).send('hello world');
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
  
module.exports = app;