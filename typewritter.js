const sentence = "hello there from lighthouse labs";
timer = 1000;

for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index])
  }, timer += 50)
};

setTimeout(() => {
  console.log()
}, timer)


// <= 1s delay to make it noticeable. Can dial it down later.