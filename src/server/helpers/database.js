import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => mongoose
  .connect(process.env.MONGODB_URI,
    { useNewUrlParser: true })
  .catch((err) => { console.error(err); });

export default connect;
