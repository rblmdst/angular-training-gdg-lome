/* primitifs */
let age: number = 10;
const nom: string = "Modeste";
const nullVar: null = null;
const unVar: undefined = undefined;

/* Non primitifs */
const list: string[] = [];
const list2: Array<number> = [0, 1];

const user: { nom: string; age: number; role: "admin" | "guest" } = {
  nom: "tetyetet",
  age: 12,
  role: "guest", // admin, guest
};

// const sum: (x: number, y: number) => number = (a: number, b: number) => a + b;

function sum(a: number, b: number) /* : (x: number, y: number) => number */ {
  return a + b;
}

sum(0, 1);
