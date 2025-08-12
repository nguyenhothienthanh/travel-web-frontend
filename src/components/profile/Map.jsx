import provinces from "../../assets/map/VietnamPath";
import colors from "../../constants/Colors";
import { useBreakpoints } from "../../hooks/UseIsMobile";
const MapSection = () => {
    const visited = ['VN73', 'VNCT', 'VNSG', 'VN50', 'VN43', 'VN47', 'VN52', 'VN45', 'VN46', 'VN49']
    const { isMobile, isTablet, isDesktop, isLarge } = useBreakpoints();

    // Tuỳ kích thước, chọn chiều rộng SVG phù hợp
    const getSvgWidth = () => {
        if (isMobile) return '100%';
        if (isTablet) return '400px';
        if (isDesktop) return '500px';
        if (isLarge) return '600px';
        return '100%';
    };
    return (
        <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: isMobile ? '1rem' : '2rem',
            textAlign: 'center'
        }}>
            <h3 style={{
                fontSize: isMobile ? '14px' : '16px',
                marginBottom: '1rem',
                color: colors.white,
            }}>🗺️ My Travel Footprint</h3>
            <div style={{
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '16/9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
            }}>
                <svg viewBox="0 0 1000 1000"
                    style={{
                        width: getSvgWidth(),
                        height: 'auto',
                        display: 'block',
                        margin: isMobile ? '0 auto' : 'initial',
                        alignContent: 'center'
                    }}>
                    {provinces.map(({ id, d }) => (
                        <path
                            key={id}
                            d={d}
                            fill={visited.includes(id) ? '#FF5722' : '#e0e0e0'}
                            stroke="#333"
                            strokeWidth="0.3"
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default MapSection;