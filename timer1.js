const args = process.argv;
let inputs = args.slice(2);
for (let time of inputs) {
  time = Number(time);
  if (typeof(time) === 'number' && time >= 0) {
    setTimeout(() => process.stdout.write('.'), time*1000);
  }
}