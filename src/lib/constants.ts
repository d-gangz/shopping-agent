export type Item = {
  name: string;
  description: string;
  type: "bbq" | "cat";
  buyLink: string;
};

export const itemsArray: Item[] = [
  {
    name: "Weber Original Kettle Premium Charcoal Grill",
    description:
      "Classic 22-inch charcoal grill with precision heat control and one-touch cleaning system",
    type: "bbq",
    buyLink:
      "https://www.weber.com/US/en/grills/charcoal-grills/original-kettle-series/14401001.html",
  },
  {
    name: "Thermapen ONE Digital Meat Thermometer",
    description:
      "Professional-grade instant-read thermometer with ±0.5°F accuracy and waterproof design",
    type: "bbq",
    buyLink: "https://www.thermoworks.com/thermapen-one/",
  },
  {
    name: "Traeger Pro 780 Wood Pellet Grill",
    description:
      "WiFi-enabled pellet grill with 780 sq in cooking space and precision temperature control",
    type: "bbq",
    buyLink: "https://www.traeger.com/pellet-grills/pro/780",
  },
  {
    name: "Modkat XL Litter Box",
    description:
      "Top-entry litter box with seamless base design and reusable liner for easy cleaning",
    type: "cat",
    buyLink: "https://modkat.com/products/modkat-xl-litter-box",
  },
  {
    name: "Cat Tree Kingdom Giant Cat Tower",
    description:
      "Multi-level cat tower with scratching posts, hideaways and perches for multiple cats",
    type: "cat",
    buyLink: "https://cattreekingdom.com/products/giant-cat-tower",
  },
  {
    name: "Catit PIXI Smart Water Fountain",
    description:
      "Smart pet fountain with UV sterilization and water quality monitoring via app",
    type: "cat",
    buyLink: "https://catit.com/shop/pixi-smart-fountain/",
  },
  {
    name: "Meater+ Smart Wireless Meat Thermometer",
    description:
      "Wireless smart thermometer with 165ft range and guided cooking app integration",
    type: "bbq",
    buyLink: "https://meater.com/product/meater-plus/",
  },
  {
    name: "Looftlighter Electric Fire Starter",
    description:
      "Powerful electric charcoal starter that ignites coals in 60 seconds without chemicals",
    type: "bbq",
    buyLink: "https://looftlighter.com/products/looftlighter-original",
  },
  {
    name: "BBQ Dragon Spin Grate",
    description:
      "Rotating grill grate system for even cooking and easier food handling",
    type: "bbq",
    buyLink: "https://bbqdragon.com/products/spin-grate",
  },
  {
    name: "PetFusion Ultimate Cat Scratcher Lounge",
    description:
      "Premium cardboard scratcher and lounge with curved design and reversible surfaces",
    type: "cat",
    buyLink: "https://petfusion.com/products/ultimate-cat-scratcher-lounge",
  },
  {
    name: "Petlibro Automatic Cat Feeder",
    description:
      "Smart pet feeder with programmable meals, portion control and voice recording",
    type: "cat",
    buyLink: "https://petlibro.com/products/automatic-pet-feeder",
  },
  {
    name: "Hepper Cat Nest Bed",
    description:
      "Modern pod-style cat bed with plush interior and elevated design for comfort",
    type: "cat",
    buyLink: "https://www.hepper.com/products/nest-bed",
  },
];
