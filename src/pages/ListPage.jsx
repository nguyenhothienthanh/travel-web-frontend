import { Pagination, Rate, Select, Slider } from "antd";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TravelCardW from "../components/home/TravelCard/TravelCardW";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useBreakpoints } from "../hooks/UseIsMobile";

const { Option } = Select;

const ListPage = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [rating, setRating] = useState(0);
  const pageSize = 6;

  // Dữ liệu giả
  const travelData = Array.from({ length: 20 }).map((_, idx) => ({
    id: idx + 1,
    image: "assets/images/dongphongnha.jpg",
    location: "Paris, France",
    title:
      "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviews: 269,
    description:
      "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    oldPrice: "$1200",
    newPrice: "$114",
    duration: "2 Days 1 Nights",
  }));

  // Lọc dữ liệu theo filter
  const filteredData = travelData.filter(
    (item) =>
      parseFloat(item.newPrice.replace("$", "")) >= priceRange[0] &&
      parseFloat(item.newPrice.replace("$", "")) <= priceRange[1] &&
      item.rating >= rating
  );

  // Lấy dữ liệu theo trang
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const horizontalPadding = isMobile
    ? "16px"
    : isTablet
    ? "32px"
    : isDesktop
    ? "80px"
    : "150px";

  return (
    <div style={{ backgroundColor: "#f0ececff", minHeight: "100vh", color: "white" }}>
      <Header style={{ color: "black" }}/>
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: `40px ${horizontalPadding}`,
        }}
      >
        {/* Tiêu đề chung */}
        <h1
          style={{
            marginBottom: "10px",
            fontSize: isMobile ? "24px" : isTablet ? "32px" : "40px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Explore all the famous places
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "30px",
          }}
        >
          {/* Cột filter */}
          <div
            style={{
              flex: isMobile ? "unset" : "0 0 250px",
              backgroundColor: "#1e1e1e",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Filter Price</h3>
            <Slider
              range
              min={0}
              max={2000}
              value={priceRange}
              onChange={(val) => setPriceRange(val)}
            />
            <p>
              Price: ${priceRange[0]} - ${priceRange[1]}
            </p>

            <h3>Rating</h3>
            <Rate
              value={rating}
              onChange={(value) => setRating(value)}
              allowClear
            />
          </div>

          {/* Danh sách */}
          <div style={{ flex: 1 }}>
            {/* Results + Sort */}
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                marginBottom: "20px",
                gap: isMobile ? "10px" : 0,
              }}
            >
              <p style={{ margin: 0 }}>{filteredData.length} results</p>
              <Select
                defaultValue="featured"
                style={{ width: 180 }}
                dropdownStyle={{ backgroundColor: "#1e1e1e", color: "white" }}
              >
                <Option value="featured">Sort by: Featured</Option>
                <Option value="priceLow">Price: Low to High</Option>
                <Option value="priceHigh">Price: High to Low</Option>
                <Option value="rating">Top Rated</Option>
              </Select>
            </div>

            {/* Cards */}
            {paginatedData.map((item) => (
              <TravelCardW key={item.id} {...item} />
            ))}

            {/* Pagination */}
            {filteredData.length > pageSize && (
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredData.length}
                onChange={(page) => setCurrentPage(page)}
                style={{ textAlign: "center", marginTop: "20px" }}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListPage;
