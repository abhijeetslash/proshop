const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbConnect = require('./config/db');

const users = require('./data/users');
const products = require('./data/products');

const User = require('./modals/userModal');
const Product = require('./modals/productModal');
const Order = require('./modals/orderModal');

dotenv.config();

dbConnect();

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {
                ...product,
                user: adminUser
            }
        })

        await Product.insertMany(sampleProducts);

        console.log('Imported successfully...');
        process.exit();

    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log('Destroyed!!!...');
        process.exit();

    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
}