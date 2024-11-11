import { forwardRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import style from './productsLoader.module.scss'


interface ProductsLoaderProps { }

const ProductsLoader = forwardRef<HTMLDivElement, ProductsLoaderProps>((props, ref) => {
    return (
        <div ref={ref} className={style.product_loader_container}>
            <div>
                <ClipLoader color="#00380a" size={60}/>
            </div>
        </div>
    );
});

export default ProductsLoader;
