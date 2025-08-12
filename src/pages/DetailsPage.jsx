import FAQAccordion from "../components/detail/FAQ"
import PlaceCardsCarousel from "../components/detail/PlaceCardsCarousel"
import PlacesCarousel from "../components/detail/PlacesCarousel"
import VisitorsReview from "../components/detail/VisitorsReview"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import colors from "../constants/Colors"
import { useBreakpoints } from "../hooks/UseIsMobile"
const DetailsPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { isMobile, isTablet } = useBreakpoints();
    return (
        <div style={{ width: "100%", fontFamily: 'Poppins, -apple-system, Roboto, sans-serif', overflowX: 'hidden', overflowY: 'scroll', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
            <Header />
            <div
                style={{
                    width: "100%",
                    maxWidth: '1280px',
                    margin: isMobile ? '0 0' : '0 auto',
                    padding: isMobile ? '0 12px' : '0 16px',
                    boxSizing: 'border-box',
                    overflowX: 'hidden'
                }}
            >
                <h2 style={{
                    fontSize: isMobile ? '20px' : '32px',
                    marginTop: isMobile ? '16px' : '32px',
                }}>
                    Ha Long Bay – A Natural Wonder of the World in the Heart of Vietnam
                </h2>

                <div
                    style={{
                        width: '100%',
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "8px" : "0",
                        marginBottom: "16px"
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        padding: isMobile ? '0' : '0 16px',
                        fontSize: isMobile ? '14px' : '16px'
                    }}>
                        <p>4.0</p>
                        <p>Viet Nam</p>
                        <p>400k views</p>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        fontSize: isMobile ? '14px' : '16px'
                    }}>
                        <button style={{ background: "none", border: "none", cursor: "pointer", color: colors.black }}>Share</button>
                        <p>Wishlist</p>
                    </div>
                </div>

                <div>
                    <PlacesCarousel />
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <h2 style={{
                        fontSize: isMobile ? "22px" : "28px",
                        fontWeight: "bold",
                        color: colors.black,
                        marginBottom: "16px",
                    }}>
                        Destination Overview
                    </h2>
                    <p style={{
                        textAlign: "justify",
                        fontSize: isMobile ? "14px" : "16px",
                        lineHeight: "1.8",
                        color: colors.black,
                        margin: 0,
                    }}>
                        Located in northeastern Vietnam, Ha Long Bay is a breathtaking UNESCO World Heritage Site renowned for its stunning seascape of limestone pillars, emerald waters, and mystical caves. Spanning over 1,500 square kilometers and dotted with nearly 2,000 limestone islands and islets, the bay is a natural masterpiece shaped by millions of years of geological evolution.
                        Visitors to Ha Long Bay are captivated by its dramatic cliffs, tranquil beaches, and hidden lagoons. The bay offers a wide range of experiences — from cruising through surreal karst formations and exploring floating fishing villages, to kayaking into secluded coves and marveling at the magical glow of illuminated caves such as Sung Sot and Thien Cung.
                        Whether you're seeking adventure, romance, or relaxation, Ha Long Bay promises an unforgettable journey into the heart of Vietnam’s natural beauty. It's not just a destination — it's an experience of wonder, peace, and timeless charm.                    </p>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderBottom: `1px solid ${colors.grayLight}`,
                    marginTop: "32px"
                }}>
                    <h3 style={{ color: colors.black, marginBottom: "12px", fontSize: isMobile ? "18px" : "20px" }}>
                        Destination Highlights
                    </h3>
                    <ul style={{ paddingLeft: "20px", fontSize: isMobile ? "14px" : "16px" }}>
                        <li>🛳️ <strong>Overnight Cruises</strong> – Experience luxury and serenity...</li>
                        <li>🌄 <strong>Sung Sot Cave (Surprise Cave)</strong> – Explore Ha Long Bay’s most famous cave...</li>
                        <li>🏝️ <strong>Ti Top Island</strong> – Hike to the top for a panoramic view...</li>
                    </ul>
                </div>

                <div style={{ marginTop: "32px" }}>
                    <h2 style={{
                        fontSize: isMobile ? "22px" : "28px",
                        fontWeight: "bold",
                        color: colors.black,
                        marginBottom: "20px",
                    }}>
                        Travel Tips
                    </h2>
                    <ul style={{ paddingLeft: "20px", fontSize: isMobile ? "14px" : "16px" }}>
                        <li>🕒 <strong>Best Time to Visit:</strong> October to April...</li>
                        <li>🎫 <strong>Book Early:</strong> Cruises and tours often sell out...</li>
                        <li>🚫 <strong>Respect the Environment:</strong> Avoid single-use plastics...</li>
                        <li>📷 <strong>Bring a Good Camera:</strong> The views are picture-perfect...</li>
                    </ul>
                </div>

                <div style={{ borderTop: `1px solid ${colors.grayLight}`, marginTop: "32px" }}>
                    <FAQAccordion />
                </div>

                <div style={{ borderTop: `1px solid ${colors.grayLight}`, marginTop: "32px" }}>
                    <VisitorsReview />
                </div>
                <div style={{ borderTop: `1px solid ${colors.grayLight}`, marginTop: "32px", marginBottom: "32px" }}>
                    <h2 style={{
                        fontSize: isMobile ? "22px" : "28px",
                        fontWeight: "bold",
                        color: colors.black,
                        marginBottom: "20px",
                    }}>You might like this ...</h2>
                    <PlaceCardsCarousel />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailsPage