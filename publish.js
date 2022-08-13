const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("export.zip");
const archive = archiver("zip");

output.on("close", () => {
   console.log(`${archive.pointer()} total bytes`);
   console.log("archiver has been finalized and the output file descriptor has closed.");
});

archive.on("error", (err) => {
   throw err;
});

archive.pipe(output);

archive.directory("./src/dist", "dist");
archive.directory("./src/assets", "assets");
archive.file("./src/background.js", { name: "background.js" });
archive.file("./src/updateStyle.js", { name: "updateStyle.js" });
archive.file("./src/manifest.json", { name: "manifest.json" });

archive.finalize();
