import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
export default {
  input: "./src/index.js", // 以哪个文件作为打包入口
  output: {
    file: "dist/index.js", // 出口路径
    name: "JSUtil", // 指定打包后全局变量的名字
    format: "umd", // 统一模块规范
    sourcemap: true, // 开启源码调试
  },
  plugins: [
    // 使用的插件配置
    babel({
      exclude: "node_modules/**",
    }),
    process.env.ENV === "development"
      ? serve({
          open: true,
          openPage: "/public/index.html", // 默认打开html的路径
          port: 3001,
          contentBase: "",
        })
      : null,
  ],
};
