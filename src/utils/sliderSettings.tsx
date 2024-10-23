import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function SampleNextArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <span className="slick_next arrow">
      <MdArrowForwardIos onClick={onClick} />
    </span>
  );
}

function SamplePrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <span className="slick_prev arrow">
      <MdArrowBackIos onClick={onClick} />
    </span>
  );
}

export const BrandCarouselSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  variableWidth: true,
  nextArrow: <SampleNextArrow onClick={undefined} />,
  prevArrow: <SamplePrevArrow onClick={undefined} />,
};

export const MainCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
