import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PlacesCarousel.css";
const PlacesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };

    const images = [
        "src/assets/images/dongphongnha.jpg",
        "src/assets/images/vinhhalong.png",
        "src/assets/images/dongphongnha.jpg",
        "src/assets/images/vinhhalong.png",
    ];

    return (
        <div style={{ padding: "20px" }}>
            <Slider {...settings}>
                {images.map((imgUrl, index) => (
                    <div key={index}>
                        <img
                            src={imgUrl}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "15px"
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PlacesCarousel;
