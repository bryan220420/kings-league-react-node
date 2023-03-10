import pc from "picocolors";
import symbol from "log-symbols";

export const logInfo = (...args) =>
  console.log(`${symbol.info} ${pc.blue(...args)}`);
export const logError = (...args) =>
  console.log(`${symbol.error} ${pc.red(...args)}`);
export const logSuccess = (...args) =>
  console.log(`${symbol.success} ${pc.green(...args)}`);
export const logWarning = (...args) =>
  console.log(`${symbol.warning} ${pc.yellow(...args)}`);
