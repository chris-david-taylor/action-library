const { debug } = require('@actions/core');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        const cloud = core.getInput('cloud');
        const environment = core.getInput('environment');
        console.log(`before input`);
        const artifacts = String(core.getInput('artifacts'));
        console.log(`raw artifacts: ${artifacts}`)
        artifacts = artifacts.replace('/\n/g', ' ');
        console.log(`parsed artifacts: ${artifacts}`)
 /*       const artifactsObj = JSON.parse(artifacts);

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

        console.log(`obj: ${JSON.stringify(artifactsObj)}`);
        for (const artifact in artifactsObj ) {
            console.log(`hello value is ${artifact} equals ${artifactsObj[artifact]}`);       
              }
              */
    }
    catch{
        console.log("exception!");
    }
})();
