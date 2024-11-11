export function getNecessaryQuery(params: URLSearchParams, filterType: string) {
    return params.get(filterType) ? params.get(filterType)!.split(",").map(Number) : [];
}

export function getDiscountQuery(params: URLSearchParams) {
    return params.get('isDiscounted') ? params.get('isDiscounted') : 'false'
}

export function getPriceQuery_int(params: URLSearchParams, type: string) {
    return JSON.parse(`${params.get(type)}`)
}

export function getSortByQuery(params: URLSearchParams) {
    return params.get('sortBy')
}