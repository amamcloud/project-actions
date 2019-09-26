import * as github from '@actions/github';

function noop() {
  console.log(`Do nothing on ${github.context.repo.owner}/${github.context.repo.repo}`)
}

export default noop;
