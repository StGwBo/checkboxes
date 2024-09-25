export default {
    // extensionsToTreatAsEsm: [".js"],
    testEnvironment: "jest-environment-jsdom",

    // testEnvironment: "jest-environment-node",
    // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
        "\\.[jt]sx?$": "babel-jest",
    },
};
