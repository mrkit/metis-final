const router = require('express').Router(),
      Octokit = require('@octokit/rest');
      

router.get('/test', (req, res, next) => {  
  const octokit = new Octokit({ auth: `token ${req.session.token}`});
  
  if(req.session && req.session.token){
    console.log('Success, token =', req.session.token);
  } else {
    console.log('You\'re not logged in')
  }
  
  octokit.activity.listEventsForUser({username:'mrkit'})
  .then(data => res.send(data))
  .catch(next);
  
  octokit.paginate('GET /repos/:owner/:repo/issues', { owner: 'octokit', repo: 'rest.js' }, response => response.data.map(issue => {
    console.log('What is the issue', issue);
    return issue;
  }))
  .then(issueTitles => {
    // issueTitles is now an array with the titles only
    console.log('Title', issueTitles);
  })
  
//  octokit.git.getCommit({owner, repo, commit_sha}).then(result => {
//    console.log('Results', owner, repo, commit_sha)
//  });

//  octokit.repos.listTopics({owner: 'mrkit', repo: 'temp2'}).then(result => {
//    console.log('TOPICS', result, raw_data);
//  }).catch(next);
});

module.exports = router;