import { ReadonlyURLSearchParams } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function clearFiltration(searchParams: ReadonlyURLSearchParams, pathname: string, router: AppRouterInstance): void {
    const params = new URLSearchParams(searchParams.toString());

    params.delete('countryIds');
    params.delete('brandIds');
    params.delete('isDiscounted');
    params.delete('categoryIds');

    params.set('priceFrom', '0');
    params.set('priceTo', '0');
    params.set('sortBy', '3');

    router.replace(`${pathname}?${params.toString()}`);
}
