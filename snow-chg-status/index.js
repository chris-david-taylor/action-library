import ServiceNow from './ServiceNow.js';

const core = require('@actions/core');
const github = require('@actions/github');

try {
    // inputs ------------------------	   
    var snowUsername = core.getInput('snow-username');
    var snowPassword = core.getInput('snow-password');
    var snowUrl = core.getInput('snow-url');
    var snowChg = core.getInput('snow-chg');

    // get change state --------------------- 
    var snow = new ServiceNow(snowUsername, snowPassword, snowUrl );
    var response = await snow.get_change_request( snowChg );
 
    // get change number --------------
 
    console.log(`STATE: ${JSON.stringify(response.result[0].state["value"])}`);
    // outputs ------------------------	
    core.setOutput("state", state);  

} catch(error) {
    core.setFailed(error.message);
}
