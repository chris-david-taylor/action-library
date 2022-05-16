const { debug } = require('@actions/core');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        const cloud = core.getInput('cloud');
        const environmentInput = core.getInput('environment');
        const artifactsInputs = core.getInput('artifacts');
 
        var artifacts = artifactsInputs.replace(/\n/g, ' ');
        var environment = environmentInput;
        const artifactsObj = JSON.parse(artifacts);

        // configure cloud ----------------------
        if ( cloud == "azure") {             
            environment = environmentInput.replace(/e/g, '');
        } 

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

  //      for (const item in artifactsObj ) {
  //          console.log(`hello value is ${item} equals ${item[ property ]}`);       
  //      }
              
    }
    catch{
        console.log("exception!");
    }
})();
