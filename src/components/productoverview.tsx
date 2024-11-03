import { A } from "@solidjs/router";
import { JSX, Component, For } from "solid-js";
import { ProductCardView } from "./productcardview";

export type ProductCard = {
  productId: string;
  productName: string;
  price: number;
  pricePerKilo?: number;
  pricePerPiece?: number;
  pricePerLiter?: number;
  productImage: string;
  productImageAlt: string;
  productBadge?: ProductBadgeType;
};

export type ProductBadgeType = "New" | "Trending" | undefined;

export type ProductOverviewProps<P = {}> = P & {
  children?: JSX.Element;
  title: string;
  list: ProductCard[];
  link: string;
};
export type ProductOverviewComponent<P = {}> = Component<
  ProductOverviewProps<P>
>;

export const ProductOverview: ProductOverviewComponent = (
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
          <A
            href={props.link}
            type="button"
            class="text-black bg-accent hover:bg-light font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Discover more!
          </A>
        </div>
      </div>
    </>
  );
};
