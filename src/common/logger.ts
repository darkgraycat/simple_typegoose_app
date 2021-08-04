import chalk from 'chalk';

const log = (message: unknown): void => {
  console.log(chalk.magentaBright(message));
};

const error = (message: unknown): void => {
  console.error(chalk.red(message));
};

const warn = (message: unknown): void => {
  console.warn(chalk.yellow(message));
};

const info = (message: unknown): void => {
  console.info(chalk.blueBright(message));
};

export default { log, error, warn, info };
