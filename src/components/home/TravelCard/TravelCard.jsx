import { FaHeart, FaHiking, FaHotel, FaPlane, FaShuttleVan, FaStar } from 'react-icons/fa';
import './TravelCard.css';

const TravelCard = () => {
  return (
    <div className="travel-card" style={{ padding: "10px" }}>
      {/* Image */}
      <div className="image-container">
      <img
        src="src/assets/images/dongphongnha.jpg"
        alt="Phong Nha Cave"
        className="travel-card__image"
      />
      <span className="heart-icon"><FaHeart /></span>
    </div>

      {/* Content */}
      <div className="travel-card__content">
        <div className="travel-card__header">
          <h2 className="travel-card__title">Phong Nha Cave</h2>
          <div className="travel-card__rating">
            <FaStar color="#facc15" />
            <span>4.7</span>
          </div>
        </div>

        <p className="travel-card__duration">3 Days 4 Nights</p>

        {/* Icons */}
        <div className="travel-card__icons">
          <div className="icon-item">
            <FaPlane />
            <span>2 Flights</span>
          </div>
          <div className="icon-item">
            <FaHotel />
            <span>1 Hotel</span>
          </div>
          <div className="icon-item">
            <FaShuttleVan />
            <span>2 Transfers</span>
          </div>
          <div className="icon-item">
            <FaHiking />
            <span>4 Activities</span>
          </div>
        </div>

        {/* Description */}
        <ul className="travel-card__description">
          <li>Tour combo with return airport transfer</li>
          <li>City Tour</li>
          <li>Curious Corner</li>
        </ul>

        {/* Price */}
        <div className="travel-card__footer">
          <div className="price-new">₹88,952</div>
          <div className="per-person">Per person</div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
