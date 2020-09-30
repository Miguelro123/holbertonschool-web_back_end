// Gets input from user and writes it to stdout
process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
// if stdout process in stream comes from the terminal, end process
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
