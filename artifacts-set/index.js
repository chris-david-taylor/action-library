const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        const cloud = core.getInput('cloud');
        const environment = core.getInput('environment');
        const artifacts = core.getInput('artifacts');

        console.log(`cloud: ${cloud}`);
        console.log(`environment: ${environment}`);
        console.log(`artifacts: ${artifacts}`);
    }
    catch{
        console.log("exception!");
    }
})();
