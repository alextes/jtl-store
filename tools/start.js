import nodemon from 'nodemon';

/**
 * Runs the app in dev mode
 */
async function start() {
  nodemon({
    script:  'src/index.js',
    ext:     'js json',
    ignore:  ['test/', 'tools/'],
    exec:    'babel-node',
    verbose: true,
  });
  process.once('SIGINT', () => {
    nodemon.once('exit', () => {
      process.exit();
    });
  });
}

export default start;
