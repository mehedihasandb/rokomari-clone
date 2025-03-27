// // BookCard.tsx
// import React from 'react';
// import Image from 'next/image';

// interface BookData {
//   image: string;
//   title: string;
//   discount: string;
//   originalPrice: string;
//   salePrice: string;
//   rating: string;
//   reviews: string;
// }

// const BookCard = ({
//   image,
//   title,
//   discount,
//   originalPrice,
//   salePrice,
//   rating,
//   reviews,
// }: BookData) => {
//   return (
//     <div className="bg-white rounded shadow-md p-4">
//       <Image src={image} alt={title} width={150} height={200} />
//       <h3 className="text-lg font-bold">{title}</h3>
//       <p className="text-sm text-gray-600">{discount}</p>
//       <p className="text-sm text-gray-600">
//         <span className="line-through">{originalPrice}</span>
//         <span className="text-red-600">{salePrice}</span>
//       </p>
//       <p className="text-sm text-gray-600">
//         Rating: {rating} ({reviews} reviews)
//       </p>
//     </div>
//   );
// };

// export default BookCard;