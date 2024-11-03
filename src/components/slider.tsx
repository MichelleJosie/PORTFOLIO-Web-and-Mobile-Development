import { A } from "@solidjs/router";
import { JSX, Component, createSignal, createEffect, For } from "solid-js";

export type SliderItemType = {
  logo: string;
  alt: string;
};

export type SliderProps<P = {}> = P & {
  children?: JSX.Element;
  list: SliderItemType[];
  title: string;
  showCards: number;
  id: string;
};

export type SliderComponent<P = {}> = Component<SliderProps<P>>;

export const Slider: SliderComponent = (props: SliderProps) => {
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
                      <A
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
                          loading="lazy"
                          fetchpriority="low"
                          class="object-cover h-full w-full rounded-lg pointer-events-none"
                          src={item.logo}
                          alt={item.alt}
                        />
                      </A>
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
