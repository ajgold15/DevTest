const { of, pipe, timer } = require("rxjs");
const { map, filter, tap, switchMap } = require("rxjs/operators");

// - Pipe operators (map, tap, switchMap)
// map & tap usage
source = of(1, 2, 3, 4, 5)
source.pipe(
  tap(console.log(`Performing square of numbers`)),
  map(x => x * x), // square of the input numbers.
  tap(console.log(`Squares of numbers are: `))
).subscribe(x => console.log(x))

// switchMap & tap usage
source.pipe(
  tap(console.log(`Calculating squares, cubes of numbers`)),
  switchMap(x => of(x**2, x**3)),
  tap(console.log(`Printing output:`))
).subscribe(x => console.log(x))


// - what will be logged to the console

of('Hello').pipe(
  map(x => `${x} World`),
  map(x => `${x} of`),
  map(x => `${x} RxJS`),
).subscribe(x => {
  console.log(x);
})
// answer - Hello World of RxJS

// - What will be logged to the console 
of(1, 2, 3).pipe(
  map(x => x + 1),
  filter(x => x > 2)
).subscribe(x => {
  console.log(x);
})
// answer - 3, 4

// - Subscription sequence 
let source2 = of('a', 'b', 'c', 'd', 'e', 'f')

let subscription1 = of('a', 'b', 'c', 'd', 'e', 'f').subscribe(x => console.log(`small letter: ${x}`))
let subscription2 = of('a', 'b', 'c', 'd', 'e', 'f').subscribe(x => console.log(`capital letter: ${x.toUpperCase()}`))
subscription1.add(subscription2)


