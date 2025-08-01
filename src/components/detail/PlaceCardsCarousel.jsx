import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home/TravelCard/TravelCard.css";
import TravelCard from "../home/TravelCard/TravelCard";

const PlaceCardsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  const travelData = [
    {
      image: "src/assets/images/dongphongnha.jpg",
      title: "Phong Nha Cave",
      rating: 4.7,
      duration: "3 Days 4 Nights",
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
      description: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner"
      ],
      price: "₹88,952"
    },
    {
      image: "src/assets/images/vinhhalong.png",
      title: "Ha Long Bay",
      rating: 4.9,
      duration: "2 Days 3 Nights",
      flights: 1,
      hotels: 2,
      transfers: 1,
      activities: 5,
      description: [
        "Cruise through limestone islands",
        "Kayaking adventure",
        "Sunset dinner on deck"
      ],
      price: "₹75,500"
    },
    {
      image: "src/assets/images/vinhhalong.png",
      title: "Ha Long Bay",
      rating: 4.9,
      duration: "2 Days 3 Nights",
      flights: 1,
      hotels: 2,
      transfers: 1,
      activities: 5,
      description: [
        "Cruise through limestone islands",
        "Kayaking adventure",
        "Sunset dinner on deck"
      ],
      price: "₹75,500"
    },
    {
      image: "src/assets/images/vinhhalong.png",
      title: "Ha Long Bay",
      rating: 4.9,
      duration: "2 Days 3 Nights",
      flights: 1,
      hotels: 2,
      transfers: 1,
      activities: 5,
      description: [
        "Cruise through limestone islands",
        "Kayaking adventure",
        "Sunset dinner on deck"
      ],
      price: "₹75,500"
    },
    {
      image: "src/assets/images/vinhhalong.png",
      title: "Ha Long Bay",
      rating: 4.9,
      duration: "2 Days 3 Nights",
      flights: 1,
      hotels: 2,
      transfers: 1,
      activities: 5,
      description: [
        "Cruise through limestone islands",
        "Kayaking adventure",
        "Sunset dinner on deck"
      ],
      price: "₹75,500"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Slider {...settings}>
        {travelData.map((data, index) => (
          <div key={index}>
            <TravelCard {...data} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PlaceCardsCarousel;
