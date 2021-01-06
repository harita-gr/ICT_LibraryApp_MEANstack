const express = require('express');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')

const Userdata = require('./src/model/Userdata');
const Bookdata = require('./src/model/BookData');
const Authordata = require('./src/model/AuthorData');

const app=new express();
app.use(cors());
app.use(bodyparser.json());
username='admin@123.com';
password='123456';

app.post('/adminLogin',(req,res) => {

    let userData = req.body;

    if(username !== userData.email){
        res.status(401).send('Invalid Username');
    }
    else if (password !== userData.password){
        res.status(401).send('Invalid Password');
    }
    else{
        console.log('Validation Success!');
        let payload = {subject: username + password};
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send({token});
    }
});

app.post('/register',(req,res) => {

    let userData = req.body;
    console.log('User Data: '+userData);

    var user = {
        name: userData.fullName,
        email: userData.email,
        dob: userData.dob,
        password: userData.password,
       }
       var user = Userdata(user);
       user.save(); //save to DB
       res.send('success');
});

app.post('/login',function(req,res){
  
    let email =req.body.email;
    let password =req.body.password;   

   Userdata.findOne({email:email})
   .then(function(user){
         if(user.password == password)
         {
          console.log('Valid User!');
          let payload = {subject: username + password};
          let token = jwt.sign(payload,'secretKey');
          res.status(200).send({token});
           }

         else{
            res.status(401).send('Invalid Credentials');
            }
    })
    .catch( ()=> {

            res.status(401).send('User not found! Please SIGN UP!');
  });
})

app.get('/books',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.send(books);
    });
});

app.get('/authors',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.send(authors);
    });
});

app.post('/addAauthors',(req,res) => {

    var item = {
        name: req.body.name,
        genre: req.body.genre,
        books: req.body.book,
        image: req.body.image
       }
    //   upload(req, res, function (error) {
    //    if (error) {
    //      console.log(`upload.single error: ${error}`);
    //      return res.sendStatus(500);
    //    }
    //    console.log("success upload");
    //  }); 

    //    console.log('Files Uploaded: ');
       var author = Authordata(item);
       author.save(); //save to DB       
       res.send('success');
     });

     app.post('/addBook',(req,res) => {

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
           }
    
        //   upload(req, res, function (error) {
        //     if (error) {
        //       console.log(`upload.single error: ${error}`);
        //       return res.sendStatus(500);
        //     }
        //     console.log("success upload");
        //   });
            var book = Bookdata(item);
            book.save(); //save to DB 
            res.send('success');
     });

    app.get('/viewAuthor/:id',  (req, res) => {
  
        const id = req.params.id;
        Authordata.findOne({"_id":id})
          .then((author)=>{
              res.send(author);
          });
       
      })

      app.get('/viewBook/:id',  (req, res) => {
  
        const id = req.params.id;
        Bookdata.findOne({"_id":id})
          .then((book)=>{
              res.send(book);
          });
      })

      app.delete('/removeAuthor/:id',(req,res)=>{
   
        id = req.params.id;
        Authordata.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
      });

    //   app.put('/updateAuthor',(req,res)=>{
          
    //     id=req.body._id,
        
    //         aname=req.body.name,
    //         genre= req.body.genre,
    //         books= req.body.book,
    //         image=req.body.image
           
    //         Authordata.findByIdAndUpdate({"_id":id},
    //                                 {$set:{"name":aname,
    //                                 "genre":genre,
    //                                 "books":books,
    //                                 "image":image
    //                                 }})
    //    .then(function(){
    //        res.send('done');
    //    })
    //  })
    app.post('/updateAuthor/:id',function(req,res){
        console.log('UPDATING',req.body);
         id = req.params.id;
        var update = Authordata.findByIdAndUpdate(id,{
             name:req.body.name,
             genre:req.body.genre,
             image: req.body.image,
             books: req.body.books
        });
       
        // upload(req, res, function (error) {
        //   if (error) {
        //     console.log(`upload.single error: ${error}`);
        //     return res.sendStatus(500);
        //   }
        //   console.log("success upload");
        // });
      
        update.exec(function (err,data){
          if(err) throw err;
          res.send('updated');
        })
      });

      app.delete('/removeBook/:id',(req,res)=>{
   
        id = req.params.id;
        Bookdata.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send('successfully deleted book');
        })
      });

      app.post('/updateBook/:id',function(req,res){
        console.log('UPDATING',req.body);
         id = req.params.id;
        var update = Bookdata.findByIdAndUpdate(id,{
            title:req.body.title,
            genre:req.body.genre,
            image: req.body.image,
            author: req.body.author
        });
      
        update.exec(function (err,data){
          if(err) throw err;
          res.send('updated');
        })
      });

app.listen(3000, function(){
    console.log('listening to port 3000');
});