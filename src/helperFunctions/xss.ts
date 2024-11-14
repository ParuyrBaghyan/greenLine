
export function validateCategoriesAndUpdateURL(
  searchParams: URLSearchParams
) {
  const params = new URLSearchParams(searchParams);

  const categories = params.get("categories");

  // Define the regex to validate a comma-separated list of positive integers
  const categoriesValidation = /^(\d+)(,\d+)*$/;

  if (categories) {
    if (!categoriesValidation.test(categories)) {
      params.delete("categories"); // Remove if invalid
      return false
    } else  {
        return true
    }
  }


}