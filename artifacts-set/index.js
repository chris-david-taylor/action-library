const { debug } = require('@actions/core');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        var cloud = core.getInput('cloud');
        var environment = core.getInput('environment');
        var artifactsInput = core.getInput('artifacts'); 
  
        var artifactsObj = JSON.parse(artifactsInput.replace(/\n/g, ' '));

        var artifacts = '';
        var kv_seperator = ":";
        var seperator = ";";

        // configure cloud ----------------------
        if ( cloud == "azure") {             
            environment = environment.replace(/-/g, '');
        } 

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

        // build a list of artifacts. --------------------
        for (var item in artifactsObj ) {
            var artifact = `${item}.txt${kv_seperator}${artifactsObj[ item ]}${seperator}`;
            artifacts = artifacts.concat(artifact);        
        }

        // trim the last seperator
        artifacts = artifacts.replace(/\d$/, '');
        
        console.log(`artifacts: ${artifacts}`);
    }
    catch{
        console.log("exception!");
    }
})();
