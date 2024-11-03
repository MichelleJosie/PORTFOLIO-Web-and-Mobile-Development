import { Meta, Title } from "@solidjs/meta";
import { createSignal, For, Match, Switch } from "solid-js";
import DogIcon from "../assets/dog_02.svg";
import CatIcon from "../assets/cat_01.svg";
import BirdIcon from "../assets/dove_pigeon_02.svg";
import FishIcon from "../assets/fish_butterflyfish.svg";
import SmallAnimalIcon from "../assets/hare_01.svg";
import HorseIcon from "../assets/horse_01.svg";
import { A } from "@solidjs/router";
import { Slider } from "../components/slider";
import { ProductCard, ProductOverview } from "../components/productoverview";
import {
  CategoryType,
  catProductList,
  dogBrandList,
  dogProductList,
  dogSaleList,
  horseProductList,
  magazineList,
} from "../assets/data";

const CategoryList: CategoryType[] = [
  "Dog",
  "Cat",
  "Horse",
  "Small Animal",
  "Bird",
  "Fish",
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
      <Meta
        name="description"
        content="Premium Pet Supplies | Best Products for Dogs, Cats, and All Pets"
      ></Meta>
      <Meta
        name="keywords"
        content="premium pet supplies, best pet products, dog and cat accessories, pet grooming essentials, top pet toys"
      ></Meta>
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
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/4EXIJd8wWtaF5M3eIugBj4/3d6eb67a9178150804d3552ed8366c76/2024_09_AnniversaryCampaign_General_Week2_2400x800_UK.jpg?fm=webp&w=500&q=85"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/4EXIJd8wWtaF5M3eIugBj4/3d6eb67a9178150804d3552ed8366c76/2024_09_AnniversaryCampaign_General_Week2_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/4EXIJd8wWtaF5M3eIugBj4/3d6eb67a9178150804d3552ed8366c76/2024_09_AnniversaryCampaign_General_Week2_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="30 percent off on Cat and Dog products"
                />
              </picture>
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-2"
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/22egLM2kBbsHq9jOvXrWiL/bd5bf7a4453f5ccefa217745b3c940a9/2024_09_AnniversaryCampaign_AppExclusive_OBF_Week3_2400x800_UK.jpg?fm=webp&w=500&q=85"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/22egLM2kBbsHq9jOvXrWiL/bd5bf7a4453f5ccefa217745b3c940a9/2024_09_AnniversaryCampaign_AppExclusive_OBF_Week3_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                />
                <img
                  fetchpriority="low"
                  src="https://images.ctfassets.net/qp85kbzn8noe/22egLM2kBbsHq9jOvXrWiL/bd5bf7a4453f5ccefa217745b3c940a9/2024_09_AnniversaryCampaign_AppExclusive_OBF_Week3_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="15 percent off on products from selected brands"
                />
              </picture>
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-3"
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/6pwvQSKVaKM9dxOVVBndEj/6bb8ccf906a804c402151f4c3f1e7d48/2024_09_AnniversaryCamapign_Autoship_Week2_2400x800_UK.jpg?fm=webp&w=500&q=85"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/6pwvQSKVaKM9dxOVVBndEj/6bb8ccf906a804c402151f4c3f1e7d48/2024_09_AnniversaryCamapign_Autoship_Week2_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                />
                <img
                  fetchpriority="low"
                  src="https://images.ctfassets.net/qp85kbzn8noe/6pwvQSKVaKM9dxOVVBndEj/6bb8ccf906a804c402151f4c3f1e7d48/2024_09_AnniversaryCamapign_Autoship_Week2_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="15 percent off your first subscription order"
                />
              </picture>
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-4"
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/3A1jSe8wdjaYjjJufSkHr8/ad02d8fb9ea174f4d6ffc69dd3f898ec/2024_09_Hills_SciencePlan_Dry_D_2400x800_UK.jpg?fm=webp&w=500&q=85"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://images.ctfassets.net/qp85kbzn8noe/3A1jSe8wdjaYjjJufSkHr8/ad02d8fb9ea174f4d6ffc69dd3f898ec/2024_09_Hills_SciencePlan_Dry_D_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                />
                <img
                  fetchpriority="low"
                  src="https://images.ctfassets.net/qp85kbzn8noe/3A1jSe8wdjaYjjJufSkHr8/ad02d8fb9ea174f4d6ffc69dd3f898ec/2024_09_Hills_SciencePlan_Dry_D_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="20 percent off on Hills best Dog and Cat Food"
                />
              </picture>
            </div>
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item
              id="Deal-5"
            >
              <img
                fetchpriority="low"
                src="https://images.ctfassets.net/qp85kbzn8noe/1ZzEy6m1hLlKDIdDPvlYB4/69ed32174acc959eebfcf35e706431cc/2024_08_AnniversaryCampaign_OwnBrands_Accessories_Tiaki_ModernLiving_2400x800_UK.jpg?fm=webp&w=1005&q=85"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="25 percent for TIAKI products"
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
              <A
                href="#"
                class="border border-card-border shadow hover:drop-shadow-lg transition-all h-full w-full flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100"
              >
                <img
                  loading="lazy"
                  fetchpriority="low"
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
                  <h3
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                    lang="en"
                  >
                    {item.title}
                  </h3>
                  <p class="mb-2 font-normal text-gray-700 hyphens-auto text-justify line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </A>
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
