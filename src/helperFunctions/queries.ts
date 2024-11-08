interface QueryProps {
    params:URLSearchParams,
    filterType:string
}

export function getNecessaryQuery({params  , filterType} : QueryProps){
    return  params.get(filterType) ? params.get(filterType)!.split(",").map(Number) : [];
}

export function getDiscountQuery({params}:QueryProps){

}