import style from "./mainCarousel.module.scss";
import MainCarouselTop from "./mainCarouselTop/mainCarouselTop";
import MainCarouselBottom from "./mainCarouselBottom/mainCarouselBottom";

export default function MainCarousel() {

  return (
    <div className={style.main_carousel_container}>
      <MainCarouselTop  />
      <MainCarouselBottom />
    </div>
  );
}
