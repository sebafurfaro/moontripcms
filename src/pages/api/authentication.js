import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { method, body } = req;
  const client = await clientPromise;

  switch(method) {
    case 'POST':
      await handleLogin(req,res, client);
      break;
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
  }
}

async function handleLogin(req, res, client) {
  const { username, password } = req.body;

  try {
    const db = client.db()
    const collection = db.collection('authentication')
    const user = await collection.findOne({ username, password })

    if (user) {
      res.status(200).json({ message: 'Login válido' })
    } else {
      res.status(401).json({ message: 'Login inválido' })
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Failed to process request' });
  }
}
