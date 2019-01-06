const square = n => n * n;

function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

class Foo {
  method() {}
}

console.log(addAll(1, 2, 3, 5));
