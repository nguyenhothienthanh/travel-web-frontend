import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import colors from '../constants/Colors';
import MapSection from '../components/profile/Map';
import { useBreakpoints } from '../hooks/UseIsMobile';

const UserProfile = () => {
    // eslint-disable-next-line no-unused-vars
    const { isMobile, isTablet } = useBreakpoints();
    return (
        <div>
            <Header />
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: isMobile ? '20px 10px' : '40px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontFamily: 'Poppins, -apple-system, Roboto, sans-serif',
                }}
            >
                <div
                    style={{
                        height: isMobile ? '100px' : '120px',
                        width: '100%',
                        backgroundImage: `url('/assets/images/dongphongnha.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                    }}
                ></div>

                <div
                    style={{
                        padding: isMobile ? '10px' : '15px',
                        textAlign: 'center',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <img
                        src="/assets/images/vinhhalong.png"
                        alt="Avatar"
                        style={{
                            width: isMobile ? '60px' : '80px',
                            height: isMobile ? '60px' : '80px',
                            borderRadius: '50%',
                            border: '2px solid white',
                            position: 'absolute',
                            top: isMobile ? '-30px' : '-40px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: colors.white,
                        }}
                    />
                    <h2
                        style={{
                            marginTop: isMobile ? '40px' : '50px',
                            fontSize: isMobile ? '18px' : '20px',
                            fontWeight: 'bold',
                            color: colors.white,
                        }}
                    >
                        Skye Silva
                    </h2>
                    <p style={{ color: colors.grayDark, fontSize: isMobile ? '14px' : '16px' }}>
                        silva@gmail.com
                    </p>
                    <p
                        style={{
                            marginTop: '15px',
                            color: '#555',
                            fontSize: isMobile ? '13px' : '14px',
                            lineHeight: '1.5',
                        }}
                    >
                        Hi I'm Skye! <br/>
                        ✨ Lisbon, Portugal <br />
                        📍 Travel + drone videographer <br />
                        ✈️ Follow my adventures!
                    </p>
                </div>

                <div
                    style={{
                        width: '100%',
                        marginTop: isMobile ? '20px' : '40px',
                    }}
                >
                    <MapSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfile;
