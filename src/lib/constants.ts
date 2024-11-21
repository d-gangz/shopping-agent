export type DogItemType =
  | "toys"
  | "beds"
  | "food"
  | "grooming"
  | "training"
  | "health";

export type Item = {
  name: string;
  description: string;
  type: DogItemType;
  buyLink: string;
  price: number;
};

export const itemsArray: Item[] = [
  {
    name: "KONG Extreme Goodie Bone",
    description:
      "Ultra-durable rubber bone toy with treat-dispensing ends for aggressive chewers",
    type: "toys",
    buyLink:
      "https://www.amazon.com/KONG-Extreme-Goodie-Bone-Large/dp/B0002AR0II",
    price: 12.99,
  },
  {
    name: "PetFusion Ultimate Dog Bed",
    description:
      "Memory foam orthopedic bed with water-resistant cover and bolster cushions",
    type: "beds",
    buyLink:
      "https://www.amazon.com/PetFusion-Ultimate-Solid-Memory-Orthopedic/dp/B00TQ47CPW",
    price: 89.95,
  },
  {
    name: "Blue Buffalo Life Protection Formula",
    description: "Natural dry dog food with real meat as first ingredient",
    type: "food",
    buyLink:
      "https://www.amazon.com/Blue-Buffalo-Protection-Formula-Adult/dp/B000GF3T6K",
    price: 54.99,
  },
  {
    name: "Earthbath All Natural Pet Shampoo",
    description: "Gentle oatmeal and aloe vera shampoo for sensitive skin",
    type: "grooming",
    buyLink:
      "https://www.amazon.com/Earthbath-Natural-Oatmeal-Aloe-Shampoo/dp/B0002IEYIE",
    price: 12.99,
  },
  {
    name: "PetSafe Remote Training Collar",
    description: "Adjustable training collar with 15 levels of correction",
    type: "training",
    buyLink:
      "https://www.amazon.com/PetSafe-Remote-Trainer-Waterproof-Rechargeable/dp/B00QHWX0GO",
    price: 129.99,
  },
  {
    name: "Zesty Paws Multivitamin Bites",
    description: "8-in-1 supplement with glucosamine, probiotics and vitamins",
    type: "health",
    buyLink:
      "https://www.amazon.com/Zesty-Paws-Multivitamin-Digestive-Supplement/dp/B00H0WL2EA",
    price: 25.97,
  },
  {
    name: "Chuckit! Ultra Ball",
    description: "High-bounce durable rubber ball perfect for fetch",
    type: "toys",
    buyLink:
      "https://www.amazon.com/Chuckit-Ultra-Ball-Medium-2-Pack/dp/B000F4AVPA",
    price: 8.99,
  },
  {
    name: "FURminator Undercoat deShedding Tool",
    description: "Professional grooming brush to reduce shedding",
    type: "grooming",
    buyLink:
      "https://www.amazon.com/FURminator-Undercoat-deShedding-Tool-Large/dp/B000FSN0Y4",
    price: 34.99,
  },
  {
    name: "Taste of the Wild Grain-Free Dog Food",
    description: "Premium dry food with roasted meat and natural ingredients",
    type: "food",
    buyLink:
      "https://www.amazon.com/Taste-Wild-Prairie-Grain-Free-Protein/dp/B000W5SLB8",
    price: 49.99,
  },
  {
    name: "Outward Hound Fun Feeder",
    description: "Slow feeder bowl to prevent bloat and improve digestion",
    type: "training",
    buyLink:
      "https://www.amazon.com/Outward-Hound-Feeder-Bloat-Small/dp/B00FPKNRF0",
    price: 18.99,
  },
  {
    name: "KONG Classic Dog Toy",
    description: "Durable rubber toy that can be filled with treats",
    type: "toys",
    buyLink:
      "https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B0002AR0I8",
    price: 12.99,
  },
  {
    name: "Nutramax Cosequin Joint Supplement",
    description: "Glucosamine and chondroitin supplement for joint health",
    type: "health",
    buyLink:
      "https://www.amazon.com/Nutramax-Cosequin-Maximum-Strength-Chewable/dp/B00028ZL7Q",
    price: 32.99,
  },
  {
    name: "Barkbox Memory Foam Dog Bed",
    description: "Therapeutic gel memory foam bed with machine washable cover",
    type: "beds",
    buyLink:
      "https://www.amazon.com/BarkBox-Orthopedic-Ultra-Plush-Pressure-Relief/dp/B073F5CXQH",
    price: 69.99,
  },
  {
    name: "TropiClean PerfectFur Shampoo",
    description: "Professional grade shampoo for thick or long coats",
    type: "grooming",
    buyLink:
      "https://www.amazon.com/TropiClean-PerfectFur-Thick-Shampoo-Dogs/dp/B07NDNV5RK",
    price: 14.99,
  },
  {
    name: "Mammoth Flossy Chews Rope Toy",
    description: "Cotton blend rope for tug-of-war and dental health",
    type: "toys",
    buyLink:
      "https://www.amazon.com/Mammoth-Flossy-Chews-Cotton-White/dp/B003WH17EQ",
    price: 9.99,
  },
  {
    name: "Pet Naturals Daily Multivitamin",
    description: "Chicken liver flavored vitamin and mineral supplement",
    type: "health",
    buyLink:
      "https://www.amazon.com/Pet-Naturals-Vermont-Daily-Multi/dp/B002XZXVPS",
    price: 15.99,
  },
  {
    name: "Trixie Dog Activity Strategy Game",
    description: "Interactive puzzle toy for mental stimulation",
    type: "training",
    buyLink:
      "https://www.amazon.com/Trixie-Pet-Products-Strategy-Game/dp/B0054Q9TMA",
    price: 24.99,
  },
  {
    name: "K&H Pet Products Elevated Dog Bed",
    description: "Raised mesh bed for outdoor and indoor use",
    type: "beds",
    buyLink:
      "https://www.amazon.com/K-H-Pet-Products-Original-Elevated/dp/B004E2NGWC",
    price: 44.99,
  },
  {
    name: "Jolly Pets Tug-n-Toss Ball",
    description: "Heavy duty rubber ball with handle for interactive play",
    type: "toys",
    buyLink:
      "https://www.amazon.com/Jolly-Pets-Tug-n-Toss-6-Inch-Red/dp/B0002DK9OW",
    price: 15.99,
  },
  {
    name: "VetriScience Canine Plus Senior",
    description: "Comprehensive multivitamin for senior dogs",
    type: "health",
    buyLink:
      "https://www.amazon.com/VetriScience-Laboratories-Canine-Plus-Senior/dp/B002FNZRV0",
    price: 28.99,
  },
];
