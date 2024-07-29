module.exports =  {
    verbose: false,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!node_modules/",
        "!**/src/test/**",
        "!**/index.js",
    ],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/styleMock.cjs",
        "\\.(css|less|sass|scss)$": "<rootDir>/styleMock.cjs"
    },
    coverageReporters: [
        "json",
        "cobertura",
        "text-summary",
        "lcov",
        "text",
        "clover"
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: "jsdom"
}