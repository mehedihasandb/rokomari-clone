import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const { id } = req.query;

  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  const product = data.bestSellsItems.find(item => item.itemId === id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
