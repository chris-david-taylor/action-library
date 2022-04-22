import ServiceNow from './ServiceNow.js';


const core = require('@actions/core');
const github = require('@actions/github');

try {
    // inputs ------------------------	   
    const snowUsername = core.getInput('snow-username');
    const snowPassword = core.getInput('snow-password');
    const snowUrl = core.getInput('snow-url');

    // debug --------------------------
    console.log(`snow username: ${snowUsername}`);
    console.log(`snow password: ${snowPassword}`);
    console.log(`snow url: ${snowUrl}`);

    // work to do --------------------- 
    var snow = new ServiceNow(snowUsername, snowPassword, snowUrl );
   
    // outputs ------------------------	
    core.setOutput("time", time);
    
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch(error) {
    core.setFailed(error.message);
}
