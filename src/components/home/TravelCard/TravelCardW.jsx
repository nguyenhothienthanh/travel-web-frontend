import { FaHeart, FaStar } from 'react-icons/fa';
import './TravelCardW.css';

const TravelCardW = ({
  image,
  location,
  title,
  rating,
  reviews,
  description,
  oldPrice,
  newPrice,
  duration,
}) => {
  return (
    <div className="travel-card-horizontal">
      {/* Image */}
      <div className="travel-image-wrapper">
        <img src={image} alt={title} className="travel-image" />
        <span className="heart-icon"><FaHeart /></span>
      </div>

      {/* Middle Content */}
      <div className="travel-info">
        <p className="travel-location">{location}</p>
        <h3 className="travel-title">{title}</h3>
        <div className="travel-rating">
          <FaStar color="#facc15" />
          <span>{rating}</span>
          <span className="reviews">({reviews})</span>
        </div>
        <p className="travel-description">{description}</p>
        <div className="travel-tags">
          <span className="tag best-price">Best Price Guarantee</span>
          <span className="tag free-cancel">Free Cancellation</span>
        </div>
      </div>

      {/* Price & Action */}
      <div className="travel-price-section">
        <p className="travel-duration">{duration}</p>
        <p className="old-price">{oldPrice}</p>
        <p className="new-price">From {newPrice}</p>
        <button className="view-details">View Details</button>
      </div>
    </div>
  );
};

export default TravelCardW;
