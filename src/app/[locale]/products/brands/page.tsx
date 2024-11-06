import { Metadata } from "next";
import BrandsClient from "@/component/products/brandsClient/brandsClient";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "shop",
    description: "shop section",
  };
}

export default function Page() {
  return <BrandsClient />;
}
