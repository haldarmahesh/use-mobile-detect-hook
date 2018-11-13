[![npm version](https://badge.fury.io/js/use-mobile-detect-hook.svg)](https://badge.fury.io/js/use-mobile-detect-hook)

# use-mobile-detect-hook

React hook to detect the device type. This hook is able to detect mobile, desktop, android or iOS device.

# Installing

```bash
npm install use-mobile-detect-hook
```

```bash
yarn add use-mobile-detect-hook
```

# Demo

Follow [this link](http://www.maheshhaldar.com/demo-use-mobile-detect-hook/) to check the demo.

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

If you have any new suggestions, new features, bug fixes, etc. please contribute by raising pull request on the [repository](https://github.com/haldarmahesh/use-mobile-detect-hook).

If you have any issue with the `use-mobile-detect-hook`, open an issue on [Github](https://github.com/haldarmahesh/use-mobile-detect-hook).
