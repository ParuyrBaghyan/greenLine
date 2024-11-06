import { Metadata } from "next";
import CategoriesClient from "@/component/products/categoriesClient/categoriesClient";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "shop",
    description: "shop section",
  };
}

export default function Page() {
  return <></>;
}
