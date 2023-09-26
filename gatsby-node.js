const redirects = require("./redirects.json")
const fs = require('fs')

exports.onPostBuild = async () => {  
    const redirectConfig = redirects.map(redirect => (
      `[[redirects]]
        from = "${redirect.from}"
        to = "${redirect.to}"
        status = ${redirect.isPermanent ? 301 : 302}
        force = ${redirect.force || false}`
    ));
  
    fs.writeFileSync('netlify.toml', redirectConfig.join('\n'));
  };