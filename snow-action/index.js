import ServiceNow from './ServiceNow.js';

const core = require('@actions/core');
const github = require('@actions/github');

try {
    // inputs ------------------------	   
    const snowUsername = core.getInput('snow-username');
    const snowPassword = core.getInput('snow-password');
    const snowUrl = core.getInput('snow-url');

    // work to do --------------------- 
    const time = (new Date()).toTimeString();
   
    // outputs -----------------------	
    core.setOutput("time", time);
    
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch(error) {
    core.setFailed(error.message);
}
