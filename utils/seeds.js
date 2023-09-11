const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usersData, thoughtsData } = require('./data'); // Import your sample data

connection.on('error', (err) => err);
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let postCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (postCheck.length) {
    await connection.dropCollection('users');
  }

  let commentCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (commentCheck.length) {
    await connection.dropCollection('thoughts');
  }

  const users = usersData;
  const thoughts = thoughtsData;


  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  
  // After inserting thoughts, get the thought objects from the database


  // Log out a pretty table for comments and posts
  console.table(users);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
