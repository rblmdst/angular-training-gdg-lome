const rxjs = require("rxjs");
// const { of } = require("rxjs/operators");
const { Observable, of, from, interval, map, filter } = rxjs;
/* const source1 = new Observable((observer) => {
  observer.next(10);
  setTimeout(() => {
    // observer.error(new Error("Unexpected error!!!"));
    observer.next(20);
    observer.complete();
  }, 2000);
}); */
const source1 = of(0, 5, 2);
const source2 = from([34, 16, 20]);
const source3 = interval(2000); // --0--1-|-2--4--
const source4 = interval(1000); // --0--1-|-2--4--

/* const subs = source3.subscribe({
  next: (data) => {
    console.log("Data1: ", data);
  },
  error: (err) => {
    console.error("#Err1#", err);
  },
  complete: () => {
    console.log("Completed1");
  },
});

setTimeout(() => {
  subs.unsubscribe();
}, 5000); */

// console.clear();
// 0, 5, 2 ==> 0, 10, 4
// map
/* source1.pipe(map((data) => data * 2)).subscribe((val) => {
  console.log("value ", val);
}); */

// 0, 5, 2 ==> 5
/* source1.pipe(filter((data) => data % 2 !== 0)).subscribe((val) => {
  console.log("value ", val);
}); */

// 0, 5, 2 ==> 5
/* source1.pipe(rxjs.first((val) => val < 4 && val > 0)).subscribe((val) => {
  console.log("value ", val);
}); */

/* source1.pipe(rxjs.take(2)).subscribe((val) => {
  console.log("value ", val);
}); */

/* source1
  .pipe(
    rxjs.tap((data) => {
      console.log("Log", data);
      return 0;
    })
  )
  .subscribe((val) => {
    console.log("value ", val);
  }); */

// of(0, 5, 2);
// ([34, 16, 20]);

/* source4
  .pipe(
    map((data) => data * 2),
    filter((data) => data % 4 === 0)
  )
  .subscribe((val) => {
    console.log("val", val);
  }); */
source4.pipe(rxjs.switchMap((data) => source1)).subscribe((val) => {
  console.log("val");
  console.log(val);
});
