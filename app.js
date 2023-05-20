const express = require('express');
const app = express();
const usersRoute = require('./routes/users');

app.use(express.json());
app.use('/api', usersRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/",(req,res)=>{
    res.send("hi, i am live");
});