"use client";
import {
  CircleArrowLeft,
  CircleArrowRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={style} onClick={onClick} className={className}>
      <CircleArrowRight className="w-4 h-4 text-zinc-600" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div style={{ style }} onClick={onClick} className={className}>
        <CircleArrowLeft className="w-4 h-4 text-zinc-600" />
      </div>
    </div>
  );
}

export function Carousel({ images, tag }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider className="w-[93%] mx-auto rounded-md" {...settings}>
        {images.map((el) => (
          <div className="w-full h-[380px] rounded-md">
            <Image
              className="mx-auto rounded-md"
              src={el}
              alt="image"
              width={tag === "Mobile" ? 180 : 520}
              height={400}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
