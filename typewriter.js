const sentence = "hello there from lighthouse labs";
let count = 1;

for(const char of sentence){
  setTimeout(() => {process.stdout.write(`${char}`)}, 50 * count);
  count++;
}
setTimeout(() => {console.log()}, 50 * count);