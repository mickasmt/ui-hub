import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Black Ruffle Outfit",
    price: 599.99,
    description:
      "Elegant black dress perfect for evening occasions. Made from high-quality fabric for a comfortable fit.",
    category: "women's clothing",
    thumbnail: "/_static/images/products/dress-black-1.jpg",
    images: [
      "/_static/images/products/dress-black-1.jpg",
      "/_static/images/products/dress-black-2.jpg",
      "/_static/images/products/dress-black-3.jpg",
    ],
    rating: {
      rate: 4.5,
      count: 75,
    },
  },
  {
    id: "2",
    title: "Elegant Gray Dress",
    price: 450.99,
    description:
      "Stylish gray dress suitable for casual and semi-formal events. Crafted with care to ensure durability.",
    category: "women's clothing",
    thumbnail: "/_static/images/products/dress-grey-1.jpg",
    images: [
      "/_static/images/products/dress-grey-1.jpg",
      "/_static/images/products/dress-grey-2.jpg",
      "/_static/images/products/dress-grey-3.jpg",
    ],
    rating: {
      rate: 4.3,
      count: 60,
    },
  },
  {
    id: "3",
    title: "White Knit Dress",
    price: 550.99,
    description:
      "Chic white-colored dress for a sophisticated look. Perfect for any occasion requiring elegance.",
    category: "women's clothing",
    thumbnail: "/_static/images/products/dress-white-1.jpg",
    images: [
      "/_static/images/products/dress-white-1.jpg",
      "/_static/images/products/dress-white-2.jpg",
      "/_static/images/products/dress-white-3.jpg",
    ],
    rating: {
      rate: 4.7,
      count: 80,
    },
  },
];