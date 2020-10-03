module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    "moduleNameMapper": {
        "^@Models/(.*)": "<rootDir>/ClientApp/models/$1"
    }
};