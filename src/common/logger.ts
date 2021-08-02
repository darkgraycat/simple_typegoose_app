import chalk from 'chalk';

export default {
  log: (message: unknown): void => {
    console.log(chalk.bgBlackBright.magentaBright(message));
  },

  error: (message: unknown): void => {
    console.error(chalk.bgBlackBright.red(message));
  },

  warn: (message: unknown): void => {
    console.warn(chalk.bgBlackBright.yellow(message));
  },

  info: (message: unknown): void => {
    console.info(chalk.bgBlackBright.blueBright(message));
  },
};
