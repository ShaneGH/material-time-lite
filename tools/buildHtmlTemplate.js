const path = require('path');
const fs = require('fs');
const generateHtmlFile = require("./generateHtmlFile");

// build html file content
generateHtmlFile()
    .then(js => new Promise((resolve, reject) => {
        // add header to content
        js = "// THIS IS AN AUTOGENERATED FILE, BUILD USING ./tools/buildHtmlTemplate.js\n\n" + js;

        // write file
        fs.writeFile(
            path.resolve(__dirname, "../src/assets/template.ts"),
            js,
            err => err ? reject(err) : resolve());
    }))
    .then(() => console.log("Html template complete"))
    .catch(err => console.error(err));