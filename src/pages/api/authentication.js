import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("customers");
    
    if (req.method === "POST") {
      const { username, password } = req.body;
      const user = await collection.findOne({ username, password });
      
      if (user) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else if (req.method === "GET") {
      const data = await collection.find({}).toArray();
      res.status(200).json({ message: "Get data successful", data });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process request" });
  }
};
