import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
  // Khởi tạo state với giá trị mặc định an toàn
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Đánh dấu đã mount ở client
    setIsClient(true);
    
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= breakpoint);
    };

    // Check ngay khi mount
    checkMobile();

    // Throttle resize event để tránh gọi quá nhiều
    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };

    window.addEventListener('resize', throttledResize);
    
    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', throttledResize);
    };
  }, [breakpoint]);

  // Trả về false nếu chưa mount ở client (SSR safety)
  return isClient ? isMobile : false;
};

// Hook nâng cao với nhiều breakpoints
export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false
  });
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkBreakpoints = () => {
      const width = window.innerWidth;
      
      setBreakpoints({
        isMobile: width <= 480,
        isTablet: width > 480 && width <= 768,
        isDesktop: width > 768 && width <= 1200,
        isLarge: width > 1200
      });
    };

    checkBreakpoints();

    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkBreakpoints, 100);
    };

    window.addEventListener('resize', throttledResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', throttledResize);
    };
  }, []);

  return isClient ? breakpoints : {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false
  };
};

// Hook để get screen width
export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();

    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWidth, 100);
    };

    window.addEventListener('resize', throttledResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', throttledResize);
    };
  }, []);

  return isClient ? screenWidth : 0;
};

export default useIsMobile;