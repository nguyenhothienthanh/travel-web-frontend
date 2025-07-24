import React, { useState } from "react";
import colors from "../../constants/Colors";

const TopCategory = () => {
    const [selectedLabel, setSelectedLabel] = useState(null);

    const handleClick = (label) => {
        setSelectedLabel(label);
        console.log(`Selected category: ${label}`);
    };

    const categories = [
        { iconUrl: "src/assets/icons/beach.png", label: "Beaches" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Deserts" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Cruises" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Islands" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Castles" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Canyons" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Countryside" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Camping" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Tropical" },
        { iconUrl: "src/assets/icons/deserts.png", label: "Mountains" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p
                style={{
                    color: colors.white,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    textAlign: "left",
                }}
            >
                Top Categories
            </p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {categories.map((cat) => (
                    <CategoryItem
                        key={cat.label}
                        iconUrl={cat.iconUrl}
                        label={cat.label}
                        opacity={selectedLabel === cat.label ? 1 : 0.4}
                        onClick={() => handleClick(cat.label)}
                        isSelected={selectedLabel === cat.label}
                    />
                ))}
            </div>
        </div>
    );
};

const CategoryItem = ({ iconUrl, label, opacity, onClick, isSelected }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: "flex",
                width: "fit-content",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
                opacity: isSelected || isHovered ? 1 : opacity,
            }}
        >
            <img
                src={iconUrl}
                alt={label}
                style={{
                    width: "35px",
                    height: "35px",
                }}
            />
            <div
                style={{
                    color: colors.white,
                    fontFamily: "Poppins, -apple-system, Roboto, sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    opacity: isSelected || isHovered ? 1 : opacity,
                    transition: "opacity 0.3s ease",
                }}
            >
                {label}
            </div>
        </div>
    );
};

export default TopCategory;
