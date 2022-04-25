

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
    console.log("setting up vars");
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;
    const ref = github.context.ref;
    const prNumber = github.context.issue.number || getPullRequestNumber(ref);
    const gitHubToken = core.getInput('github-token', { required: true });
    console.log(`pr number: ${prNumber}`);
    console.log(`owner: ${owner}`);
    console.log(`repo ${repo}`)
    const octokit = new Octokit(gitHubToken);
    console.log("pr labels");
 
    const getPrLabels = async (prNumber, repo, owner) => {
         
        const { data: pullRequest } = await octokit.pulls.get({
        pull_number: prNumber,
        repo: repo,
        owner: owner,
      });
      console.log("getting entry point");
      if (data.length === 0) {
        console.log("no data returned");
      }
      return data.labels.map((label) => label.name);
    };
    console.log("getting labels");
    const prLabels = await getPrLabels(prNumber, repo, owner);
    console.log("got data");
    core.debug(`Found PR labels: ${prLabels.toString()}`);

} catch {
    console.log("Error!")
}})();
