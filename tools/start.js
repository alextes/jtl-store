import nodemon from 'nodemon';

/**
 * Runs the app in dev mode
 */
async function start() {
  nodemon({
    script: 'src/index.js',
    ext: 'js json',
    ignore: ['test/', 'tools/'],
    exec: 'babel-node',
    verbose: true,
  })
  .on('error', (error) => { console.error(error); })
  .on('exit', () => { process.exit(0); });
}

export default start;
