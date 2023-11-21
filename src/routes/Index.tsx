import {
  ProductsList,
  ProductsListSkeleton,
} from "../components/ProductsList/component";

import { Product } from "../lib/types";

import { useFetch } from "../hooks/useFetch";

import { SearchForm } from "../components/SearchForm/component";

export function Index() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  let url = `https://dummyjson.com/products/search?q=${query}`;
  if (query === null) {
    url = "https://dummyjson.com/products?limit=5";
  }

  const { data, error } = useFetch<{ products: Product[] }>(url);

  return (
    <div className="container">
      <SearchForm value={query || ""} />
      {!error && !data ? <ProductsListSkeleton count={5} /> : null}
      {error ? <div className="error">Failed to load data</div> : null}
      {!error && data ? <ProductsList products={data.products} /> : null}
    </div>
  );
}
