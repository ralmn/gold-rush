let consoleLog = console.log.bind(console);

export default function log(...args) {
  consoleLog.call(null, new Date().toISOString(), " - ", ...args);
}
