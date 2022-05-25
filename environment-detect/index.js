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
 
        var rest = new Rest(token);
        var text = new Text();

        var response = await rest._get( url );

        // catch all possible values of environment - this should strictly only be one 
        var environments = [];        

        for( var i = 0, l = response.files.length; i < l; i++ ) {
            var filename = response.files[i].filename;            
            files.push(filename);
        }  

        // filter by cloud ---------------------
        files = files.filter(function (str) { return str.includes(cloud); });

        // get environment ---------------------
        for (var file in files ) {
            var environment = await text.field(file, '/', '2');
            console.log(`environment ${environment}`);
            environments.push(file)
        }
                     
    } catch(e) {
        console.log(`exception! ${e}`);
    }
})();