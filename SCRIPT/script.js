// add up function
function addup(...args) {
  if (args.every(num => typeof num === 'number')) {
    let sum = args.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
  } else {
    console.log("Provide only numbers.❤️");
  }
}

addup(1, 2, 4, 8, 16, 32, 64, 128);
addup(5, 10, "Zukisa", "Proctor");