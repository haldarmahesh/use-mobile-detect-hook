const useMobileDetect = require('../../build/index');

const setUserAgent = userAgent => {
  Object.defineProperty(navigator, 'userAgent', {
    value: userAgent,
    writable: true
  });
};
describe('useMobileDetect', () => {
  test('should return an object of functions and vals', () => {
    const detection = useMobileDetect();
    expect(typeof detection.isMobile).toEqual('boolean');
    expect(typeof detection.isAndroid).toEqual('boolean');
    expect(typeof detection.isIos).toEqual('boolean');
    expect(typeof detection.isSSR).toEqual('boolean');
  });
});

describe('getMobileDetect', () => {
  test('should return isMobile true when valid user agent is mobile', () => {
    const samsungGalaxyUa = `Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) 
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36`;
    setUserAgent(samsungGalaxyUa);
    expect(useMobileDetect().isMobile).toEqual(true);

    const samsungGalaxys6Ua = `Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) 
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36`;
    setUserAgent(samsungGalaxys6Ua);
    expect(useMobileDetect().isMobile).toEqual(true);
    expect(useMobileDetect().isAndroid).toEqual(true);
    expect(useMobileDetect().isIos).toEqual(false);

    const windows10 = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
    (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246`;
    setUserAgent(windows10);
    expect(useMobileDetect().isMobile).toEqual(false);
    expect(useMobileDetect().isDesktop).toEqual(true);

    const htcOneM9 = `Mozilla/5.0 (Linux; Android 6.0; HTC One M9 Build/MRA58K)
     AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.3`;
    setUserAgent(htcOneM9);
    expect(useMobileDetect().isMobile).toEqual(true);

    const iPhone8 = `Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) 
    AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1`;
    setUserAgent(iPhone8);
    expect(useMobileDetect().isMobile).toEqual(true);
    expect(useMobileDetect().isIos).toEqual(true);
    expect(useMobileDetect().isAndroid).toEqual(false);

    const microsoftLumia950 = `Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950)
     AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058`;
    setUserAgent(microsoftLumia950);
    expect(useMobileDetect().isMobile).toEqual(true);

    const windows7Chrome = `Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 
    (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36`;
    setUserAgent(windows7Chrome);
    expect(useMobileDetect().isMobile).toEqual(false);
    expect(useMobileDetect().isAndroid).toEqual(false);
    expect(useMobileDetect().isIos).toEqual(false);
    expect(useMobileDetect().isDesktop).toEqual(true);
  });

  test('should return isSSR true when valid user agent is SSR', () => {
    setUserAgent('SSR');
    expect(useMobileDetect().isSSR).toEqual(true);
  });
});
