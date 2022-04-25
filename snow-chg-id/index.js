

const core = require('@actions/core');
const github = require('@actions/github');

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
    console.log("instantiating github object")
    const octokit = new GitHub(gitHubToken);
    console.log("pr labels");
    const getPrLabels = async (prNumber) => {
      const { data } = await octokit.pulls.get({
        pull_number: prNumber,
        owner,
        repo,
      });
      if (data.length === 0) {
        throw new Error(`No Pull Requests found for ${prNumber} (${ref}).`);
      }
      return data.labels.map((label) => label.name);
    };

    const prLabels = await getPrLabels(prNumber);
    core.debug(`Found PR labels: ${prLabels.toString()}`);

} catch {
    console.log("Error!")
}})();
