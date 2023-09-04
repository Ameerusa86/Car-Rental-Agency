const NavLinks = [
  {
    name: "Home",
    url: "home",
  },
  {
    name: "Cars",
    url: "cars",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Why Us",
    url: "why-us",
  },
  {
    name: "Testimonials",
    url: "testimonials",
  },
  {
    name: "Contact",
    url: "contact",
  },
  // {
  //   name: "Search Mobile",
  //   url: "search-mobile",
  // },
];

const CarsBrands = [
  {
    img: "/icons/brands/audi.svg",
  },
  {
    img: "/icons/brands/bmw.svg",
  },
  {
    img: "/icons/brands/ford.svg",
  },
  {
    img: "/icons/brands/mazda.svg",
  },
  {
    img: "/icons/brands/mercedes.svg",
  },
  {
    img: "/icons/brands/skoda.svg",
  },
  {
    img: "/icons/brands/vw.svg",
  },
];

const cars = [
  {
    type: "hatchback",
    name: "Ford Focus",
    price: 30,
    stars: "/icons/Star.svg",
    image: "/images/carSlider/car01.svg",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "4 Seats",
      },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: "/icons/Star.svg",
    image: "/images/carSlider/car02.svg",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "4 Seats",
      },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: "/icons/Star.svg",
    image: "/images/carSlider/car03.svg",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "7 Seats",
      },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 45,
    stars: "/icons/Star.svg",
    image: "/images/carSlider/car02.svg",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
];

const Testimonials = [
  {
    message:
      "They truly exceeded the expectations and made my car rental experience delight.",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Software Engineer",
  },
  {
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Software Engineer",
  },
];

export { NavLinks, CarsBrands, cars, Testimonials };
