const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  // .connect(process.env.DATABASE_LOCAL) // connecting to local database
  .connect(DB)
  .then((con) => {
    // console.log(con.connections);
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    throw err;
  });
// console.log(app.get('env'));
// console.log(process.env);

// 4) START SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
