var config = require('conventional-changelog-bgdmjs/config');
//config[0].debug = function () { console.log(...arguments); };
config[1].repository = 'analytics';
config[2].from = 'HEAD@{1}';
require('conventional-changelog')(...config).pipe(process.stdout);
