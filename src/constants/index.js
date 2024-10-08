import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

import { FaHandHoldingHeart, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "100", label: "Brands" },
  { value: "500", label: "Shops" },
  { value: "1000", label: "Customers" },
];

export const products = [
  {
    imgURL: bigShoe1,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: bigShoe2,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: bigShoe1,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: bigShoe2,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    icon: FaTruck,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: FaShieldAlt,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: FaHandHoldingHeart,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { icon: FaFacebook, alt: "facebook logo" },
  { icon: FaSquareXTwitter, alt: "x logo" },
  { icon: FaInstagram, alt: "instagram logo" },
];
