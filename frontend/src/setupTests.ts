import "@testing-library/jest-dom";

// Mock import.meta.env
Object.defineProperty(global, "import", {
  value: {
    meta: {
      env: {
        DEV: true,
        PROD: false,
        VITE_APP_API_URL: "http://localhost:3000",
      },
    },
  },
  writable: true,
});

// Also define it on window for components that might access it there
Object.defineProperty(window, "import", {
  value: global.import,
});
