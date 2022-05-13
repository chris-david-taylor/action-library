const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        const cloud = core.getInput('cloud');
        const environment = core.getInput('environment');
        const artifacts = core.getInput('artifacts');
        const artifactsObj = JSON.parse(artifacts);

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);

        for  (const artifact in artifactsObj ) {
            console.log(`${artifact} value is ${artifactsObj[artifact]}`);
        }
    }
    catch{
        console.log("exception!");
    }
})();
