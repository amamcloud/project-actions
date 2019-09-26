import * as core from '@actions/core';
import dispatch from './dispatch';

declare var navigator: { userAgent: string };

if (!navigator) {
  eval("something = { userAgent: 'AmAmCloud Github Actions' };");
}

async function run() {
  try {
    const command = core.getInput('command');

    console.log(`Received ${command} ...`);

    dispatch(command);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
