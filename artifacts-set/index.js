const { debug } = require('@actions/core');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        var cloud = core.getInput('cloud');
        var environment = core.getInput('environment');
        var artifacts = core.getInput('artifacts');
 
        var artifacts = artifactsInputs.replace(/\n/g, ' ');
        var artifactsObj = JSON.parse(artifacts);

        // configure cloud ----------------------
        if ( cloud == "azure") {             
            environment = environment.replace(/-/g, '');
        } 

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

        for (var item in artifactsObj ) {
            console.log(`hello value is ${item} equals ${item[ property ]}`);       
        }
              
    }
    catch{
        console.log("exception!");
    }
})();
