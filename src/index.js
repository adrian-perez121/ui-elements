import "./main.css";
import { DropDown } from "./scripts/dropdown";
import { Carousel } from "./scripts/carousel";

const testDropDown = new DropDown(document.querySelector(".dropdown-btn"), document.querySelector(".dropdown-items"))
const imageCarousel = new Carousel(document.querySelector(".fwd"), document.querySelector(".bck"), document.querySelector(".carousel"))