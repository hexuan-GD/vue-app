module.exports = {
  root: true,
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 CommonJS
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true,
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    //这里是添加的代码
    {
      files: [
        "src/components/**.vue",
        "src/components/**/**.vue",
        "src/views/**.vue",
      ], // 匹配目录中的**.vue
      rules: {
        "vue/multi-word-component-names": "off",
      }, //给上面匹配的文件指定规则
    },
  ],
};
