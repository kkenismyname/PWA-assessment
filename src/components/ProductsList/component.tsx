import { Product } from "../../lib/types";

import {
  ProductPreview,
  ProductPreviewSkeleton,
} from "../ProductPreview/component";

export function ProductsList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return products.map((product) => (
    <a href={`/${product.id}`}>
      <ProductPreview product={product} />
    </a>
  ));
}

export function ProductsListSkeleton({ count }: { count: number }) {
  return Array(count)
    .fill(0)
    .map(() => <ProductPreviewSkeleton />);
}
