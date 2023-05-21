import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://isaaclele:Welcome%2310475@projectdora.ta9d2qp.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;