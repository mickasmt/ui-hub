import { Product, Event } from "@/types";

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

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Late Night Pizza",
    description: "Order and enjoy pizza while watching movies.",
    startTime: "2024-07-25T22:00:00.000Z",
    endTime: "2024-07-25T23:30:00.000Z",
    bgColor: "bg-[#fbdca0] dark:bg-[#4b5563]", // Light orange-yellow pastel
  },
  {
    id: "2",
    title: "Forget Side Projects",
    description: "Dance and drink to forget my side projects.",
    startTime: "2024-07-25T00:00:00.000Z",
    endTime: "2024-07-25T02:30:00.000Z",
    bgColor: "bg-[#add8e6] dark:bg-[#619de2]", // Light blue pastel
  },
  {
    id: "3",
    title: "Breakfast",
    description: "Enjoy a nice breakfast.",
    startTime: "2024-07-25T06:00:00.000Z",
    endTime: "2024-07-25T07:00:00.000Z",
    bgColor: "bg-[#fbdca0] dark:bg-[#4b5563]", // Light orange-yellow pastel
  },
  {
    id: "4",
    title: "Flight to Paris",
    description: "John F. Kennedy International Airport",
    startTime: "2024-07-25T07:30:00.000Z",
    endTime: "2024-07-25T10:30:00.000Z",
    bgColor: "bg-[#96bf8b] dark:bg-[#4a9e62]", // Light blue pastel
  },
  {
    id: "5",
    title: "Sightseeing",
    description: "Eiffel Tower",
    startTime: "2024-07-25T11:00:00.000Z",
    endTime: "2024-07-25T12:30:00.000Z",
    bgColor: "bg-[#fbdca0] dark:bg-[#4b5563]", // Light orange-yellow pastel
  },
  {
    id: "6",
    title: "Virtual Reality Gaming",
    description: "Get lost in a VR world.",
    startTime: "2024-07-25T15:00:00.000Z",
    endTime: "2024-07-25T17:00:00.000Z",
    bgColor: "bg-[#f3afc7] dark:bg-[#886F9F]", // Light pink pastel
  },
  {
    id: "7",
    title: "Random Acts of Kindness",
    description: "Surprise someone with a small gift.",
    startTime: "2024-07-25T18:00:00.000Z",
    endTime: "2024-07-25T19:00:00.000Z",
    bgColor: "bg-[#fbdca0] dark:bg-[#4b5563]", // Light orange-yellow pastel
  },
];
