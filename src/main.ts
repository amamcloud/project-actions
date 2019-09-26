import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const command = core.getInput('command');

    console.log(github.context.payload);

    console.log(`Received ${command} ...`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
