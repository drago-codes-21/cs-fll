import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "We want to become the best in this business!",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To provide best quality solutions to all customers at lower price",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We started slow but now we are gaining some serious pace",
  },
];

const check = process.env.REACT_APP_PRODUCTION;

// const products__url =
export const products_url = "http://localhost:5000/api/v1/products";

const single__product = "http://localhost:5000/api/v1/products/get/";
export const single_product_url =
  check === true ? process.env.REACT_APP_SINGLE_PRODUCT_URL : single__product;
