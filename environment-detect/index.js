const core = require('@actions/core');
const github = require('@actions/github');

(async () => {

    try {
        var cloudInput = core.getInput('cloud');
        var eventBefore = core.getInput('event_before');
        var eventAfter = core.getInput('event_after');

        console.log(`eventBefore: ${eventBefore}`);
        console.log(`eventAfter: ${eventAfter}`);

    } catch {
        console.log("exception!");
    }
})();