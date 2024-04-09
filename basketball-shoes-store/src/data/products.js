import shoe1 from './assets/shoe1.jpg';
import shoe2 from './assets/shoe2.jpg';

const products = [
  {
    id: 1,
    name: "Basketball Shoe 1",
    price: "100",
    imageUrl: shoe1, // Reference the imported image here
    description: "High-quality basketball shoe for professional players."
  },
  {
    id: 2,
    name: "Basketball Shoe 2",
    price: "120",
    imageUrl: shoe2, // And here
    description: "Stylish and comfortable shoe with excellent ankle support."
  },
  // Add more products as needed
];

export default products;
