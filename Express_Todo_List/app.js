const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongodb= 'mongodb+srv://Iniabasi:Ini123@cluster0.ejnpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true}).then(()=>{
    console.log('connected')
    app.listen(3000);
}).catch(err=>console.log(err))
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req,res)=>{
    const items =[
        {name: 'mobile phone', price: 1000},
        {name: 'book', price: 140},
        {name: 'ipad', price: 1020},

    ]
 
    res.render('index', {items});


    

})
app.get('/add-item', (req,res)=>{
    res.render('add-item');
})

app.use((req, res)=>{
    res.render('error');
})