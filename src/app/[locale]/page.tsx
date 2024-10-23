import { useTranslations } from "next-intl";
import BodyLayout from "@/layouts/bodyLayout/bodyLayout";
import MainCarousel from "@/component/mainCarousel/mainCarousel";
import BrandsCarousel from "@/component/brandsCarousel/brandsCarousel";
import MobileApp from "@/component/mobileApp/mobileApp";
import Product from "@/component/product/product";

export default function HomePage() {
  const t = useTranslations();

  return (
    <BodyLayout>
      <MainCarousel />
      <BrandsCarousel title={t("trendingBrands")} />
      <MobileApp />
      <Product />
    </BodyLayout>
  );
}
