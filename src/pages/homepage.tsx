import { createEffect, createSignal, For, Show } from "solid-js";

type ProductCard = {
  productId: string;
  productName: string;
  price: number;
  pricePerKilo?: number;
  pricePerPiece?: number;
};
const categoryList = ["Dog", "Cat", "Horse", "Small Animal", "Bird", "Fish"];
const dogProductList: ProductCard[] = [
  {
    productId: "001",
    productName: "Lukullus natural food single can 1 x 400 g",
    price: 1.69,
    pricePerKilo: 4.23,
  },
  {
    productId: "002",
    productName: "Lukullus natural food single can 1 x 400 g",
    price: 1.69,
    pricePerPiece: 0.18,
  },
  {
    productId: "003",
    productName: "Lukullus natural food single can 1 x 400 g",
    price: 1.69,
  },
  {
    productId: "004",
    productName: "Lukullus natural food single can 1 x 400 g",
    price: 1.69,
    pricePerKilo: 4.23,
  },
  {
    productId: "005",
    productName: "Lukullus natural food single can 1 x 400 g",
    price: 1.69,
    pricePerKilo: 4.23,
  },
];
const Homepage = () => {
  return (
    <>
      <div class="container mx-auto">
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/1400/500"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/1400/500"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/1400/500"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/1400/500"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/1400/500"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
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
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
        <h2 class="capitalize py-8 text-4xl font-extrabold dark:text-white">
          Find Products for Your Pet
        </h2>

        <For each={categoryList}>
          {(item) => (
            <button
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {item}
            </button>
          )}
        </For>
        <h2 class="capitalize py-8 text-4xl font-extrabold dark:text-white">
          The Most Popular Picks for Your Dog
        </h2>
        <div class="grid grid-flow-col auto-cols-auto gap-5 px-4">
          <For each={dogProductList}>
            {(item) => (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:drop-shadow-lg transition-all">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="https://media.zooplus.com/bilder/2/400/rocco_chings_4xoriginals_900g_1000x1000_2.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-3 font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.productName}
                    </h5>
                  </a>
                  <p class="font-bold text-gray-700 dark:text-gray-400">
                    {`£${item.price}`}
                  </p>
                  <Show when={item.pricePerKilo}>
                    <p class="font-normal text-sm text-slate-500">
                      {`£${item.pricePerKilo} / kg`}
                    </p>
                  </Show>
                  <Show when={item.pricePerPiece}>
                    <p class="font-normal text-sm text-slate-500">
                      {`£${item.pricePerPiece} / per piece`}
                    </p>
                  </Show>
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="text-center">
          <h3 class="py-8 text-2xl font-semibold dark:text-white">
            Looking for more top products? Click here and find your new
            favorites!
          </h3>
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Discover more!
          </button>
        </div>
      </div>
      <Slider
        title="The Most Popular Brands for Your Dog"
        list={[
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
            logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1j1n1hoXf444kgO4EkOKIo/940db5c84a1aeede46f339389938b718/logo_Rocco_1000x700.jpg?fm=webp&w=130&q=85",
            alt: "Rocco Logo",
          },
          {
            logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1j1n1hoXf444kgO4EkOKIo/940db5c84a1aeede46f339389938b718/logo_Rocco_1000x700.jpg?fm=webp&w=130&q=85",
            alt: "Rocco Logo",
          },
          {
            logo: "https://images.ctfassets.net/w4bhfqu0yxyq/1j1n1hoXf444kgO4EkOKIo/940db5c84a1aeede46f339389938b718/logo_Rocco_1000x700.jpg?fm=webp&w=130&q=85",
            alt: "Rocco Logo",
          },
        ]}
      />
    </>
  );
};
export default Homepage;

type BrandType = { logo: string; alt: string };

const Slider = (props: any) => {
  const [position, setPosition] = createSignal(0);
  const [brandList, _] = createSignal<BrandType[]>(props.list);

  createEffect(() => {
    const cardcontainer = document.getElementById("BrandListDog");
    const containerwidth = cardcontainer?.getBoundingClientRect().width || 0;
    const elementwidth = containerwidth / brandList().length;
    cardcontainer?.scrollTo({
      left: elementwidth * position(),
      behavior: "smooth",
    });
    console.log(position(), elementwidth);
  });

  return (
    <>
      <div class="bg-background-primary w-screen py-16">
        <div class="container mx-auto">
          <h3 class="capitalize pb-8 text-4xl font-extrabold text-white">
            {props.title}
          </h3>
          <div class="w-full flex flex-row">
            <div class="flex items-center">
              <button
                disabled={position() == 0}
                onClick={() =>
                  setPosition((prev: number) => (prev == 0 ? prev : prev - 1))
                }
                type="button"
                class="rotate-180 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4"
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
                <span class="sr-only">Icon description</span>
              </button>
            </div>
            <div class="grow">
              <div
                id="BrandListDog"
                class="snap-x snap-mandatory grow flex flex-row w-full overflow-auto sm:overflow-hidden"
              >
                <For each={brandList()}>
                  {(brand) => (
                    <>
                      <div class="snap-start h-32 lg:h-48 rounded-lg min-w-[33.333333%] md:min-w-[25%]">
                        <img
                          class="object-cover h-full w-full"
                          src={brand.logo}
                          alt={brand.alt}
                        />
                      </div>
                    </>
                  )}
                </For>
              </div>
            </div>
            <div class="flex items-center">
              <button
                onClick={() =>
                  setPosition((prev: number) =>
                    prev == brandList().length - 4 ? prev : prev + 1
                  )
                }
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4"
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
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
