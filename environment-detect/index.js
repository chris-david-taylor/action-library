const core = require('@actions/core');
require('dotenv').config();
import Rest from './Rest.js';

(async () => {

    try {
        var eventBefore = core.getInput('event_before');
        var eventAfter = core.getInput('event_after');

        console.log(`eventBefore: ${eventBefore}`);
        console.log(`eventAfter: ${eventAfter}`);

        var site = "https://api.github.com/repos";
        var org = "chris-david-taylor";
        var repo = "action demo";

        var url = `${site}/${org}/${repo}/compare/${eventBefore}..${eventAfter}`;

        var rest = new Rest("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");

        var response = await rest._get( url );
        console.log(`[index] response is ${JSON.stringify(response)}`);
       /* 
        var files = [];    

        for( file in response['files']){

        }  
*/
    } catch(e) {
        console.log(`exception! ${e}`);
    }
})();