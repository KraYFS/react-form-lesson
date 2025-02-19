export default {
  testEnvironment: "jest-environment-jsdom", // ✅ Use the correct environment
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // ✅ Ensure Jest setup is applied
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
