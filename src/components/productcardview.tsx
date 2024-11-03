import { A } from "@solidjs/router";
import { JSX, Component, Show, Switch, Match } from "solid-js";
import { ProductCard } from "../pages/homepage";

export type ProductCardViewProps<P = {}> = P & {
  children?: JSX.Element;
  item: ProductCard;
  small?: boolean;
};
export type ProductCardViewComponent<P = {}> = Component<
  ProductCardViewProps<P>
>;

export const ProductCardView: ProductCardViewComponent = (props) => {
  const item = props.item;
  return (
    <>
      <Show
        when={props.small}
        fallback={
          <A
            href={`/product/${item.productName}/${item.productId}`}
            class="flex flex-col hover:bg-gray-100 max-w-sm bg-white border border-card-border rounded-lg shadow-md hover:drop-shadow-xl transition-all"
          >
            <Show when={item.productBadge}>
              <div class="absolute">
                <span class="bg-accent text-blacktext-sm me-2 px-2.5 py-0.5 rounded inline-flex items-center">
                  <Switch>
                    <Match when={item.productBadge == "New"}>
                      <svg
                        class="w-5 h-5 text-white mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z" />
                      </svg>
                    </Match>
                    <Match when={item.productBadge == "Trending"}>
                      <svg
                        class="w-5 h-5 text-white mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z" />
                      </svg>
                    </Match>
                  </Switch>
                  {item.productBadge}
                </span>
              </div>
            </Show>
            <img
              loading="lazy"
              fetchpriority="low"
              class="rounded-t-lg"
              src={item.productImage}
              alt=""
            />
            <div class="p-5 grow flex flex-col">
              <div class="grow">
                <h3 class="mb-3 font-semibold tracking-tight text-gray-900 line-clamp-3">
                  {item.productName}
                </h3>
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
          </A>
        }
      >
        <A
          href={`/product/${item.productName}/${item.productId}`}
          class="flex flex-col hover:bg-gray-100 max-w-48 bg-white border border-card-border rounded-lg shadow-md hover:drop-shadow-xl transition-all"
        >
          <img
            loading="lazy"
            fetchpriority="low"
            class="rounded-t-lg"
            src={item.productImage}
            alt=""
          />
          <div class="p-5 grow flex flex-col">
            <div class="grow">
              <h3 class="mb-3 font-semibold tracking-tight text-gray-900 line-clamp-1">
                {item.productName}
              </h3>
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
        </A>
      </Show>
    </>
  );
};
