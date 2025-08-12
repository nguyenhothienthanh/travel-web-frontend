import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBreakpoints } from "../../hooks/UseIsMobile";
import colors from "../../constants/Colors";

const SearchBar = () => {
    const { isMobile, isTablet } = useBreakpoints();
    const isSmallScreen = isMobile || isTablet;
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: isSmallScreen ? "auto" : "auto",
                justifyContent: "center",
                padding: isSmallScreen ? "1rem" : "1rem",
                gap: isSmallScreen ? "0.5rem" : "1rem",
                borderRadius: "40px",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${colors.white}`,
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: isSmallScreen ? 'column' : "row", // luôn là row
                    flexWrap: isSmallScreen ? "nowrap" : "wrap",
                    alignItems: "center",
                    justifyContent: isSmallScreen ? "flex-start" : "space-between",
                    gap: "1rem",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        flex: isSmallScreen ? "1 1 100%" : "none",
                        minWidth: "180px",
                    }}
                >
                    <img
                        src="/assets/icons/search.png"
                        alt="Search Icon"
                        style={{ width: "22px", height: "22px", opacity: 0.7 }}
                    />
                    <input
                        type="text"
                        placeholder="Search destinations, hotels"
                        style={{
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: colors.white,
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            flex: 1,
                            opacity: 0.7,
                            width: "100%",
                        }}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        flex: isSmallScreen ? "1 1 100%" : "1 1 180px",
                        minWidth: "160px",
                    }}
                >
                    <img
                        src="/assets/icons/calendar.png"
                        alt="Check-in Icon"
                        style={{ width: "22px", height: "22px", opacity: 0.7 }}
                    />
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="Check in"
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        className="datepicker-input"
                        popperPlacement="bottom-start"
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        flex: isSmallScreen ? "1 1 100%" : "1 1 180px",
                        minWidth: "160px",
                    }}
                >
                    <img
                        src="/assets/icons/calendar.png"
                        alt="Check-out Icon"
                        style={{ width: "22px", height: "22px", opacity: 0.7 }}
                    />
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        placeholderText="Check out"
                        dateFormat="dd/MM/yyyy"
                        minDate={checkInDate || new Date()}
                        className="datepicker-input"
                        popperPlacement="bottom-start"
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        flex: isSmallScreen ? "1 1 100%" : "1 1 180px",
                        minWidth: "160px",
                    }}
                >
                    <img
                        src="/assets/icons/guest.png"
                        alt="Guests Icon"
                        style={{ width: "22px", height: "22px", opacity: 0.7 }}
                    />
                    <span
                        style={{
                            color: colors.white,
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            opacity: 0.7,
                        }}
                    >
                        1 room, 2 adults
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: isSmallScreen ? "0.75rem 1.5rem" : "1rem 2rem",
                        borderRadius: "50px",
                        background: colors.white,
                        cursor: "pointer",
                        flex: isSmallScreen ? "1 1 100%" : "1 1 180px",
                        minWidth: "100px",
                        height: isSmallScreen ? "auto" : "auto",
                    }}
                >
                    <span
                        style={{
                            color: colors.blue,
                            fontSize: "16px",
                            fontWeight: 700,
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        Search
                    </span>
                </div>
            </div>

            <style>
                {`
                .datepicker-input {
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 16px;
                    font-family: Poppins, sans-serif;
                    padding: 0.5rem 0.5rem;
                    outline: none;
                    width: 100%;
                    cursor: pointer;
                    opacity: 0.7;
                }
                .datepicker-input::placeholder {
                    color: rgba(255,255,255,0.5);
                }
                .react-datepicker__input-container input {
                    width: 100%;
                }
                `}
            </style>
        </div>
    );
};

export default SearchBar;
