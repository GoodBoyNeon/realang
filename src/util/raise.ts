export const raise = (msg: string) => {
  console.error(msg);
  process.exit(1);
};
