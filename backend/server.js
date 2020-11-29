const express = require('express');
const dotenv = require('dotenv');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const dbConnect = require('./config/db');

dotenv.config();

dbConnect();

const app = express();

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`server started in ${process.env.NODE_ENV} mode at port ${port}`)
} );