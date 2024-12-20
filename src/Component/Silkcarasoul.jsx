import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import machine1 from "../Photos/machine1.jpg";
import machine2 from "../Photos/machine2.jpg";
import machine3 from "../Photos/machin3.jpg"; // Fixed typo in file name.
import machine4 from "../Photos/machine4.jpg";

export default function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={machine1} alt="Machine 1" />
      </div>
      <div>
        <img src={machine2} alt="Machine 2" />
      </div>
      <div>
        <img src={machine3} alt="Machine 3" />
      </div>
      <div>
        <img src={machine4} alt="Machine 4" />
      </div>
    </Slider>
  );
}
