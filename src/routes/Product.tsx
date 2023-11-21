import type { Product } from "../lib/types";

import { useCallback, useState } from "react";

import { notify } from "../lib/toasts";

import { useFetch } from "../hooks/useFetch";

import {
  ProductPreview,
  ProductPreviewSkeleton,
} from "../components/ProductPreview/component";

export function Product({ params }: { params: { id: string } }) {
  const { data, error } = useFetch<Product>(
    `https://dummyjson.com/products/${params.id}`,
  );
  const [isInCart, setIsInCart] = useState(false);

  const action = useCallback(() => {
    if (isInCart) {
      notify({ type: "warning", text: "Removed from cart" });
    } else {
      notify({ type: "success", text: "Added to cart" });
    }
    setIsInCart(!isInCart);
  }, [isInCart]);

  return (
    <div className="container">
      <a href="/">Back</a>

      {!error && !data ? <ProductPreviewSkeleton /> : null}
      {error ? <div className="error">Failed to load data</div> : null}
      {!error && data ? <ProductPreview product={data} /> : null}

      <button className="btn" onClick={() => action()}>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
}
