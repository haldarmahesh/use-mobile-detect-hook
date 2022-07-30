function detect(userAgent: string) {
  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = Boolean(userAgent.match(/IEMobile/i));
  const isSSR = Boolean(userAgent.match(/SSR/i));

  const isMobile = isAndroid || isIos || isOpera || isWindows;
  const isDesktop = !isMobile && !isSSR;
  return {
    isAndroid,
    isIos,
    isOpera,
    isWindows,
    isSSR,
    isMobile,
    isDesktop
  };
}
type DetectCache = { [key: string]: ReturnType<typeof detect> };
const newMobileDetector = () => {
  const cache: DetectCache = {};
  return {
    detect: (userAgent: string) => {
      if (cache[userAgent]) return cache[userAgent];
      const result = detect(userAgent);
      cache[userAgent] = result;
      return result;
    }
  };
};
const mobileDetector = newMobileDetector();
const useMobileDetect = () => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  return mobileDetector.detect(userAgent);
};

module.exports = useMobileDetect;
