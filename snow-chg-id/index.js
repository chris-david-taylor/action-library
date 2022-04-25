

const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const getPullRequestNumber = (ref) => {
  core.debug(`Parsing ref: ${ref}`);
  const prNumber = ref.replace(/refs\/pull\/(\d+)\/merge/, '$1');
  return parseInt(prNumber, 10);
};

(async () => {
  try {
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;
    const ref = github.context.ref;
    const prNumber = github.context.issue.number || getPullRequestNumber(ref);
    const gitHubToken = core.getInput('github-token', { required: true });
    const octokit = github.getOctokit(gitHubToken);
   
    const { data } = await octokit.rest.pulls.get({
        pull_number: prNumber,
        repo: repo,
        owner: owner,
      })

    labels = data.labels.map((label) => label.name)
    console.log(`Found PR labels: ${labels.toString()}`);

    var chg_id;
    
    for( var label of labels) {
        if (label.includes("CHG")) {
            chg_id = label;
            break;
        }
    }
    core.setOutput("chg_number", chg_id);


} catch {
    console.log("Error!")
}})();
