import { Product } from "../../lib/types";

import "./component.css";

export function ProductPreview({ product }: { product: Product }) {
  return (
    <div className="product-preview">
      <div className="product-preview__image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div>
        <div className="product-preview__meta">
          <div className="product-preview__title">{product.title}</div>
          <div className="product-preview__price">${product.price}</div>
        </div>
        <div>{product.description}</div>
      </div>
    </div>
  );
}

export function ProductPreviewSkeleton() {
  return (
    <div className="product-preview">
      <div className="product-preview__image">
        <div
          className="skeleton"
          style={{ width: "100%", height: "80px" }}
        ></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
        <div className="product-preview__meta">
          <div className="product-preview__title">
            <div className="skeleton" style={{ width: "8rem" }}></div>
          </div>
          <div className="product-preview__price">
            <div className="skeleton" style={{ width: "2rem" }}></div>
          </div>
        </div>
        <div>
          <div className="skeleton" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}
