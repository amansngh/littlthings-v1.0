const express=require('express')
const app= express();
const router=express.Router();
const mongoose=require('mongoose');
const multer=require('multer')
const upload=multer({dest:'uploads'});
const cors= require('cors');
var url =require('url');
const port = 8019;

var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path=require('path')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://code:codecode1@ds145434.mlab.com:45434/littlethings");

var sellerSchema = new mongoose.Schema({
    username: String,
    email: String,
    category:[
        {type: String}],
    products: [{ 
        image_id: String,
        customer_id: String
    }] 

});

var customerSchema = new mongoose.Schema({
    username: String,
    email: String,
});

var productSchema = new mongoose.Schema({
    image_id: String,
    customer_id: String,
    seller_id: String
});

var sellerDB = mongoose.model('seller', sellerSchema,'seller');
var customerDB = mongoose.model('customer', customerSchema,'customer');
var productDB = mongoose.model('product', productSchema,'product');

app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post("/seller/signup",(req,res)=>{
   var {username,email,category} = req.body
   console.log(req.body)
   var sData = new sellerDB({
    username,
    email,
    category
      });
sData.save().then(item => {
    var query = {
        $and:
        [
            {"email":email},
            {"username":username}
        ] }

        sellerDB.find(query,function(err,response){
            if (err) {
                return console.error(err)
            }
             console.log(response[0]._id)
             res.send(response[0]._id)
            },{});
            })
            .catch(err => {
            console.log(err)
            res.status(400).send("Unable to save to database");
});
});

app.post("/seller/login",(req,res)=>{
   var {username,email} = req.body
   //console.log(username)
    var query = {
            $and:
            [
                {"email":email},
                {"username":username}
            ] }
    sellerDB.find(query,function(err,response){
        if (err) {
            return console.error(err)
        }
        res.send(response[0]._id)
    },{});
});

app.post("/customer/signup",(req,res)=>{
   var {username,email} = req.body
   var cData = new customerDB({
    username,
    email,
      });
      
cData.save().then(item => {
   var query = {
    $and:
    [
        {"email":email},
        {"username":username}
    ] }
customerDB.find(query,function(err,response){
if (err) {
    return console.error(err)
}
 console.log(response[0]._id)
 res.send(response[0]._id)
},{});
})
.catch(err => {
    console.log(err)
    res.status(400).send("Unable to save to database");
});
});

app.post("/customer/login",(req,res)=>{
    //console.log(req.body);
    var {username,email} = req.body
    var query = {
            $and:
            [
                {"email":email},
                {"username":username}
            ] }
    customerDB.find(query,function(err,response){
        if (err) {
            return console.error(err)
        }
         console.log(response[0]._id)
         res.send(response[0]._id);
    },{});
});
app.get("/customer",(req,res)=>{
    var parsedUrl = url.parse(req.url,true)
    const cid=parsedUrl.query.cid
    var query = {"_id": cid}
customerDB.find(query,function(err,response){
    if (err) {
        return console.error(err)
    }
    console.log(response[0])
    res.send(response[0])
},{});
    
          
});
app.get("/seller",(req,res,next)=>{
    var parsedUrl = url.parse(req.url,true)
    const sid=parsedUrl.query.sid
    var query = {"_id": sid}
sellerDB.find(query,function(err,response){
    if (err) {
        return console.error(err)
    }
    console.log(response[0])
    res.send(response[0])
},{});
});
app.get("/seller/products",(req,res,next)=>{
    var parsedUrl = url.parse(req.url,true)
    const sid=parsedUrl.query.sid
    console.log(sid)
    var query = {"seller_id": sid}
productDB.find(query,function(err,response){
    if (err) {
        return console.error(err)
    }
    console.log('aman',response[0])
    res.send(response[0])
},{});
});
app.post("/",upload.single('p','p1'), (req, res, next) => {
    var parsedUrl = url.parse(req.url,true)
    const cid=parsedUrl.query.cid
    //console.log(req.body);
    console.log(req.file)
    var image_id = req.file.filename
    var query = {"category": req.body.p1}
    sellerDB.find(query,function(err,response){
    if (err) {
        return console.error(err)
    }
    for (let i=0;i<response.length;i++)
    {
        var pData = new productDB({
            image_id,
            'customer_id': cid,
            'seller_id': response[i]._id
              });
        pData.save().then(item => {
            console.log('product saved successfully');
        })
        .catch(err => {
            console.log(err)
            res.status(400).send("Unable to save to database");
        });
    }
},{});
   // let arru=req.file.mimetype.split('/');
   // console.log(req.file.filename+'.'+arru[1]);
    res.send('Picture Uploaded Successfully! :)')
  });

app.listen(port,()=>
{
    console.log(`listen on ${port}`)
})