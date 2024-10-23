"use client";
import AddToCartBtn from "./addToCartBtn/addToCartBtn";
import style from "./product.module.scss";
import ProductImage from "./productImage/productImage";

export default function Product() {
  return (
    <div className={style.product_container}>
      <ProductImage />
      <div>
        <span>
          {" "}
          <p>Շոկոլադե և ընկույզի կրեմներ</p>
          <p>Շոկոլադե կրեմ «Նասա» 750գր</p>
        </span>
        <span>
          <p>2160D</p>
          <AddToCartBtn />
        </span>
      </div>
    </div>
  );
}
