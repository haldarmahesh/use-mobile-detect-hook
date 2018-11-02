# use-mobile-detect-hook

React hook to detect the device type. This hook is able to detect mobile, desktop, android or iOS device.

# Installing

```bash
npm install use-mobile-detect-hook
```

```bash
yarn add use-mobile-detect-hook
```

# Usage

```javascript
import useMobileDetect from 'use-mobile-detect-hook';

function MyComponent  = (props) => {
  const detectMobile = useMobileDetect();

  return (
      <div>
        is Mobile: { detectMobile.isMobile() } <br/>
        is Desktop: { detectMobile.isDesktop() } <br/>
        is Android: { detectMobile.isAndroid() } <br/>
        is iOS: { detectMobile.isIos() }
      </div>
  );
};
```

# Contributing

If you have any new suggestions, new features, bug fixes, etc. please contribute by raising pull request on the [https://github.com/haldarmahesh/use-mobile-detect-hook](repository).

If you have any issue with the `use-mobile-detect-hook`, open an issue on [https://github.com/haldarmahesh/use-mobile-detect-hook](Github).
