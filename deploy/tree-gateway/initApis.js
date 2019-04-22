const fs = require('fs-extra')
const SDK = require('tree-gateway/admin/config/sdk')
const utils = require('tree-gateway/utils/config');
const config = require("./gateway.json");
 
SDK.initialize({
    defaultHost: utils.getSwaggerHost(config),
    swaggerUrl: utils.getSwaggerUrl(config),
    token: utils.generateSecurityToken(config)
  })
  .then(sdk => {
        const pathApi = './test/data/apis/';
        
        // read all apis config files from a test folder and install it 
        fs.readdirAsync(pathApi)
            .then((files) => { 
                const promises = files.map(file => fs.readJsonAsync(pathApi+file));
                return Promise.all(promises);
            })
            .then((apis: any[]) => {
                const promises = apis.map(apiConfig => sdk.apis.addApi(apiConfig));
                return Promise.all(promises);
            })
            .then((apis) => {
                console.log('All APIs found on folder '+pathApi+' installed.');
            })
            .catch(reject);
  })
  .catch(error => {
      console.error('Error initializing Tree Gateway SDK': error.message);
  });
