const core = require('@actions/core');
require('dotenv').config();
import { Octokit } from '@octokit/rest';

(async () => {

    try {
        var cloudInput = core.getInput('cloud');
        var eventBefore = core.getInput('event_before');
        var eventAfter = core.getInput('event_after');

        console.log(`eventBefore: ${eventBefore}`);
        console.log(`eventAfter: ${eventAfter}`);

        const octokit = new Octokit({
            auth: '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'
          });

    //    var commits = List;

        var response = await octokit.rest.repos.compareCommits({
            owner: "chris-david-taylor", 
            repo: "action-demo", 
            base: eventBefore,
            head: eventAfter 
          });

        console.log ("got thus far");  
        console.log(`response is : ${JSON.stringify(response)}`); 

        //Console.WriteLine($"There are {response.TotalCommits} between these two refs\n");
        
      //  foreach ( c in response.Commits)
 //       {
//var detailedCommit = await client.Repository.Commit.Get("chris-david-taylor", "hello-action", c.Sha);
 //           commits.Add(detailedCommit);
 //       }
      /*  
        foreach (var c in commits)
        {
            Console.WriteLine($"Found commit {c.Sha} - {c.Commit.Message}");
            foreach (var f in c.Files)
            {
                Console.WriteLine($" - {f.Filename}");
            }
            Console.WriteLine();
        }
*/

    } catch {
        console.log("exception!");
    }
})();