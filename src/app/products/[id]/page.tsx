// import ProductDetailsPage from '@/components/ProductDetailsPage';

// const Page = () => {
//   return (
//     <div>
//       <ProductDetailsPage />
//     </div>
//   );
// };

// export default Page;




import ProductDetailsPage from '@/components/ProductDetailsPage';
import path from 'path';
import { promises as fs } from 'fs';


async function getProduct(id) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  const product = data.bestSellsItems.find(item => item.itemId === id);
  return product || null;
}

const ProductPage = async ({ params: { id } }) => {
  const product = await getProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailsPage product={product} />;
};

export default ProductPage;
