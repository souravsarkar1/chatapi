import dotenv from "dotenv";
import { connect } from "mongoose";


dotenv.config();

const connection = connect(process.env.MONGODB_URL);

export default connection;