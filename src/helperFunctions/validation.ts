import { sanitizeParamsSortBy, sanitizeParamsPrice, sanitizeParamsCatBrand, sanitizeParamsPage, sanitizeParamsDicounted, sanitizeParamsBrandIds, sanitizeParamsCountryIds, } from "./validationFunctions";

export function SanitizeSearchParams({ searchParams, basePath, section }: { searchParams?: any, basePath: string, section: string }) {
  const sanitizedSearchParams: any = {};
  if (searchParams?.categories) {
    sanitizedSearchParams.categories = sanitizeParamsCatBrand(searchParams.categories);
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
    sanitizedSearchParams.brandIds = sanitizeParamsBrandIds(searchParams.brandIds, basePath, section);
  }

  if (searchParams?.countrIds) {
    sanitizedSearchParams.countrIds = sanitizeParamsCountryIds(searchParams.countrIds, basePath, section);
  }

  return sanitizedSearchParams;
}


