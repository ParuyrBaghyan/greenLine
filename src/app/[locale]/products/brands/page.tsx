import { Metadata } from "next";
import BrandsClient from "@/component/products/brandsClient/brandsClient";
import { SanitizeSearchParams } from "@/helperFunctions/validation";
import { BASE_URL_FRONT } from "@/helperFunctions/constants";
import { cookies } from "next/headers";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "shop",
    description: "shop section",
  };
}



export default function Page({ params, searchParams }: { params: any, searchParams?: any }) {

  const basePath = `${BASE_URL_FRONT}${params.locale}`;

  const sanitezedData = SanitizeSearchParams({ searchParams, basePath ,section: 'brands' });

  return <BrandsClient />;
}
