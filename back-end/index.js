/*install express, mongoose, cors, dotenv
npm install express mongoose cors dotenv
 */
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_KEY)
mongoose.connection.on('error', err => {
  console.log('There was an error connecting to the database: ', err)
})
mongoose.connection.once('open', () => {
  console.log('Successfully connected to the database')
})


const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirmPassword: String
}, { versionKey: false});

const cartSchema = mongoose.Schema({
  name: String,
  price: Number,
  img: String
}, { versionKey: false});

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  img: String
}, { versionKey: false});

const userInquirySchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
}, { versionKey: false});

const User = mongoose.model('User', userSchema);
const Cart = mongoose.model('Cart', cartSchema);
const Product = mongoose.model('Product', productSchema);
const UserInquiry = mongoose.model('UserInquiry', userInquirySchema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the back-end' })
});



app.post('/signup', async(req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    res.json({ message: 'Passwords do not match' });
  } else {
    const Findusername = await User.findOne({ username: username});
    const FinduserEmail = await User.findOne({ email: email});
    if (Findusername || FinduserEmail) {
      res.json({ message: 'User already exists' });
    } else {
      const newUser = await User.create({
        username,
        email,
        password,
        confirmPassword
      });
      res.json({ message: 'Signup successful'});
    }
  }
    
});

app.post('/login', async(req, res) => {
  const { name, pass } = req.body;
  const user = await User.findOne({ username: name, password: pass });
  if (user) {
    res.json({ message: 'Login successful' });
    console.log(user);
  } else {
    res.json({ message: 'Login failed' });
  }

});

app.post('/api/cart', async(req, res) => {
  const { name, price, img } = req.body;
  console.log(img);
  const cart = await Cart.create({
    name: name,
    price: price,
    img: img
  });
  res.json({ message: 'Product added successfully' });
});

app.get('/api/cart', async(req, res) => {
  const cart = await Cart.find({});
  res.json(cart);
});

app.get('/api/product', async(req, res) => {
  const product = await Product.find({});
  res.json(product);
});

app.post('/inquiry', async(req, res) => {
  const { name, email, phone, message } = req.body;
  const inquiry = await UserInquiry.create({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
  res.json({ message: 'Inquiry sent successfully' });
});



const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
