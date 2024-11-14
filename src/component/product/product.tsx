"use client";
import ProductModel from "@/services/interface/product/productModel";
import AddToCartBtn from "./addToCartBtn/addToCartBtn";
import style from "./product.module.scss";
import ProductImage from "./productImage/productImage";
import formatPrice from "@/helperFunctions/formatPrice";
import DiscountBedge from "../UI/discountBedge/discountBedge";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProductProps {
  product: ProductModel;
}

export default function Product({ product }: ProductProps) {
  const path = usePathname()
  const lang = path.slice(1, 3);

  function stopPropagationHandler(event: React.MouseEvent) {
    event.stopPropagation();
  }

  function addToCardHandler(e: React.MouseEvent) {
    e.preventDefault()
  }

  const price = product.discountedPrice ? (
    <span>
      <p>{formatPrice(Math.floor(product.discountedPrice))}֏</p>
      <del>{formatPrice(product.price)}֏</del>
    </span>
  ) : (
    <p>{formatPrice(product.price)}֏</p>
  );

  return (
    <Link href={`/${lang}/products/details/${product.id}`} onClick={stopPropagationHandler} className={style.product_container} style={{ textDecoration: "none" }}>
      {product?.discountPercent !== 0 && <DiscountBedge percent={product?.discountPercent} />}
      <ProductImage src={product.photo} alt={product.name} />
      <div>
        <span>
          {" "}
          <p>{product.categoryName}</p>
          <p dangerouslySetInnerHTML={{ __html: product.name }}></p>
        </span>
        <span>
          {price}
          <AddToCartBtn onclick={addToCardHandler} />
        </span>
      </div>
    </Link>
  );
}
