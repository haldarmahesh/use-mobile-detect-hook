declare module 'use-mobile-detect-hook' {
    interface Device {
      isMobile(): boolean;
      isDesktop(): boolean;
      isAndroid(): boolean;
      isIos(): boolean;
      isSSR(): boolean;
    }
    export default function useMobileDetect(): Device;
}
