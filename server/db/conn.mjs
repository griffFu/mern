import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://grifftest:LMq5Vs2VCVZhA7lZ@myatlasclusteredu.rptf62w.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
