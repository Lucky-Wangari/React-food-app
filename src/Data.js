import menu1 from "./assets/images/menu1.png";
import animeburg from "./assets/images/animeburg.png";
import free from "./assets/images/free.png";
import box from "./assets/images/box.png";
import load from "./assets/images/load.png";
import burger from "./assets/images/burger.png";
import pizza from "./assets/images/pizza.png";
import fries from "./assets/images/fries.png";
import menu2 from "./assets/images/menu2.png";
import menu3 from "./assets/images/menu3.png";
import menu4 from "./assets/images/menu4.png";
import menu5 from "./assets/images/menu5.png";
import menu6 from "./assets/images/menu6.png";
import offers1 from "./assets/images/offers1.png";
import discount from "./assets/images/discount.png";

const home = [
    {
        img: menu1,
    },
    {
        img: animeburg,
    }

];
const details = [
    {
      img: free,
      title: "Free Delivery",
      details: "The Food Will Be Delivered To Your Home Within 1-2 Hours Of Your Ordering.",
    },
    {
      img: box,
      title: "Fresh Food",
      details: "Your Food Will Be Delivered 100% Fresh To Your Home.\n We Do Not Deliver Stale Food.",
    },
    {
      img: load,
      title: "Free Delivery",
      details: "Your Food Delivery Is Absolutely Free.\n No Cost, Just Order And Enjoy.",
    },
  ];
  
const category = [
    {
        img: burger,
        name: "Chicken Burger",
        
    },
    {
        img: pizza,
        name: "Chicken Pizza",
    },
    {
        img: fries,
        name: "French Fries",
    },
];
const menu = [
    {
        img: menu1,
        title: "Chicken Burger",
        price: "$3.50",
    },
    {
        img: menu2,
        title: "Chicken Pizza",
        price: "$4.29"
    },
    {
        img: menu3,
        title: "Chicken Fry",
        price: "$5.00"
    },
    {
        img: menu4,
        title: "Grill Sandwich",
        price: "$4.80"
    },
    {
        img: menu5,
        title: "Taco Traifi",
        price: "$3.63"
    },
    {
        img: menu6,
        title: "Noddle's Ramen",
        price: "$6.50"
    },
];
const offers = [
    {
        img: discount,
    },
    {
        img: offers1,
    }
]

export { home, details, category, menu, offers}