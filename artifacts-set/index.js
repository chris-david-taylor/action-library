const { debug } = require('@actions/core');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        var cloud = core.getInput('cloud');
        var environment = core.getInput('environment');
        var artifactsInput = core.getInput('artifacts'); 
  
        var artifactsObj = JSON.parse(artifactsInput.replace(/\n/g, ' '));
        var seperator = ';';
        var seperator_kv = ':';
        var artifacts = ';'

        // configure cloud ----------------------
        if ( cloud == "azure") {             
            environment = environment.replace(/-/g, '');
        } 

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

        for (var item in artifactsObj ) {
 //           console.log(`hello value is ${item} equals ${artifactsObj[ item ]}`);
            var artifact = `${item}.txt${seperator_kv}${artifactsObj[ item ]}${seperator}`;
            artifacts = artifacts.concat(artifact);        
        }
        
        console.log(`artifacts: ${artifacts}`);
    }
    catch{
        console.log("exception!");
    }
})();
