// import { Metadata } from "next";
// import CategoriesClient from "@/component/products/categoriesClient/categoriesClient";
// import { redirect } from 'next/navigation';
// import { ProductSortEnum } from "@/types/enums";
// import { headers } from "next/headers";
// export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
//   return {
//     title: "shop",
//     description: "shop section",
//   };
// }

// export function SanitizeSearchParams({ searchParams, basePath }: { searchParams?: any, basePath: string }) {
//   const sanitizedSearchParams: any = {};
//   if (searchParams?.categories) {
//     sanitizedSearchParams.categories = sanitizeInput(searchParams.categories);
//   }

//   if (searchParams?.sortBy) {
//     sanitizedSearchParams.sortBy = sanitizeParamsSortBy(searchParams.sortBy);
//   }

//   if (searchParams?.page) {
//     sanitizedSearchParams.page = sanitizeInput(searchParams.page);
//   }

//   if (searchParams?.priceFrom) {
//     sanitizedSearchParams.priceFrom = sanitizeParamsPrice(searchParams.priceFrom, basePath);
//   }

//   if (searchParams?.priceTo) {
//     sanitizedSearchParams.priceTo = sanitizeParamsPrice(searchParams.priceTo, basePath);
//   }

//   return sanitizedSearchParams;
// }


// export function sanitizeInput(input: string): string {
//   const regex = /^[a-zA-Z0-9\u0400-\u04FF\u0500-\u052F\u0531-\u0556\u0561-\u0587\s]+$/;
//   if (!regex.test(input)) {
//     const sanitizedInput = input.replace(/[^a-zA-Z0-9\u0400-\u04FF\u0500-\u052F\u0531-\u0556\u0561-\u0587\s]+/g, '');
//     return sanitizedInput;
//   }
//   return input;
// }


// export function sanitizeParamsPrice(input: string, basePath: string): any {
//   function isValid(value: string): boolean {
//     return value === 'null' || (!(value.startsWith('0') && value.length !== 1) && !isNaN(Number(value)) && value.trim() !== '');
//   }
//   if (!isValid(input)) {

//     const defaultParams = new URLSearchParams();
//     defaultParams.set('categories', '19046');
//     defaultParams.set('sortBy', '3');
//     defaultParams.set('page', '1');
//     defaultParams.set('priceFrom', 'null');
//     defaultParams.set('priceTo', 'null');
//     redirect(`${basePath}?${defaultParams.toString()}`);
//   }
//   return input;
// }

// export function sanitizeParamsSortBy(input: string): any {
//   function isValid(value: any, enumObject: any): boolean {
//     return Object.values(enumObject).includes(Number(value));
//   }
//   if (!isValid(input, ProductSortEnum)) {
//     redirect(`/`);
//   }
//   return input;
// }



// export default function Page({ params, searchParams }: { params: any, searchParams?: any }) {
//   const headersList = headers();

//   const refererHeader: string | null = headersList.get('referer');
//   const basePath = refererHeader ? new URL(refererHeader).origin : 'http://localhost:3000';
//   console.log(refererHeader);

//   const sanitezedData = SanitizeSearchParams({ searchParams, basePath });

//   return <CategoriesClient />;
// }




import { Metadata } from "next";
import CategoriesClient from "@/component/products/categoriesClient/categoriesClient";
import { headers } from "next/headers";
import {  SanitizeSearchParams } from "@/helperFunctions/validation";
export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  return {
    title: "shop",
    description: "shop section",
  };
}



export default async function Page({ params, searchParams }: { params: any, searchParams?: any }) {
  const headersList = headers();

  const basePath = `http://localhost:3000/${params.locale}`;

  const sanitezedData = SanitizeSearchParams({ searchParams, basePath ,section: 'categories' });

  return <CategoriesClient />;
} 