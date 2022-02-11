#!/usr/bin/env node
// 告诉我们的系统用什么解释器来执行该文件
const yargs = require("yargs");

const argv = yargs
  .usage("Usage: $0 <command> [options]") // 设置当调用 --help 命令时将显示的 CLI 的用法信息
  .command("count", "Count the lines in a file") // 创建了一个新的命令，名称为 count，并设置了一个描述。
  .example("$0 count -f foo.js", "count the lines in the given file")
  .alias("f", "file") //为-f 选项创建别名 --file。
  .nargs("f", 1) //为该选项设置一个参数（文件名），否则显示 --help 菜单。
  .describe("f", "Load a file") //为该选项添加一个描述
  .demandOption(["f"]) //需要一个文件名，所以我们要求选项-f
  .help("h") // 将帮助命令绑定到选项 h 上。
  .alias("h", "help").argv; // 为选项 -h 创建了一个别名，即 --help
console.log(argv);
// Create stream with the file
const s = require('fs').createReadStream(argv.file);

var lines = 0;
s.on("data", (buf) => {
  // Get the number of lines
  lines += buf.toString().match(/\n/g).length;
});

s.on("end", () => {
  // Display the number of lines
  console.log(lines);
});
