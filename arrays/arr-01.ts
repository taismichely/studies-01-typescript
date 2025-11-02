const fruit = ["banana", "maçã", "limão", "laranja"];
const numbers = [10, 20, 30, 40, 50];

function morethan10(data: number[]) {
  return data.filter((n) => n > 10);
}

morethan10(numbers);
