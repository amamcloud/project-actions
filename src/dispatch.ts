import commands from './commands';

function dispatch(command: string) {
  const handler = commands[command] || commands['noop'];

  handler();
}

export default dispatch;
