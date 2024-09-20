import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  Show,
} from "solid-js";

type ProductCard = {
  productId: string;
  productName: string;
  price: number;
  pricePerKilo?: number;
  pricePerPiece?: number;
};
type CategoryType = "Dog" | "Cat" | "Horse" | "Small Animal" | "Bird" | "Fish";
const CategoryList: CategoryType[] = [
  "Dog",
  "Cat",
  "Horse",
  "Small Animal",
  "Bird",
  "Fish",
];
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
];
type ListItems = { title: string; list: ProductCard[] };
const Homepage = () => {
  const [showAlert, setShowAlert] = createSignal(false);
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

      default:
        setPopularPicksList({ title: "", list: [] });
        break;
    }
  };

  return (
    <>
      <div class="container mx-auto px-8">
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

        <For each={CategoryList}>
          {(item) => (
            <button
              onClick={() => changeList(item)}
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {item}
            </button>
          )}
        </For>
        <ProductOverview
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
            class="flex items-end mb-3 gap-2"
            onSubmit={(e) => submitHandler(e)}
          >
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          title="The Most Popular Accessories for Your Dog"
          list={dogProductList}
        />
        <h3 class="capitalize mb-4 text-4xl font-extrabold text-primary">
          The Zooplus Magazine
        </h3>
        <p class="text-black text-lg mb-4">
          Our pet magazine provides you with information on everything that is
          important in life with a pet. Whether you have a cat, dog, bird, small
          animal, horse or fish - we provide you with valuable tips on caring
          for and keeping your pet.
        </p>
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
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3"
                    lang="en"
                  >
                    {item.title}
                  </h5>
                  <p class="mb-2 font-normal text-gray-700 dark:text-gray-400 hyphens-auto text-justify line-clamp-4">
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
        showCards={2}
        title="The best Deals for You!"
        list={dogBrandList}
      />

      <Show when={showAlert()}>
        <div
          class="flex items-center p-4 mb-4 text-sm text-black rounded-lg bg-light"
          role="alert"
        >
          <svg
            class="w-5 h-5 text-primary rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Info alert!</span> Change a few things up
            and try submitting again.
          </div>
        </div>
      </Show>
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

type SliderItemType = { logo: string; alt: string };
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
    console.log(position(), elementwidth);
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
                <span class="sr-only">Icon description</span>
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
                      <div
                        class="p-2 snap-start h-32 lg:h-48 rounded-lg"
                        classList={{
                          "min-w-slider-2": props.showCards == 2,
                          "min-w-slider-3": props.showCards == 3,
                          "min-w-slider-4": props.showCards == 4,
                        }}
                      >
                        <img
                          class="object-cover h-full w-full rounded-lg"
                          src={item.logo}
                          alt={item.alt}
                        />
                      </div>
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
                <span class="sr-only">Icon description</span>
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
};
type ProductOverviewComponent<P = {}> = Component<ProductOverviewProps<P>>;

const ProductOverview: ProductOverviewComponent = (
  props: ProductOverviewProps
) => {
  return (
    <>
      <div class="py-12">
        <h2 class="capitalize pb-8 text-4xl font-extrabold dark:text-white">
          {props.title}
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 gap-5 px-4">
          <For each={props.list}>
            {(item) => (
              <div class="hover:bg-gray-100 max-w-sm bg-white border border-card-border rounded-lg shadow hover:drop-shadow-lg transition-all">
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
            class="text-black bg-accent hover:bg-light focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Discover more!
          </button>
        </div>
      </div>
    </>
  );
};
