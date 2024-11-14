import { pageCount, ProductSortEnum } from "@/types/enums";
import { redirect } from "next/navigation";

function redirectHandler(basePath: string, section: string, discount?: boolean) {
    const defaultParams = new URLSearchParams();
    defaultParams.set(`${section}`, '19046');
    defaultParams.set('sortBy', `${ProductSortEnum.PriceHighToLow}`);
    defaultParams.set('page', `${pageCount.defPage}`);
    defaultParams.set('priceFrom', 'null');
    defaultParams.set('priceTo', 'null');
    if (discount === true) {
        defaultParams.set('isDiscounted', 'true');
    }

    redirect(`${basePath}/products/${section}?${defaultParams.toString()}`);
}


export function sanitizeParamsCatBrand(input: string): any {
    function isValid(value: string): boolean {
        return (!value.startsWith('0') && !isNaN(Number(value)) && value.trim() !== '');
    }
    if (!isValid(input)) {
        redirect('/');
    }

    return input;
}

export function sanitizeParamsSortBy(input: string, basePath: string, section: string): any {
    function isValid(value: any, enumObject: any): boolean {
        return Object.values(enumObject).includes(Number(value)) && !value.startsWith('0');
    }
    if (!isValid(input, ProductSortEnum)) {
        redirectHandler(basePath, section)
    }
    return input;
}


export function sanitizeParamsPage(input: string, basePath: string, section: string): any {
    function isValid(value: string): boolean {
        return (!value.startsWith('0') && !isNaN(Number(value)) && value.trim() !== '');
    }
    if (!isValid(input)) {
        redirectHandler(basePath, section)
    }

    return input;
}


export function sanitizeParamsPrice(input: string, basePath: string, section: string): any {
    function isValid(value: string): boolean {
        return value === 'null' || (!(value.startsWith('0') && value.length !== 1) && !isNaN(Number(value)) && value.trim() !== '');
    }
    if (!isValid(input)) {
        redirectHandler(basePath, section)
    }

    return input;
}

export function sanitizeParamsDicounted(input: string, basePath: string, section: string): any {
    function isValid(value: string): boolean {
        return value === 'true';
    }
    if (!isValid(input)) {
        redirectHandler(basePath, section, true)
    }

    return input;
}

export function sanitizeParamsBrandIds(input: string, basePath: string, section: string): any {
    console.log(input);
    (function isValid(): any {
        input.split(',').map((id) => {
            if (id.startsWith('0') || isNaN(Number(id))) {
                redirectHandler(basePath, section)
                return
            }   
        })
    })()
    return input;
}

export function sanitizeParamsCountryIds(input: string, basePath: string, section: string): any {
    console.log(input);
    (function isValid(): any {
        input.split(',').map((id) => {
            if (id.startsWith('0') || isNaN(Number(id))) {
                redirectHandler(basePath, section)
                return
            }   
        })
    })()
    return input;
}
