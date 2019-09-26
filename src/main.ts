import * as core from '@actions/core';
import dispatch from './dispatch';

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
