/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
import { ErrnoException } from './models/setup/errno-exception';
import { NormalizePort } from './models/setup/normalize-port';
import { OnError } from './models/setup/on-error';

import app from './app';
import http from 'http';
import debugData from 'debug';
const debug = debugData('node-angular');
// const debug = require('debug')('node-angular');

const normalizePort: NormalizePort = (val: string) => {
  const port: number = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError: OnError = (error: ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening: () => void = () => {
  // const addr = server.address();
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  debug('Listening on ' + bind);
};

const port: string | number | boolean = normalizePort(process.env['PORT'] || '3000');

app.set('port', port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
