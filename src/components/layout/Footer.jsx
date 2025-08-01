import colors from "../../constants/Colors";
import { useBreakpoints } from "../../hooks/UseIsMobile";

const Footer = () => {
    const { isMobile, isTablet } = useBreakpoints();
    const isSmallScreen = isMobile || isTablet;

    const wrapperStyle = {
        ...styles.wrapper,
        height: isSmallScreen ? 'auto' : 'auto',
        padding: isSmallScreen ? '1rem' : '1rem 0'
    };

    const containerStyle = {
        ...styles.container,
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        textAlign: isSmallScreen ? 'center' : 'left',
        gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
        padding: isSmallScreen ? '0rem 1rem' : '0rem 4rem'
    };

    return (
        <footer style={wrapperStyle}>
            <div style={containerStyle}>
                <div style={styles.logo}>
                    <span>kt.</span>
                </div>
                <div style={styles.about}>
                    <span style={styles.aboutTitle}>About Us</span>
                    <p style={styles.aboutText}>
                        Discover the world with us. We are a passionate team of travel experts dedicated to bringing you unforgettable journeys, from exotic getaways to local adventures.
                    </p>
                </div>
                <div style={styles.about}>
                    <span style={styles.aboutTitle}>Contact Information</span>
                    <ul style={styles.contactList}>
                        <li style={styles.aboutText}>kt. Co., Ltd.</li>
                        <li style={styles.aboutText}>123 Adventure Street, Wander City, Country</li>
                        <li style={styles.aboutText}>📞 +1 234 567 890</li>
                        <li style={styles.aboutText}>📧 support@vndot.com</li>
                        <li style={styles.aboutText}>🕒 Mon - Fri: 9:00 AM – 6:00 PM</li>
                    </ul>
                </div>
                <div style={styles.about}>
                    <span style={styles.aboutTitle}>Social Media</span>
                    <ul style={styles.socialList}>
                        <li style={styles.socialItem}>
                            <img src="src\assets\icons\facebook.png" alt="Facebook" style={styles.socialIcon} />
                        </li>
                        <li style={styles.socialItem}>
                            <img src="src\assets\icons\instagram.png" alt="Instagram" style={styles.socialIcon} />
                        </li>
                        <li style={styles.socialItem}>
                            <img src="src\assets\icons\twitter.png" alt="Twitter" style={styles.socialIcon} />
                        </li>
                        <li style={styles.socialItem}>
                            <img src="src\assets\icons\youtube.png" alt="YouTube" style={styles.socialIcon} />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        background: colors.black,
        left: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px'
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem'
    },
    logo: {
        color: colors.white,
        fontFamily: 'Poppins, -apple-system, Roboto, sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'opacity 0.3s ease',
        flexShrink: 0,
        borderRight: `1px solid ${colors.grayLight}`
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        fontFamily: 'Poppins, -apple-system, Roboto, sans-serif',
        fontSize: '14px',
        lineHeight: '1.6',
    },
    aboutTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: colors.grayLight,
        marginBottom: '0.5rem',
        textAlign: 'left',
    },
    aboutText: {
        textAlign: 'left',
        color: colors.grayDark,
        listStyleType: 'none',
        marginBottom: '0.3rem',
    },
    contactList: {
        paddingLeft: '0',
        margin: 0,
    },
    socialList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        justifyContent: 'left',
    },
    socialItem: {
        display: 'flex',
        alignItems: 'center',
    },
    socialIcon: {
        width: '24px',
        height: '24px',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease',
        ':hover': {
            opacity: 0.7
        }
    }
}

export default Footer