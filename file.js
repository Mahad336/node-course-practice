const fs = require("fs");
// fs.existsSync("./Assets") &&
//   fs.rmdir("./Assets", (err) => {
//     err && console.log(err);
//     console.log("Folder Created");
//   });
const readStream = fs.createReadStream("./Docs/blog1.txt", {
  encoding: "utf8",
});
readStream.on("data", (chunk) => {
  console.log("............New Chunk.......... \n " + chunk.length + "\n");
});
