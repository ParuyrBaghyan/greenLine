import { sanitizeParamsSortBy, sanitizeParamsPrice, sanitizeParamsCatBrand, sanitizeParamsPage, sanitizeParamsDicounted, sanitizeParamsBrandAndCategoryIds, sanitizeParamsCountryIds, } from "./validationFunctions";

export function SanitizeSearchParams({ searchParams, basePath, section }: { searchParams?: any, basePath: string, section: string }) {
  const sanitizedSearchParams: any = {};
  if (searchParams?.categories) {
    sanitizedSearchParams.categories = sanitizeParamsCatBrand(searchParams.categories, basePath, section);
  }

  if (searchParams?.brands) {
    sanitizedSearchParams.brands = sanitizeParamsCatBrand(searchParams.brands, basePath, section);
  }

  if (searchParams?.sortBy) {
    sanitizedSearchParams.sortBy = sanitizeParamsSortBy(searchParams.sortBy, basePath, section);
  }

  if (searchParams?.page) {
    sanitizedSearchParams.page = sanitizeParamsPage(searchParams.page, basePath, section);
  }

  if (searchParams?.priceFrom) {
    sanitizedSearchParams.priceFrom = sanitizeParamsPrice(searchParams.priceFrom, basePath, section);
  }

  if (searchParams?.priceTo) {
    sanitizedSearchParams.priceTo = sanitizeParamsPrice(searchParams.priceTo, basePath, section);
  }

  if (searchParams?.isDiscounted) {
    sanitizedSearchParams.isDiscounted = sanitizeParamsDicounted(searchParams.isDiscounted, basePath, section);
  }

  if (searchParams?.brandIds) {
    sanitizedSearchParams.brandIds = sanitizeParamsBrandAndCategoryIds(searchParams.brandIds, basePath, section);
  }

  if (searchParams?.categoryIds) {
    sanitizedSearchParams.categoryIds = sanitizeParamsBrandAndCategoryIds(searchParams.categoryIds, basePath, section);
  }

  if (searchParams?.countryIds) {
    sanitizedSearchParams.countryIds = sanitizeParamsCountryIds(searchParams.countryIds, basePath, section);
  }

  return sanitizedSearchParams;
}


