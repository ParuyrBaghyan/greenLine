import style from './productdetailBundles.module.scss'
import Details from './details/details'
import Description from './description/description'
import Ingredients from './ingredients/ingredients'
import ProductLogo from './productLogo/productLogo'

interface ProductdetailBundlesProps {
  details: any
  isLoading: boolean
}

export default function ProductdetailBundles({ details, isLoading }: ProductdetailBundlesProps) {

  if (isLoading) return <div className={style.product_detail_bundles_loader}></div>

  return <div className={style.product_detail_bundles}>
    {details?.description && <Description description={details?.description} />}
    <Details details={details} />
    {details?.ingredients && <Ingredients ingredients={details?.ingredients} />}
    <ProductLogo />
  </div>
}




