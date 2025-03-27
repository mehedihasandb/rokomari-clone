// export default async function getProduct(id){
//     const response = await fetch (`@/data/data.json/bestSellsItems/${id}`);
//     const product = await response.json();
//     return product;
// }

// src/app/libs/getProducts.js

// src/app/products/[id]/page.tsx

import ProductDetailsPage from '@/components/ProductDetailsPage';



export async function getServerSideProps({ params }) {
  const product = await getProduct(params.id);
  return { props: { product } };
}

async function getProduct(id) {
  const response = await fetch('http://localhost:3000/data/data.json'); 
  const data = await response.json();
  const product = data.bestSellsItems.find(item => item.itemId === id);
  return product || null;
}

const ProductPage = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductDetailsPage product={product} />;
};

export default ProductPage;
