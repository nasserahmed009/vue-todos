module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,vue}",
    "src/views/**/*.{js,vue}"
  ]
};
