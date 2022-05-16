const { debug } = require('@actions/core');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        const cloud = core.getInput('cloud');
        const environment = core.getInput('environment');
        const artifacts = core.getInput('artifacts');
        const artifactsStripped = artifacts.toString().replace(/\n/g, ' ');
        const artifactsObj = JSON.parse(artifactsStripped);

        // configure cloud
        if ( cloud == "azure") {
            environment = environment.replace('-', '');
        } 

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifactsStripped}`);

        console.log(`obj: ${JSON.stringify(artifactsObj)}`);
        for (const item in artifactsObj ) {
            console.log(`hello value is ${item} equals ${item[artifact]}`);       
        }
              
    }
    catch{
        console.log("exception!");
    }
})();
