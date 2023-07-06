import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("myaccount");
    
    if (req.method === "POST") {
      const { name, email, confirmEmail, phone, avatar, password, confirmPassword, username } = req.body;
      await collection.insertOne({ name, email, confirmEmail, phone, avatar, password, confirmPassword, username });
      res.status(200).json({ message: "Data inserted successfully" });
    } else if (req.method === "GET") {
      const data = await collection.find({}).toArray();
      res.status(200).json({message: "get data ok", data})
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process request" });
  }
};
