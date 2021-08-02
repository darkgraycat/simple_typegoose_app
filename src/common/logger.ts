import chalk from 'chalk';

const log = (message: unknown): void => {
  console.log(chalk.bgBlackBright.magentaBright(message));
};

const error = (message: unknown): void => {
  console.error(chalk.bgBlackBright.red(message));
};

const warn = (message: unknown): void => {
  console.warn(chalk.bgBlackBright.yellow(message));
};

const info = (message: unknown): void => {
  console.info(chalk.bgBlackBright.blueBright(message));
};

export default { log, error, warn, info };
