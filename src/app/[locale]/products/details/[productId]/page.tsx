import { Metadata } from "next";
import ProductDetails from "@/component/product-details/productDetails";


export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "product-details",
    description: "product-details",
  };
}

export default async function Page ({params}:any) {
    
  return <ProductDetails productId={params.productId}/>;
}

