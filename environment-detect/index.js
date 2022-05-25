const core = require('@actions/core');
require('dotenv').config();
import Rest from './Rest.js';
import Text from './Text.js';

(async () => {

    try {
        var eventBefore = core.getInput('event_before');
        var eventAfter = core.getInput('event_after');
        var token = core.getInput('token');

        var cloud = "aws";
        var site = "https://api.github.com/repos";
        var org = "chris-david-taylor";
        var repo = "action-demo";
        var url = `${site}/${org}/${repo}/compare/${eventBefore}...${eventAfter}`;
        var files = [];
        var environments = []; 
        var deploy_env = "none";

        var rest = new Rest(token);
        var text = new Text();

        var response = await rest._get( url );
              
        for( var i = 0, l = response.files.length; i < l; i++ ) {
            var filename = response.files[i].filename;            
            files.push(filename);
        }  

        // filter by cloud ---------------------
        var versionFiles = await text.filter(files, cloud );

        // get all possible environments -------
        for (var i = 0; i < versionFiles.length; i++ ) 
        {
            var environment = await text.field(versionFiles[i], '/', 2);
            environments.push(environment);
        }

        // if all environments are the same ------
        if (text.all_unique(environments)) {
            deploy_env = environments[0];
        } 
        console.log(`deploy env = ${deploy_env}`);
                     
    } catch(e) {
        console.log(`exception! ${e}`);
    }
})();