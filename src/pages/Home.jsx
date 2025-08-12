import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PlaceCardsCarousel from "../components/detail/PlaceCardsCarousel";
import SearchBar from "../components/home/SearchBar";
import TopCategory from "../components/home/TopCategory";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useBreakpoints } from "../hooks/UseIsMobile";

const Home = () => {
  const { isMobile, isTablet, isDesktop, isLarge } = useBreakpoints();

  // Xác định padding
  const horizontalPadding = isMobile
    ? "16px"
    : isTablet
    ? "32px"
    : isDesktop
    ? "80px"
    : "150px";

  const titleFontSize = isMobile ? "28px" : isTablet ? "36px" : "48px";

  return (
    <div
      style={{
        backgroundColor: "#ffffffff",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Banner Header */}
      <div
        style={{
          backgroundImage: "url('src/assets/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: isMobile ? "400px" : "600px",
          position: "relative",
          color: "white",
        }}
      >
        <Header />
        <div
          style={{
            padding: isMobile ? "80px 16px 32px" : "120px 16px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: titleFontSize,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            The whole world awaits
          </h1>
          <div style={{ width: "100%", maxWidth: "1200px", padding: "10px" }}>
            <SearchBar />
            <div style={{ marginTop: "16px" }}>
              <TopCategory />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: `40px ${horizontalPadding}`,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          color: "black",
        }}
      >
        {[
          "Popular Beach Destinations",
          "Recently Viewed",
          "All Inclusive Packages!",
          "Honeymoon Freebies Special",
        ].map((title, index) => (
          <div key={index}>
            <h2
              style={{
                fontSize: isMobile ? "18px" : "20px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              {title}
            </h2>
            <PlaceCardsCarousel />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
