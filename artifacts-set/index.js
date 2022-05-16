const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        const cloud = core.getInput('cloud');
        const environment = core.getInput('environment');
        const artifacts = core.getInput('artifacts');
        artifacts = artifacts.replace(/\n/g, ' ');
        const artifactsObj = JSON.parse(artifacts);

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

        console.log(`obj: ${JSON.stringify(artifactsObj)}`);
        for (const artifact in artifactsObj ) {
            console.log(`hello value is ${artifact} equals ${artifactsObj[artifact]}`);
        }
    }
    catch{
        console.log("exception!");
    }
})();
