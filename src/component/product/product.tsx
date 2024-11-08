"use client";
import ProductModel from "@/services/interface/product/productModel";
import AddToCartBtn from "./addToCartBtn/addToCartBtn";
import style from "./product.module.scss";
import ProductImage from "./productImage/productImage";
import formatPrice from "@/helperFunctions/formatPrice";
import DiscountBedge from "../UI/discountBedge/discountBedge";

interface ProductProps {
  product: ProductModel;
}

export default function Product({ product }: ProductProps) {

  return (
    <div className={style.product_container}>
      {product?.discountPercent !== 0 && <DiscountBedge percent={product?.discountPercent} />}
      <ProductImage src={product.photo} alt={product.name} />
      <div>
        <span>
          {" "}
          <p>{product.categoryName}</p>
          <p dangerouslySetInnerHTML={{ __html: product.name }}></p>
        </span>
        <span>
          <p>{formatPrice(product.price)}֏</p>
          <AddToCartBtn />
        </span>
      </div>
    </div>
  );
}
