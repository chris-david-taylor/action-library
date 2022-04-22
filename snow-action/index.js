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
    var response = await snow.raise_change_request( 
        "Please approve this Pull Request", "Standard" );
    
    // get change number --------------
    var number = response['result']['number']['display_value'];    
    console.log(`RESPONSE: ${JSON.stringify(response)}`)

    // outputs ------------------------	
    core.setOutput("time", number);
    
    var payload = JSON.stringify(github.context.payload, undefined, 2);
 //   console.log(`The event payload: ${payload}`);
} catch(error) {
    core.setFailed(error.message);
}
