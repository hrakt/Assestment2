const express          = require("express");
const app               = express();
const bodyParser        =require('body-parser');
const PORT              = 3033;

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());


const List              =require("./data/todo");          

app.get('/',async(req,res)=>{
    try{    
        res.render("main.ejs",{
            list: List
        });
    }catch(err){
        res.send(err);
    }
})

app.post('/add',async(req,res)=>{
    try{


        List.push(req.body);
        res.redirect("/");
    }catch(err){
        res.send(err);
    }
})

app.get('/delete/:id',async(req,res)=>{
    try{
        List.splice(req.params.id,1);
        res.redirect("/");
    }catch(err){
        res.send(err);
    }
})

app.listen(PORT, () =>{
    console.log('listeing on port', {PORT});
})