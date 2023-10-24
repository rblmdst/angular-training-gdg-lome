type User = {
  id: string;
  name: string;
  roles: role[];
  active: boolean;
  sex: "M" | "F" | "O";
};
type role = "admin" | "manager" | "guest";

class App {
  private _users: Array<User> = [];

  get users() {
    return this._users;
  }

  // add user
  addUser(user: User) {
    this._users.push(user);
  }
  // TODO : methods to implements
  // delete user by Id
  // find user by id
  // add role
  // disable user
  // add role
  // remove role
}

const app = new App();

const user1: User = {
  id: "e32ab",
  name: "Ali",
  roles: ["admin", "manager"], // admin, manager, guest
  active: true,
  sex: "M", // M, F, O
};
const user2: User = {
  id: "e32fa",
  name: "Njarasoa",
  roles: ["admin"], // admin, manager, guest
  active: true,
  sex: "M",
};

app.addUser(user1);
app.addUser(user2);

console.log(app.users);
