import { Metadata } from "next";
import CategoriesClient from "@/component/products/categoriesClient/categoriesClient";
import { SanitizeSearchParams } from "@/helperFunctions/validation";
import { cookies, headers } from "next/headers";
import { BASE_URL_FRONT } from "@/helperFunctions/constants";

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  return {
    title: "shop",
    description: "shop section",
  };
}




export default async function Page({ params, searchParams }: { params: any, searchParams?: any }) {

  const basePath = `${BASE_URL_FRONT}${params.locale}`;

  const sanitezedData = SanitizeSearchParams({ searchParams, basePath, section: 'categories' });

  return <CategoriesClient />;
} 