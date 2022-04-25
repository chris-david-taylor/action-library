import ServiceNow from './ServiceNow.js';

const core = require('@actions/core');
const github = require('@actions/github');

try {
    // inputs ------------------------	   
    var snowUsername = core.getInput('snow-username');
    var snowPassword = core.getInput('snow-password');
    var snowUrl = core.getInput('snow-url');
    var snowChg = core.getInput('snow-chg');

    // work to do --------------------- 
    var snow = new ServiceNow(snowUsername, snowPassword, snowUrl );
    var response = await snow.get_change_request( snowChg );
    console.log(`RESULT: ${JSON.stringify(response)}`);
    // get change number --------------
    var state = response['result']['state']['value'];    
    console.log(`STATE: ${state}`);
    // outputs ------------------------	
    core.setOutput("state", state);  
    var payload = JSON.stringify(github.context.payload, undefined, 2);

} catch(error) {
    core.setFailed(error.message);
}
