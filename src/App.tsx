import { createSignal, For, Show, type Component } from "solid-js";

import "flowbite";
import { RouterProps } from "@solidjs/router";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Dropdown } from "flowbite";
import { MetaProvider } from "@solidjs/meta";

const NavItemList: NavItem[] = [
  {
    title: "Food",
    list: [
      {
        title: "Dog",
        list: [
          { title: "Dry Dog Food" },
          { title: "Wet Dog Food" },
          { title: "Dog Treats" },
          { title: "Dog Specialist Diets" },
        ],
      },
      {
        title: "Cat",
        list: [
          { title: "Dry Cat Food" },
          { title: "Wet Cat Food" },
          { title: "Cat Treats" },
          { title: "Cat Specialist Diets" },
        ],
      },
      {
        title: "Horse",
        list: [
          { title: "Horse Food" },
          { title: "Supplemnts" },
          { title: "Horse Treats" },
          { title: "Horse Specialist Diets" },
        ],
      },
      {
        title: "Small Animal",
      },
      {
        title: "Bird",
      },
      {
        title: "Fish",
        list: [
          { title: "Fish Flake Food" },
          { title: "Fish Granules & Sticks" },
          { title: "Fish Tablet Food" },
          { title: "Frozen Food for Ornamental Fish" },
        ],
      },
    ],
  },
  {
    title: "Accessories",
    list: [
      {
        title: "Dog",
        list: [
          { title: "Dog Beds & Dog Baskets" },
          { title: "Dog Leads & Dog Collars" },
          { title: "Dog Flea, Tick & Wormer Treatments" },
          { title: "Dog Toys & Sports Accessories" },
          { title: "Dog Grooming & Care" },
          { title: "Dog Bowls & Feeders" },
        ],
      },
      {
        title: "Cat",
        list: [
          { title: "Cat Litter" },
          { title: "Cat Flea, Tick & Wormer Treatments" },
          { title: "Cat Litter Boxes & Litter Trays" },
          { title: "Cat Trees & Scratching Posts" },
          { title: "Cat Beds & Cat Baskets" },
          { title: "Cat Toys" },
        ],
      },
      {
        title: "Horse",
        list: [
          { title: "Care products for horses" },
          { title: "Horse accessories" },
          { title: "Bedding for horses" },
        ],
      },
      {
        title: "Small Animal",
        list: [
          { title: "Small Animals Cages" },
          { title: "Small Animals Cage Accessories" },
          { title: "Straw & Bedding for Small Animals" },
          { title: "Runs & Enclosures for Small Animals" },
          { title: "Toys and Travel for Small Animals" },
          { title: "Care & Grooming for Small Animals" },
        ],
      },
      {
        title: "Bird",
        list: [
          { title: "Bird Cages" },
          { title: "Bird Cage Accessories" },
          { title: "Bird Toys" },
          { title: "Bird Cage Bedding & Litter" },
        ],
      },
      {
        title: "Fish",
        list: [
          { title: "Aquarium accessories" },
          { title: "Aquarium plants and plant care" },
          { title: "Aquarium filters and pumps" },
          { title: "Aquarium decoration" },
          { title: "Aquarium technology" },
          { title: "Lighting, fluorescent tubes, LED" },
        ],
      },
    ],
  },
  {
    title: "Bestsellers",
    list: [
      {
        title: "Dog",
      },
      {
        title: "Cat",
      },
      {
        title: "Horse",
      },
      {
        title: "Small Animal",
      },
      {
        title: "Bird",
      },
      {
        title: "Fish",
      },
    ],
  },
  {
    title: "Sale",
    list: [
      {
        title: "Dog",
      },
      {
        title: "Cat",
      },
      {
        title: "Horse",
      },
      {
        title: "Small Animal",
      },
      {
        title: "Bird",
      },
      {
        title: "Fish",
      },
    ],
  },
  {
    title: "Service",
    list: [
      {
        title: "Contact",
      },
      {
        title: "Orders",
      },
      {
        title: "Product",
      },
      {
        title: "Delivery",
      },
      {
        title: "Returns & Claims",
      },
      {
        title: "Customer Account",
      },
      {
        title: "Shopping with us",
      },
    ],
  },
];
type NavItem = { title: string; list?: NavItem[] };
type Language = "DE" | "GB" | "IT";

const App: Component = (props: RouterProps) => {
  const [language, setLanguage] = createSignal<Language>("GB");
  const changeLanguage = (language: Language) => {
    setLanguage(language);
    const $targetEl = document.getElementById("languageDropDown");
    const $triggerEl = document.getElementById("languageDropDownButton");
    const dropdown = new Dropdown($targetEl, $triggerEl);
    dropdown.hide();
  };
  return (
    <MetaProvider>
      <nav class="bg-primary bg-gradient-to-r from-primary to-gradient sticky top-0 z-50">
        <div class="container 2xl:max-w-screen-2xl flex flex-wrap flex-row items-center md:justify-start mx-auto p-4 justify-between">
          <div class="flex flex-col md:flex-row flex-start w-full items-center">
            <div class="flex flex-row flex-start w-full md:w-auto items-center">
              <a
                href="#"
                class="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://cdn-prod.shphdrp.ext.aws.zooplus.io/3.26.0/images/zooplus/logo/2024/zooplus@2x.png"
                  class="h-12"
                  alt="Zooplus Logo"
                />
              </a>
              <div class="block grow md:hidden"></div>
              <div class="flex">
                <button
                  data-collapse-toggle="navbar-search"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-primary"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-search"
              class="flex grow flex-col items-center justify-between align-center hidden w-full md:flex md:flex-row md:w-auto"
            >
              <div class="flex flex-row">
                <For each={NavItemList}>
                  {(item, index) => (
                    <>
                      <a
                        tabindex="0"
                        data-dropdown-toggle={`NavDropDown-${index()}`}
                        data-dropdown-trigger="click"
                        class="cursor-pointer space-x-1 lg:space-x-3 mx-1 lg:mx-3 rtl:space-x-reverse text-white text-md lg:text-lg"
                      >
                        {item.title}
                      </a>
                      <Show when={item.list}>
                        <div
                          id={`NavDropDown-${index()}`}
                          class="z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                        >
                          <ul
                            class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownHoverButton"
                          >
                            <For each={item.list}>
                              {(item, bindex) => (
                                <li>
                                  <button
                                    data-dropdown-offset-distance="4"
                                    data-dropdown-toggle={`NavDropDown-${index()}-${bindex()}`}
                                    data-dropdown-placement="right-start"
                                    type="button"
                                    class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    {item.title}
                                    <Show when={item.list}>
                                      <svg
                                        class="w-2.5 h-2.5 ms-3 rtl:rotate-180"
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
                                    </Show>
                                  </button>
                                  <Show when={item.list}>
                                    <div
                                      id={`NavDropDown-${index()}-${bindex()}`}
                                      class="z-10 hidden bg-white divide-y divide-red-100 rounded-lg shadow w-44 overflow-hidden"
                                    >
                                      <ul
                                        class="py-2 text-sm text-gray-700"
                                        aria-labelledby="doubleDropdownButton"
                                      >
                                        <For each={item.list}>
                                          {(item) => (
                                            <li>
                                              <a
                                                href="#"
                                                class="block px-4 py-2 hover:bg-gray-100"
                                              >
                                                {item.title}
                                              </a>
                                            </li>
                                          )}
                                        </For>
                                      </ul>
                                      <div class="py-2 bg-red-200 hover:bg-red-300">
                                        <a
                                          href="#"
                                          class="block px-4 py-2 text-black font-semibold text-center"
                                        >
                                          % Sale %
                                        </a>
                                      </div>
                                    </div>
                                  </Show>
                                </li>
                              )}
                            </For>
                          </ul>
                        </div>
                      </Show>
                    </>
                  )}
                </For>
              </div>
              <div class="flex flex-row grow justify-end items-center">
                <div class="relative ml-4 mt-4 md:mt-0">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                    placeholder="Search..."
                  />
                </div>
                <div
                  class="inline-flex rounded-md shadow-sm ml-3 self-end md:self-center"
                  role="group"
                >
                  <button
                    data-dropdown-toggle="dropdownAvatarName"
                    class="flex h-auto items-center text-sm pe-1 font-medium text-gray-900 bg-accent rounded-s-full hover:bg-light pr-4 border border-gray-600"
                    type="button"
                  >
                    <img
                      aria-hidden="true"
                      class="w-8 h-8 me-2 rounded-full"
                      src="https://images.ctfassets.net/qp85kbzn8noe/6tVMP2NSU9HzA2qiOMRrMH/4c0c1845d14871d070e1fe79fc85d32f/2024_08_AnniversaryCampaign_Accessories_C_1000x1000_UK.jpg?fm=jpg&fl=progressive&w=280&q=85"
                    />
                    Profile
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <button
                    data-dropdown-toggle="languageDropDown"
                    type="button"
                    class="bg-accent hover:bg-light font-medium text-sm p-2.5 text-center inline-flex items-center border border-gray-600"
                  >
                    <Show when={language() == "GB"}>
                      <span class="px-[2px] h-4 w-4 fi fi-gb"></span>
                    </Show>
                    <Show when={language() == "DE"}>
                      <span class="h-4 w-4 fi fi-de"></span>
                    </Show>
                    <Show when={language() == "IT"}>
                      <span class="px-[2px] h-4 w-4 fi fi-it"></span>
                    </Show>
                    <span class="sr-only">Choose Language</span>
                  </button>

                  <button
                    type="button"
                    class="flex h-auto items-center text-sm pe-1 font-medium text-gray-900 bg-accent px-2 pr-3 py-2 rounded-e-full hover:bg-light border border-gray-600"
                  >
                    <svg
                      class="w-3.5 h-3.5 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 21"
                    >
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Cart
                  </button>
                </div>
                <div
                  id="languageDropDown"
                  class="z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                  >
                    <li onClick={() => changeLanguage("DE")}>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <span class="fi fi-de mr-2"></span>
                          Deutsch
                        </div>
                      </a>
                    </li>
                    <li onClick={() => changeLanguage("GB")}>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <span class="fi fi-gb mr-2"></span>
                          Great Britain
                        </div>
                      </a>
                    </li>
                    <li onClick={() => changeLanguage("IT")}>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <span class="fi fi-it mr-2"></span>
                          Italia
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  id="dropdownAvatarName"
                  class="z-40 hidden bg-white rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My zooplus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My orders
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Re-Order
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My Wishlist
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My Rewards
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="sticky-banner"
          tabindex="-1"
          class="start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-light"
        >
          <div class="flex items-center mx-auto">
            <p class="flex items-center text-sm font-normal text-black">
              <svg
                class="w-3 h-3 text-black mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
              </svg>
              <span>Free Shipping from £39</span>
              <svg
                class="w-3 h-3 text-black scale-x-[-1] ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
              </svg>
            </p>
          </div>
          <div class="flex items-center">
            <button
              data-dismiss-target="#sticky-banner"
              type="button"
              class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      </nav>

      {props.children as any}
      <footer class="bg-white dark:bg-gray-900">
        <div class="container mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    my zooplus
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Help
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Shipping & Delivery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Advantages
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Loyalty Programme
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Charity Support
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Charity Discount
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Breeder Programme
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Shopping
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Special Offers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Clearance Sale
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Seasonal Specials
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Methods of Payment
              </h2>
              <div class="flex flex-row flex-wrap gap-1">
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/50Wgeh9utlfiCfbK7MgS6K/a98e08e0088a65fa761e7b80b93a54d5/visa_3x.png?fl=progressive&w=48&q=85"
                  alt="VISA"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/2l0VfAGXHmJJ2TXwLEOr9n/cc4ea7aeb76ba4ecf51ca236aa91c449/mastercard_3x.png?fl=progressive&w=48&q=85"
                  alt="Mastercard"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/4qTfvRdSKXOCUvhxCF6X02/c67b98b9c1f0af492cf47d6a3bf5844a/maestro_3x.png?fl=progressive&w=48&q=85"
                  alt="Maestro"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/28hZegh5u77BFqGkHa7ZZr/4c71a0d5efc11a83af3c19c9c34affac/amex_3x.png?fl=progressive&w=48&q=85"
                  alt="American Express"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/301Xsx6AhmPVGuRPqIkDnb/dae75beee5bef3986059531443843e81/paypal_3x.png?fl=progressive&w=48&q=85"
                  alt="PayPal"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/6zuLzjCeIbMCypImXD8SHt/13908c0f738297f362cd83a2617f187c/Apple_Pay_3x.png?fl=progressive&w=48&q=85"
                  alt="Apple Pay"
                />
              </div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white mt-6">
                Delivery
              </h2>
              <div class="flex flex-row flex-wrap gap-1">
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/712VRwzYOVoYQJaUEn61BP/c5a3912a4f3aa1ea67637fe02067e3a4/yodel_3x.png?fl=progressive&w=48&q=85"
                  alt="Yodel"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/5b42CTIg1fhbkpbXR2cg4y/a040e4ca81dc3cf4c708491a55561107/EVRI.jpg?fl=progressive&w=48&q=85"
                  alt="EVri"
                />
                <img
                  src="https://images.ctfassets.net/qp85kbzn8noe/mRRiux2Sfl19l17fYKxcz/12c1d1cff9425c6462c2c9a812750f8a/dhl_3x.png?fl=progressive&w=48&q=85"
                  alt="DHL"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-screen bg-gray-100">
          <div class="container mx-auto w-full max-w-screen-xl px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © zooplus SE 2024. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
                <span class="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </MetaProvider>
  );
};

export default App;
