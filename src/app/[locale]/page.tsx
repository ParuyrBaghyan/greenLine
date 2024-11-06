import { useTranslations } from "next-intl";
import BodyLayout from "@/layouts/bodyLayout/bodyLayout";
import MainCarousel from "@/component/mainCarousel/mainCarousel";
import BrandsCarousel from "@/component/brandsCarousel/brandsCarousel";
import MobileApp from "@/component/mobileApp/mobileApp";
import SpecialItems from "@/component/specialItems/specialItems";

export default function HomePage() {
  const t = useTranslations();

  return (
    <BodyLayout>
      <MainCarousel />
      <BrandsCarousel title={t("trendingBrands")} />
      <MobileApp />
      <SpecialItems />
    </BodyLayout>
  );
}
