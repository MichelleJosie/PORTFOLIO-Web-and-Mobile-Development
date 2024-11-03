import { ProductCard } from "../components/productoverview";
import { SliderItemType } from "../components/slider";

export type ArticleType = {
  image: string;
  alt: string;
  title: string;
  description: string;
  author: string;
  readingTime: string;
};

export type CategoryType =
  | "Dog"
  | "Cat"
  | "Horse"
  | "Small Animal"
  | "Bird"
  | "Fish";

export const dogProductList: ProductCard[] = [
  {
    productImage:
      "https://media.zooplus.com/bilder/0/400/pla_rocco_rolls_chicken_1000x1000_0.jpg",
    productImageAlt: "Picture of Rocco Rolls Chew Sticks",
    productId: "001",
    productName: "Rocco Rolls Chew Sticks",
    price: 2.99,
    pricePerKilo: 14.95,
    productBadge: "New",
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/6/400/147296_pla_rocco_curls_chicken_200g_1000x1000_6.jpg",
    productImageAlt: "Picture of Rocco Curls",
    productId: "002",
    productName: "Rocco Curls",
    price: 3.79,
    pricePerKilo: 18.95,
    productBadge: "Trending",
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/9/400/wow_thetasteof_canada_300g_1000x1000_9.jpg",
    productImageAlt: "Picture of Wolf of Wilderness Dry Dog Food Trial Pack",
    productId: "003",
    productName: "Wolf of Wilderness Dry Dog Food Trial Pack",
    price: 1.99,
    pricePerKilo: 4.98,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/6/400/28021_pla_megapack_rocc_classic_rindpur_400g_hs_01_6.jpg",
    productImageAlt: "Picture of Rocco Classic 6 x 400g",
    productId: "004",
    productName: "Rocco Classic 6 x 400g",
    price: 7.49,
    pricePerKilo: 3.12,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/4/400/wow_classic_blueriver_1kg_1000x1000_4.jpg",
    productImageAlt:
      'Picture of Wolf of Wilderness Adult "Blue River" - Salmon - grain-free',
    productId: "005",
    productName: 'Wolf of Wilderness Adult "Blue River" - Salmon - grain-free',
    price: 26.49,
    pricePerKilo: 5.3,
  },
];

export const catProductList: ProductCard[] = [
  {
    productImage:
      "https://media.zooplus.com/bilder/2/400/101377_pla_cosma_soup_mixbox_12x40g_2.jpg",
    productImageAlt: "Picture of Cosma Soup Saver Pack 24 x 40g",
    productId: "006",
    productName: "Cosma Soup Saver Pack 24 x 40g",
    price: 12.99,
    pricePerKilo: 13.53,
    productBadge: "New",
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/1/400/tigerino_premium_babypowder_12kg_1000x1000_1.jpg",
    productImageAlt:
      "Picture of Tigerino Premium Cat Litter - Baby Powder Scent",
    productId: "007",
    productName: "Tigerino Premium Cat Litter - Baby Powder Scent",
    price: 11.49,
    pricePerPiece: 0.96,
    productBadge: "Trending",
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/3/400/wildfreedom_widecountry_front_2kg_1000x1000_3.jpg",
    productImageAlt:
      'Picture of Wild Freedom Adult "Wide Country" Poultry - Grain-free',
    productId: "008",
    productName: 'Wild Freedom Adult "Wide Country" Poultry - Grain-free',
    price: 16.49,
    pricePerKilo: 8.25,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/7/400/1_tigerino_crystal_lavender_5l_1000x1000_7.jpg",
    productImageAlt: "Picture of Tigerino Crystals Cat Litter - Lavender Scent",
    productId: "009",
    productName: "Tigerino Crystals Cat Litter - Lavender Scent",
    price: 33.99,
    pricePerLiter: 1.13,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/0/400/102943_pla_cosma_asia_mix_6x100g_pouchbox_0.jpg",
    productImageAlt: "Picture of Cosma Asia in Jelly Pouches 6 x 100g",
    productId: "010",
    productName: "Cosma Asia in Jelly Pouches 6 x 100g",
    price: 7.49,
    pricePerKilo: 12.48,
  },
];

export const horseProductList: ProductCard[] = [
  {
    productImage:
      "https://media.zooplus.com/bilder/5/400/65090_pla_stephans_muehle_heucobs_staubfrei_25kg_5.jpg",
    productImageAlt: "Picture of Stephans Mühle hay cobs - without soaking",
    productId: "011",
    productName: "Stephans Mühle hay cobs - without soaking",
    price: 29.99,
    pricePerKilo: 1.2,
    productBadge: "New",
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/6/400/62198_PLA_Muehldorfer_Revital_Klinikum_preobiotic_6.jpg",
    productImageAlt: "Picture of Stephans Mühle horse treat banana",
    productId: "012",
    productName: "Stephans Mühle horse treat banana",
    price: 3.99,
    pricePerPiece: 3.99,
    productBadge: "Trending",
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/6/400/105935_pla_muehldorfer_karotten_chips_6.jpg",
    productImageAlt: "Picture of Mühldorfer carrot chips",
    productId: "013",
    productName: "Mühldorfer carrot chips",
    price: 21.99,
    pricePerKilo: 6.28,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/2/400/61894_pla_muehldorfer_heucobs_medium_2.jpg",
    productImageAlt: "Picture of Mühldorfer hay cobs medium",
    productId: "014",
    productName: "Mühldorfer hay cobs medium - 20kg",
    price: 30.39,
    pricePerKilo: 1.52,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/0/400/102943_pla_cosma_asia_mix_6x100g_pouchbox_0.jpg",
    productImageAlt: "Picture of Mühldorfer's Equichamp structure",
    productId: "015",
    productName: "Mühldorfer's Equichamp structure - 20kg",
    price: 34.99,
    pricePerKilo: 1.75,
  },
];

export const combinedProductList: ProductCard[] = [
  ...dogProductList,
  ...catProductList,
  ...horseProductList,
];

export const dogSaleList: SliderItemType[] = [
  {
    logo: "https://images.ctfassets.net/qp85kbzn8noe/1eSIcSvL1O9nWsDvGHcIrV/d4d31133757a4229441f148c800f31ab/2024_08_AnniversaryCampaign_LCB_Offer_Week1_2880x480_DE.jpg?fm=webp&w=1005&q=85",
    alt: "Up to 30 percent birthday deal for top brands such as Jsera and RINTI.",
  },
  {
    logo: "https://images.ctfassets.net/qp85kbzn8noe/6aqfzjVYXqIVyyLBHDITGH/908170356e666dbe00a010a2b606d072/2024_06_Briantos_Snack_ChewBones_1000x160_DE__2_.jpg?fm=webp&w=1005&q=85",
    alt: "Try the New Briantos dog Products",
  },
  {
    logo: "https://images.ctfassets.net/qp85kbzn8noe/1OHLJNAOgW2gStYposWTL0/7f340699ca25da7b68a6662b4e0f6366/2024_09_AppBanner_General_2880x480_UK.jpg?fm=webp&w=1005&q=85",
    alt: "check out our App for handy features & exclusive deals",
  },
];

export const dogBrandList: SliderItemType[] = [
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/3CJr9HOhx68CYQMWEkyoCm/88fcf851e0260bdb93bbf394dbe45a7f/logo_RoyalCanin_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Royal Canin",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/3hBjxpBe4osM42wIg4UOUs/4d06a9692348b2b9cf1710991f191478/logo_Pedigree_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Pedigree",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1ApsdLMSdKSoMUgCSEUG46/72b92fa1a78dadee0b8d519b25e3b67f/logo_Hills_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Hills",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1j1n1hoXf444kgO4EkOKIo/940db5c84a1aeede46f339389938b718/logo_Rocco_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Rocco",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/NHpHEAtJcago0EmYM2soG/699e6669937aa078faec42329d686acc/logo_Felix_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Felix",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/4nP2douo2Q0OE4co8qS2ws/d3f83efd1a4536f0a13d7d06f06fb05e/logo_Animonda_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "animonda",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/53wmaxweu4sMsqs0eMu2cW/3686e98f0ed22f522f9621e6d0d64f30/logo_Cosma_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Cosma",
  },
];

export const magazineList: ArticleType[] = [
  {
    title: "Allergies affecting dogs",
    alt: "a dog that scratches itself",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/12/allergies-affecting-dogs-1024x683.jpg",
    author: "zooplus",
    description:
      "If a dog regularly scratches itself, we initially think parasites are the cause. However, there are further reasons for itchiness, such as allergies. Even dogs are affected by allergies and the number of allergic illnesses is increasing.",
    readingTime: "9 min",
  },
  {
    title: "Pixiebob",
    alt: "a walking cat with a short tail",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2024/08/Pixiebob.jpg",
    author: "Natalie Decker",
    description:
      "Short tail, spotted fur, tufts of hair in the ears: the Pixiebob looks like a little lynx. But its shortened tail often causes problems in everyday cat life, which is why this breed is considered to be the result of breeding for physical traits that can cause suffering.",
    readingTime: "7 min",
  },
  {
    title: "Hermelin Rabbits",
    alt: "a rabbit outside",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2024/08/Hermelin-Rabbits.jpg",
    author: "Franziska G., Veterinarian",
    description:
      "The Hermelin rabbit is considered the archetype of the dwarf rabbit. Its good-natured character and rounded body shape make it one of the most popular rabbit breeds. Discover what it is like to live with these white dwarves and what to consider when keeping them in this guide",
    readingTime: "7 min",
  },
  {
    title: "Diamond Dove",
    alt: "a bird sitting on a branch",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2024/08/AdobeStock_300034398-768x512-1.jpeg",
    author: "Natalie Decker",
    description:
      "Easily recognisable by their white-speckled wings and the orange ring around their eyes, the diamond dove is a noteworthy exotic petite pigeon hailing from Australia. Nowadays, bird enthusiasts and hobby breeders around the world delight over these sociable birds.",
    readingTime: "7 min",
  },
];
