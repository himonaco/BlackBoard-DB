const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://lucaalbertmonaco:Znh96699@cluster0.uj4bs8q.mongodb.net/blackboard';

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
.then(()=>console.log('Database Connected'))
.catch(error => console.error(error));

