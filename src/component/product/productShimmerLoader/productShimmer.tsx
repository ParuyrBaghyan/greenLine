"use client";
import style from "./productShimmer.module.scss";

export default function ProductShimmer() {
  return (
    <div className={style.product_container}>
      <div className={style.image_loader}>
        {" "}
      </div>
      <div>
        <span>
          {" "}
          <p></p>
          <p></p>
        </span>
        <span className={style.bottom}>
          <p></p>
          <div></div>
        </span>
      </div>
    </div>
  );
}
