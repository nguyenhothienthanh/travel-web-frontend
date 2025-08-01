import { useState } from 'react';
import colors from "../../constants/Colors";
import { useBreakpoints } from '../../hooks/UseIsMobile'; // cập nhật nếu file đổi tên

const Header = () => {
    const [active, setActive] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isMobile, isTablet } = useBreakpoints();

    const isCompact = isMobile || isTablet;

    return (
        <header style={styles.wrapper}>
            <div
                style={{
                    ...styles.container,
                    margin: '0 auto',
                    padding: isCompact ? '0 12px' : '0 16px',
                }}
            >
                <div style={styles.logo}>
                    <span>kt.</span>
                </div>

                {!isCompact && (
                    <nav style={styles.nav}>
                        {['Home', 'Stays', 'Flights', 'Packages', 'Sign Up'].map((label) => (
                            <NavItem
                                key={label}
                                label={label}
                                active={active === label}
                                onClick={() => setActive(label)}
                            />
                        ))}
                    </nav>
                )}

                {isCompact && (
                    <button
                        style={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span style={{ ...styles.hamburger, transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}></span>
                        <span style={{ ...styles.hamburger, opacity: isMenuOpen ? 0 : 1 }}></span>
                        <span style={{ ...styles.hamburger, transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}></span>
                    </button>
                )}
            </div>

            {isCompact && isMenuOpen && (
                <nav style={styles.mobileNav}>
                    {['Home', 'Stays', 'Flights', 'Packages', 'Sign Up'].map((label) => (
                        <NavItem
                            key={label}
                            label={label}
                            active={active === label}
                            isMobile={true}
                            onClick={() => {
                                setActive(label);
                                setIsMenuOpen(false);
                            }}
                        />
                    ))}
                </nav>
            )}
        </header>
    );
};

const NavItem = ({ label, active = false, bold = false, isMobile = false, onClick }) => (
    <div
        onClick={onClick}
        style={{
            ...styles.navItem,
            ...(isMobile ? styles.mobileNavItem : {}),
            borderBottom: active && !isMobile ? `1px solid ${colors.white}` : 'none',
            backgroundColor: active && isMobile ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            cursor: 'pointer',
        }}
    >
        <span
            style={{
                ...styles.navText,
                ...(isMobile ? styles.mobileNavText : {}),
                fontWeight: bold ? 700 : 400,
                opacity: active ? 1 : 0.7,
            }}
        >
            {label}
        </span>
    </div>
);

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        margin: 0,
        zIndex: 1000,
        overflowX: 'hidden',
        boxSizing: 'border-box',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1280px',
        height: '80px',
        boxSizing: 'border-box',
    },
    logo: {
        color: colors.white,
        fontFamily: 'Poppins, -apple-system, Roboto, sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        cursor: 'pointer',
        flexShrink: 0,
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexShrink: 0,
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        minHeight: '36px',
        flexShrink: 0,
    },
    navText: {
        color: colors.white,
        fontFamily: 'Poppins, -apple-system, Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: 700,
        transition: 'opacity 0.3s ease',
        whiteSpace: 'nowrap',
    },
    mobileMenuBtn: {
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        gap: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        flexShrink: 0,
    },
    hamburger: {
        width: '20px',
        height: '2px',
        backgroundColor: colors.white,
        borderRadius: '2px',
        transition: 'all 0.3s ease',
        display: 'block',
    },
    mobileNav: {
        width: '100%',
        backgroundColor: colors.black,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        boxSizing: 'border-box',
    },
    mobileNavItem: {
        padding: '12px 16px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        width: '100%',
        boxSizing: 'border-box',
    },
    mobileNavText: {
        fontSize: '16px',
        fontWeight: 500,
    },
};

export default Header;
