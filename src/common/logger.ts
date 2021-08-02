import chalk from 'chalk';

const log = (message: unknown): void => {
  console.log(chalk.bgWhite.magentaBright(message));
};

const error = (message: unknown): void => {
  console.error(chalk.bgWhite.red(message));
};

const warn = (message: unknown): void => {
  console.warn(chalk.bgWhite.yellow(message));
};

const info = (message: unknown): void => {
  console.info(chalk.bgWhite.blueBright(message));
};

export default { log, error, warn, info };
