const yargs = require("yargs");

const argvs = yargs
  //node yarg.js add -t -b  /**-t -b必需*/
  .command("add", "Add a new note", {
    title: {
      describe: "Title of note",
      alias: "t",
      demandOption: true, //表示 title 必须传递参数
    },
    body: {
      describe: "Body of note",
      alias: "b",
      demandOption: true,
    },
  })
  .command("list", "List all notes")
  .help()
  .alias("help", "h").argv; //--help == -h

const argv = yargs.argv;
console.log(argv);
