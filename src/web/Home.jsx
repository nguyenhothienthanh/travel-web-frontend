import { useRef, useState } from "react";
import SearchBar from "../components/home/SearchBar";
import TopCategory from "../components/home/TopCategory";
import TravelCard from "../components/home/TravelCard/TravelCard";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);
  const footerTriggerRef = useRef(null);
  const prevScrollY = useRef(window.scrollY);
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "white", fontFamily: "Poppins, sans-serif" }}>
      <div
        style={{
            backgroundImage: "url('src/assets/images/banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "600px",
            position: "relative", // để Header định vị tương đối
            color: "white",
        }}
        >
        <Header />
        <div
            style={{
            padding: "120px 16px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.2 }}>
                The whole world awaits
            </h1>
            <div style={{ width: "100%", maxWidth: "1000px", padding: "10px" }}>
                <SearchBar />
                    <div style={{ marginTop: "16px" }}>
                        <TopCategory />
                    </div>
                </div>
            </div>
        </div>
      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0", padding: "40px 40px", display: "flex", flexDirection: "column", gap: "48px"}}>
        <Section title="Popular Beach Destinations" count={5} />
        <Section title="Recently Viewed" count={3} />
        <Section title="All Inclusive Packages!" count={5} />
        <Section title="Honeymoon Freebies Special" count={5} />
      </div>
      < Footer/>
    </div>
  );
};

const Section = ({ title, count }) => (
  <div>
    <h2 style={{ fontSize: "20px", fontWeight: 600, textAlign: "left", marginBottom: "16px" }}>{title}</h2>
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
        gap: "120px",
        paddingBottom: "8px", // để tránh bị che khuất khi cuộn
      }}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          style={{
            flex: "0 0 auto", // Không co giãn, không xuống dòng
            width: "220px",
          }}
        >
          <TravelCard />
        </div>
      ))}
    </div>
  </div>
);

export default Home;
