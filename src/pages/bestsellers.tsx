import { A, useParams } from "@solidjs/router";
import { For } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import { ProductCardView } from "../components/productcardview";
import { CategoryType, dogProductList } from "../assets/data";

type BestsellerRouteProps<S = {}> = S & {
  category: CategoryType;
};

const Bestsellers = () => {
  const props = useParams();
  return (
    <div>
      <Title>{`Zooplus-Bestseller-${props.category}`}</Title>
      <Meta
        name="description"
        content={`Bestselling ${props.category} Products | Top-Rated Pet Supplies for Your ${props.category}`}
      ></Meta>
      <Meta
        name="keywords"
        content={`best ${props.category} products, bestselling ${props.category} food, top ${props.category} accessories`}
      ></Meta>
      <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li class="inline-flex items-center">
                    <A
                      href="/"
                      class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        class="me-2.5 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </A>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="h-5 w-5 text-gray-400 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <A
                        href="#"
                        class="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                      >
                        Bestsellers
                      </A>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div class="flex items-center">
                      <svg
                        class="h-5 w-5 text-gray-400 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                        {props.category}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Bestsellers
              </h2>
            </div>
            <div class="flex items-center space-x-4">
              <button
                data-modal-toggle="filterModal"
                data-modal-target="filterModal"
                type="button"
                class="flex w-full items-center justify-center rounded-full bg-accent px-3 py-2 text-sm font-medium text-black hover:bg-light sm:w-auto"
              >
                <svg
                  class="-ms-0.5 me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
                </svg>
                Filters
                <svg
                  class="-me-0.5 ms-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <button
                id="sortDropdownButton1"
                data-dropdown-toggle="dropdownSort1"
                type="button"
                class="flex w-full items-center justify-center rounded-full bg-accent px-3 py-2 text-sm font-medium text-black hover:bg-light sm:w-auto"
              >
                <svg
                  class="-ms-0.5 me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                  />
                </svg>
                Sort
                <svg
                  class="-me-0.5 ms-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownSort1"
                class="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-placement="bottom"
              >
                <ul
                  class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="sortDropdownButton"
                >
                  <li>
                    <A
                      href="#"
                      class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    >
                      The most popular
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Newest
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Increasing price
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Decreasing price
                    </A>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            <For each={dogProductList}>
              {(item) => <ProductCardView item={item}></ProductCardView>}
            </For>
          </div>
          <div class="w-full text-center">
            <button
              type="button"
              class="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-light"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bestsellers;
