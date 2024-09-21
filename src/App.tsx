import { createSignal, For, Show, type Component } from "solid-js";

import "flowbite";
import { RouterProps } from "@solidjs/router";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Dropdown } from "flowbite";

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
    <>
      <nav class="bg-primary bg-gradient-to-r from-primary to-gradient">
        <div class="container 2xl:max-w-screen-2xl flex flex-wrap flex-row items-center md:justify-start mx-auto p-4 justify-between">
          <div class="flex flex-row flex-start w-full">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://cdn-prod.shphdrp.ext.aws.zooplus.io/3.26.0/images/zooplus/logo/2024/zooplus@2x.png"
                class="h-12"
                alt="Zooplus Logo"
              />
            </a>
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
            <div
              id="navbar-search"
              class="items-center justify-between align-center hidden w-full md:flex md:w-auto"
            >
              <For each={NavItemList}>
                {(item, index) => (
                  <>
                    <a
                      data-dropdown-toggle={`NavDropDown-${index()}`}
                      data-dropdown-trigger="hover"
                      class="space-x-1 lg:space-x-3 mx-1 lg:mx-3 rtl:space-x-reverse text-white text-md lg:text-xl"
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
            <div class="flex flex-row grow justify-end">
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
                  class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                id="languageDropDownButton"
                data-dropdown-toggle="languageDropDown"
                type="button"
                class="ml-2 text-white bg-primary hover:bg-light rounded-full text-lg p-2.5 text-center inline-flex items-center me-2"
              >
                <Show when={language() == "GB"}>
                  <span class="fi fi-gb"></span>
                </Show>
                <Show when={language() == "DE"}>
                  <span class="fi fi-de"></span>
                </Show>
                <Show when={language() == "IT"}>
                  <span class="fi fi-it"></span>
                </Show>
                <span class="sr-only">Icon description</span>
              </button>
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
              <button
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full bg-accent"
                type="button"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 me-2 rounded-full"
                  src="https://images.ctfassets.net/qp85kbzn8noe/6tVMP2NSU9HzA2qiOMRrMH/4c0c1845d14871d070e1fe79fc85d32f/2024_08_AnniversaryCampaign_Accessories_C_1000x1000_UK.jpg?fm=jpg&fl=progressive&w=280&q=85"
                  alt="user photo"
                />
                Customer Name
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
      </nav>

      {props.children}
      <footer class="container mx-auto bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Licensing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    iOS
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Android
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Windows
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © zooplus SE 2024. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
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
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
