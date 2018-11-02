const { useEffect } = require('react');

const getMobileDetect = userAgent => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));

  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = () => !isMobile();
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos
  };
};
const useMobileDetect = () => {
  useEffect(() => {}, []);
  return getMobileDetect(navigator.userAgent);
};

module.exports = useMobileDetect;
