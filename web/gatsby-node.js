const redirects = require("./redirects.json")
const fs = require('fs')
const path = require('path')

exports.onPostBuild = async () => {  
    const redirectLines = redirects.map(redirect => {
      const status = redirect.isPermanent ? 301 : 302;
      const force = redirect.force ? '!' : '';
      return `${redirect.from}  ${redirect.to}  ${status}${force}`;
    });
  
    const publicDir = path.join(__dirname, 'public');
    fs.writeFileSync(path.join(publicDir, '_redirects'), redirectLines.join('\n'));
  };