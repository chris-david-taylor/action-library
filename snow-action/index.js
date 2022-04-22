import ServiceNow from './ServiceNow.js';


const core = require('@actions/core');
const github = require('@actions/github');

try {
    // inputs ------------------------	   
    var snowUsername = core.getInput('snow-username');
    var snowPassword = core.getInput('snow-password');
    var snowUrl = core.getInput('snow-url');

    // work to do --------------------- 
    var snow = new ServiceNow(snowUsername, snowPassword, snowUrl );
   
    // outputs ------------------------	
    core.setOutput("time", "test");
    
    var payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch(error) {
    core.setFailed(error.message);
}
