import { ReadonlyURLSearchParams } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function clearFiltration(searchParams: ReadonlyURLSearchParams, pathname: string, router: AppRouterInstance, priceFrom: number, priceTo: number): void {
    const params = new URLSearchParams(searchParams.toString());

    params.delete('countryIds');
    params.delete('brandIds');
    params.delete('isDiscounted');
    params.delete('categoryIds');

    params.set('priceFrom', `${priceFrom}`);
    params.set('priceTo', `${priceTo}`);
    params.set('sortBy', '3');

    router.replace(`${pathname}?${params.toString()}`);
}
