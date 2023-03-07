const express = require('express');
const app = express();

dotenv.config({path:'./config/.env'})

const mongoose = require('mongoose');
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use('/U', require('./Routers/UserRouter'))

mongoose.connect(process.env.URI)
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))

app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))