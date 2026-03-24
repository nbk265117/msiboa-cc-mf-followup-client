// Global type declarations for single-spa
declare global {
  interface Window {
    singleSpaNavigate?: (url: string) => void;
  }
}

export {};
