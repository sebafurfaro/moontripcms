import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("customers");

    if (req.method === "POST") {
      // Insert a new post
      const { name, phone, email, avatar, username, password} = req.body;
      await collection.insertOne({name, phone, email, avatar, username, password});
      res.status(200).json({ message: "Data inserted successfully" });

    } else if (req.method === "GET") {
      // Get all posts
      const data = await collection.find({}).toArray();
      res.status(200).json({ message: "Get data successful", data });

    } else if (req.method === "PUT") {
      // Update status of a post
      const { id, status } = req.body;
      await collection.updateOne({ _id: id }, { $set: { status } });
      res.status(200).json({ message: "Post status updated successfully" });

    } else if (req.method === "DELETE") {
      // Delete a post
      const { id } = req.body;
      await collection.deleteOne({ _id: id });
      res.status(200).json({ message: "Post deleted successfully" });

    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process request" });
  }
};
