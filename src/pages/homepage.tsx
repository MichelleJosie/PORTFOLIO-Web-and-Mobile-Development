import { Title } from "@solidjs/meta";
import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  Match,
  Show,
  Switch,
} from "solid-js";
import DogIcon from "../assets/dog_02.svg";
import CatIcon from "../assets/cat_01.svg";
import BirdIcon from "../assets/dove_pigeon_02.svg";
import FishIcon from "../assets/fish_butterflyfish.svg";
import SmallAnimalIcon from "../assets/hare_01.svg";
import HorseIcon from "../assets/horse_01.svg";

type ProductCard = {
  productId: string;
  productName: string;
  price: number;
  pricePerKilo?: number;
  pricePerPiece?: number;
  pricePerLiter?: number;
  productImage: string;
  productImageAlt: string;
};
export type CategoryType =
  | "Dog"
  | "Cat"
  | "Horse"
  | "Small Animal"
  | "Bird"
  | "Fish";
const CategoryList: CategoryType[] = [
  "Dog",
  "Cat",
  "Horse",
  "Small Animal",
  "Bird",
  "Fish",
];
export const dogProductList: ProductCard[] = [
  {
    productImage:
      "https://media.zooplus.com/bilder/0/400/pla_rocco_rolls_chicken_1000x1000_0.jpg",
    productImageAlt: "Picture of Rocco Rolls Chew Sticks",
    productId: "001",
    productName: "Rocco Rolls Chew Sticks",
    price: 2.99,
    pricePerKilo: 14.95,
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/6/400/147296_pla_rocco_curls_chicken_200g_1000x1000_6.jpg",
    productImageAlt: "Picture of Rocco Curls",
    productId: "002",
    productName: "Rocco Curls",
    price: 3.79,
    pricePerKilo: 18.95,
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
  },
  {
    productImage:
      "https://media.zooplus.com/bilder/6/400/62198_PLA_Muehldorfer_Revital_Klinikum_preobiotic_6.jpg",
    productImageAlt: "Picture of Stephans Mühle horse treat banana",
    productId: "012",
    productName: "Stephans Mühle horse treat banana",
    price: 3.99,
    pricePerPiece: 3.99,
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
const dogSaleList: SliderItemType[] = [
  {
    logo: "https://images.ctfassets.net/qp85kbzn8noe/1eSIcSvL1O9nWsDvGHcIrV/d4d31133757a4229441f148c800f31ab/2024_08_AnniversaryCampaign_LCB_Offer_Week1_2880x480_DE.jpg?fm=webp&w=1005&q=85",
    alt: "Up to 30% birthday deal for top brands such as Jsera and RINTI.",
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

const dogBrandList: SliderItemType[] = [
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/3CJr9HOhx68CYQMWEkyoCm/88fcf851e0260bdb93bbf394dbe45a7f/logo_RoyalCanin_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Royal Canin Logo",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/3hBjxpBe4osM42wIg4UOUs/4d06a9692348b2b9cf1710991f191478/logo_Pedigree_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Pedigree Logo",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1ApsdLMSdKSoMUgCSEUG46/72b92fa1a78dadee0b8d519b25e3b67f/logo_Hills_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Hills Logo",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1j1n1hoXf444kgO4EkOKIo/940db5c84a1aeede46f339389938b718/logo_Rocco_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Rocco Logo",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/NHpHEAtJcago0EmYM2soG/699e6669937aa078faec42329d686acc/logo_Felix_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Felix Logo",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/4nP2douo2Q0OE4co8qS2ws/d3f83efd1a4536f0a13d7d06f06fb05e/logo_Animonda_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "animonda Logo",
  },
  {
    logo: "https://images.ctfassets.net/w4bhfqu0yxyq/53wmaxweu4sMsqs0eMu2cW/3686e98f0ed22f522f9621e6d0d64f30/logo_Cosma_1000x700.jpg?fm=webp&w=130&q=85",
    alt: "Cosma Logo",
  },
];
type ListItems = {
  title: string;
  list: ProductCard[];
};
const Homepage = () => {
  const [showAlert, setShowAlert] = createSignal(false);
  const [currentCategory, setCurrentCategory] =
    createSignal<CategoryType>("Dog");
  const [popularPicksList, setPopularPicksList] = createSignal<ListItems>({
    title: "The Most Popular Picks for Your Dog",
    list: dogProductList,
  });

  const submitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget as any);
    setShowAlert(true);
  };

  const changeList = (category: CategoryType) => {
    switch (category) {
      case "Dog":
        setPopularPicksList({
          title: "The Most Popular Picks for Your Dog",
          list: dogProductList,
        });

        break;
      case "Cat":
        setPopularPicksList({
          title: "The Most Popular Picks for Your Cat",
          list: catProductList,
        });

        break;
      case "Horse":
        setPopularPicksList({
          title: "The Most Popular Picks for Your Horse",
          list: horseProductList,
        });

        break;
      case "Small Animal":
        setPopularPicksList({
          title: "The Most Popular Picks for Your Small Animal",
          list: catProductList,
        });

        break;
      case "Bird":
        setPopularPicksList({
          title: "The Most Popular Picks for Your Bird",
          list: horseProductList,
        });

        break;
      case "Fish":
        setPopularPicksList({
          title: "The Most Popular Picks for Your Fish",
          list: dogProductList,
        });

        break;

      default:
        setPopularPicksList({
          title: "",
          list: [],
        });
        break;
    }
  };

  return (
    <>
      <Title>Zooplus-Homepage</Title>
      <div class="container mx-auto px-8">
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96 lg:h-[33rem]">
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-1"
            >
              <img
                src="https://images.ctfassets.net/qp85kbzn8noe/4EXIJd8wWtaF5M3eIugBj4/3d6eb67a9178150804d3552ed8366c76/2024_09_AnniversaryCampaign_General_Week2_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="30% off on Cat and Dog products"
              />
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-2"
            >
              <img
                src="https://images.ctfassets.net/qp85kbzn8noe/22egLM2kBbsHq9jOvXrWiL/bd5bf7a4453f5ccefa217745b3c940a9/2024_09_AnniversaryCampaign_AppExclusive_OBF_Week3_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="15% off on products from selected brands"
              />
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-3"
            >
              <img
                src="https://images.ctfassets.net/qp85kbzn8noe/6pwvQSKVaKM9dxOVVBndEj/6bb8ccf906a804c402151f4c3f1e7d48/2024_09_AnniversaryCamapign_Autoship_Week2_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="15% off your first subscription order"
              />
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-4"
            >
              <img
                src="https://images.ctfassets.net/qp85kbzn8noe/3A1jSe8wdjaYjjJufSkHr8/ad02d8fb9ea174f4d6ffc69dd3f898ec/2024_09_Hills_SciencePlan_Dry_D_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="20% off on Hills best Dog and Cat Food"
              />
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-5"
            >
              <img
                src="https://images.ctfassets.net/qp85kbzn8noe/1ZzEy6m1hLlKDIdDPvlYB4/69ed32174acc959eebfcf35e706431cc/2024_08_AnniversaryCampaign_OwnBrands_Accessories_Tiaki_ModernLiving_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="25% for TIAKI products"
              />
            </div>
          </div>
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
        <h2 class="capitalize py-8 text-4xl font-extrabold">
          Find Products for Your Pet
        </h2>

        <For each={CategoryList}>
          {(item) => (
            <button
              onClick={() => changeList(item)}
              type="button"
              class="text-white bg-primary hover:bg-secondary font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <div class="flex flex-row items-center align-middle gap-4">
                <Switch fallback={<div>Not Found</div>}>
                  <Match when={item == "Dog"}>
                    <DogIcon />
                  </Match>
                  <Match when={item == "Cat"}>
                    <CatIcon />
                  </Match>
                  <Match when={item == "Horse"}>
                    <HorseIcon />
                  </Match>
                  <Match when={item == "Small Animal"}>
                    <SmallAnimalIcon />
                  </Match>
                  <Match when={item == "Bird"}>
                    <BirdIcon />
                  </Match>
                  <Match when={item == "Fish"}>
                    <FishIcon />
                  </Match>
                </Switch>
                <div>{item}</div>
              </div>
            </button>
          )}
        </For>
        <ProductOverview
          link={`/bestsellers/${currentCategory()}`}
          title={popularPicksList().title}
          list={popularPicksList().list}
        />
      </div>
      <Slider
        id="DogBrandCarousel"
        showCards={4}
        title="The Most Popular Brands for Your Dog"
        list={dogBrandList}
      />
      <div class="container mx-auto px-8">
        <ProductOverview
          link="#"
          title="The Most Popular Accessories for Your Dog"
          list={dogProductList}
        />
      </div>
      <div class="w-screen py-32 bg-background-primary">
        <div class="container mx-auto px-8">
          <h3 class="capitalize mb-4 text-4xl font-extrabold text-white">
            Newsletter
          </h3>
          <p class="text-white mb-4">
            Don't miss out on personalized offers, discounts and vouchers! Get
            an extra 333 zooPoints when you sign up for the newsletter now.
          </p>
          <form
            class="flex mb-3 gap-2 flex-col md:flex-row md:items-end"
            onSubmit={(e) => submitHandler(e)}
          >
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                name="newsletter"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="E-Mail address"
              />
            </div>
            <button
              type="submit"
              class="text-black bg-accent hover:bg-light font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Sign me up!
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div class="container mx-auto px-8 py-12">
        <ProductOverview
          link="#"
          title="Your Last Viewed Products"
          list={dogProductList}
        />
        <h3 class="capitalize mb-4 text-4xl font-extrabold text-black">
          The Zooplus Magazine
        </h3>
        <p class="text-black text-lg mb-8">
          Our pet magazine provides you with information on everything that is
          important in life with a pet. Whether you have a cat, dog, bird, small
          animal, horse or fish - we provide you with valuable tips on caring
          for and keeping your pet.
        </p>
        <div class="text-center my-8">
          <button
            type="button"
            class="text-black bg-accent hover:bg-light font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Discover the Magazine!
          </button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-4 md:px-6">
          <For each={magazineList}>
            {(item) => (
              <a
                href="#"
                class="border border-card-border shadow hover:drop-shadow-lg transition-all h-full w-full flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100"
              >
                <img
                  class="object-cover w-full md:w-44 lg:w-48 xl:w-72 rounded-t-lg h-full md:rounded-none md:rounded-s-lg"
                  src={item.image}
                  alt={item.alt}
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <p class="mb-2 font-normal text-sm text-text-muted ">
                    <span class="bg-light text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg me-2 mb-2">
                      <svg
                        class="w-2.5 h-2.5 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                      </svg>
                      {item.readingTime}
                    </span>
                    <br />
                    {item.author}
                  </p>
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                    lang="en"
                  >
                    {item.title}
                  </h5>
                  <p class="mb-2 font-normal text-gray-700 hyphens-auto text-justify line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </a>
            )}
          </For>
        </div>
      </div>
      <Slider
        id="DealCarousel"
        showCards={1}
        title="The best Deals for You!"
        list={dogSaleList}
      />
    </>
  );
};
export default Homepage;

const magazineList: ArticleType[] = [
  {
    title: "Allergies affecting dogs",
    alt: "an image of a dog that scatches itself",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/12/allergies-affecting-dogs-1024x683.jpg",
    author: "zooplus",
    description:
      "If a dog regularly scratches itself, we initially think parasites are the cause. However, there are further reasons for itchiness, such as allergies. Even dogs are affected by allergies and the number of allergic illnesses is increasing.",
    readingTime: "9 min",
  },
  {
    title: "Pixiebob",
    alt: "an Image of a walking cat with a short tail",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2024/08/Pixiebob.jpg",
    author: "Natalie Decker",
    description:
      "Short tail, spotted fur, tufts of hair in the ears: the Pixiebob looks like a little lynx. But its shortened tail often causes problems in everyday cat life, which is why this breed is considered to be the result of breeding for physical traits that can cause suffering.",
    readingTime: "7 min",
  },
  {
    title: "Hermelin Rabbits",
    alt: "an Image of a rabbit outside",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2024/08/Hermelin-Rabbits.jpg",
    author: "Franziska G., Veterinarian",
    description:
      "The Hermelin rabbit is considered the archetype of the dwarf rabbit. Its good-natured character and rounded body shape make it one of the most popular rabbit breeds. Discover what it is like to live with these white dwarves and what to consider when keeping them in this guide",
    readingTime: "7 min",
  },
  {
    title: "Diamond Dove",
    alt: "an Image of a bird sitting on a branch",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2024/08/AdobeStock_300034398-768x512-1.jpeg",
    author: "Natalie Decker",
    description:
      "Easily recognisable by their white-speckled wings and the orange ring around their eyes, the diamond dove is a noteworthy exotic petite pigeon hailing from Australia. Nowadays, bird enthusiasts and hobby breeders around the world delight over these sociable birds.",
    readingTime: "7 min",
  },
];

type ArticleType = {
  image: string;
  alt: string;
  title: string;
  description: string;
  author: string;
  readingTime: string;
};

type SliderItemType = {
  logo: string;
  alt: string;
};
type SliderProps<P = {}> = P & {
  children?: JSX.Element;
  list: SliderItemType[];
  title: string;
  showCards: number;
  id: string;
};
type SliderComponent<P = {}> = Component<SliderProps<P>>;

const Slider: SliderComponent = (props: SliderProps) => {
  const [position, setPosition] = createSignal(0);
  const [list, _] = createSignal<SliderItemType[]>(props.list);

  createEffect(() => {
    const cardcontainer = document.getElementById(props.id);
    const containerwidth = cardcontainer?.getBoundingClientRect().width || 0;
    const elementwidth = containerwidth / list().length;
    cardcontainer?.scrollTo({
      left: elementwidth * position(),
      behavior: "smooth",
    });
  });

  return (
    <>
      <div class="bg-background-primary w-screen py-16">
        <div class="container mx-auto px-8">
          <h3 class="capitalize pb-8 text-4xl font-extrabold text-white">
            {props.title}
          </h3>
          <div class="w-full flex flex-row">
            <div class="items-center pl-2 hidden sm:flex">
              <button
                disabled={position() == 0}
                onClick={() =>
                  setPosition((prev: number) => (prev == 0 ? prev : prev - 1))
                }
                type="button"
                class="border-4 border-accent bg-primary hover:bg-green-800 rounded-full p-2.5"
              >
                <svg
                  class="w-4 h-4 rotate-180 text-accent"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">previous Slide</span>
              </button>
            </div>
            <div class="grow">
              <div
                id={props.id}
                class="snap-x snap-mandatory grow flex flex-row w-full overflow-auto sm:overflow-hidden"
              >
                <For each={list()}>
                  {(item) => (
                    <>
                      <a
                        href="#"
                        class="p-1 md:p-2 snap-start rounded-lg"
                        classList={{
                          "min-w-slider-1": props.showCards == 1,
                          "min-w-slider-2": props.showCards == 2,
                          "min-w-slider-3": props.showCards == 3,
                          "min-w-slider-4": props.showCards == 4,
                        }}
                      >
                        <img
                          class="object-cover h-full w-full rounded-lg pointer-events-none"
                          src={item.logo}
                          alt={item.alt}
                        />
                      </a>
                    </>
                  )}
                </For>
              </div>
            </div>
            <div class="items-center pl-2 hidden sm:flex">
              <button
                onClick={() =>
                  setPosition((prev: number) =>
                    prev == list().length - 4 ? prev : prev + 1
                  )
                }
                type="button"
                class="border-4 border-accent bg-primary hover:bg-green-800 rounded-full p-2.5"
              >
                <svg
                  class="w-4 h-4 text-accent"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Next Slide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type ProductOverviewProps<P = {}> = P & {
  children?: JSX.Element;
  title: string;
  list: ProductCard[];
  link: string;
};
type ProductOverviewComponent<P = {}> = Component<ProductOverviewProps<P>>;

const ProductOverview: ProductOverviewComponent = (
  props: ProductOverviewProps
) => {
  return (
    <>
      <div class="py-12">
        <h2 class="capitalize pb-8 text-4xl font-extrabold">{props.title}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 gap-2 md:gap-5 md:px-4">
          <For each={props.list}>
            {(item) => <ProductCardView item={item} />}
          </For>
        </div>
        <div class="text-center">
          <h3 class="py-8 text-2xl font-semibold">
            Looking for more top products? Click here and find your new
            favorites!
          </h3>
          <a
            href={props.link}
            type="button"
            class="text-black bg-accent hover:bg-light font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Discover more!
          </a>
        </div>
      </div>
    </>
  );
};
export type ProductCardViewProps<P = {}> = P & {
  children?: JSX.Element;
  item: ProductCard;
};
export type ProductCardViewComponent<P = {}> = Component<
  ProductCardViewProps<P>
>;

export const ProductCardView: ProductCardViewComponent = (props) => {
  const item = props.item;
  return (
    <>
      <a
        href="#"
        class="flex flex-col hover:bg-gray-100 max-w-sm bg-white border border-card-border rounded-lg shadow hover:drop-shadow-lg transition-all"
      >
        <img
          class="rounded-t-lg"
          src={item.productImage}
          alt={item.productImageAlt}
        />
        <div class="p-5 grow flex flex-col">
          <div class="grow">
            <h5 class="mb-3 font-semibold tracking-tight text-gray-900 line-clamp-3">
              {item.productName}
            </h5>
          </div>
          <p class="font-bold text-gray-700">{`£${item.price}`}</p>
          <Show when={item.pricePerKilo}>
            <p class="font-normal text-sm text-slate-500">
              {`£${item.pricePerKilo} / kg`}
            </p>
          </Show>
          <Show when={item.pricePerLiter}>
            <p class="font-normal text-sm text-slate-500">
              {`£${item.pricePerLiter} / l`}
            </p>
          </Show>
          <Show when={item.pricePerPiece}>
            <p class="font-normal text-sm text-slate-500">
              {`£${item.pricePerPiece} / per piece`}
            </p>
          </Show>
        </div>
      </a>
    </>
  );
};
