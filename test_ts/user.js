var App = /** @class */ (function () {
    function App() {
        this._users = [];
        // delete user
        // find user by id
        // add role
        // disable user
        // add role
        // remove role
    }
    Object.defineProperty(App.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    // TODO : methods to implements
    // add user
    App.prototype.addUser = function (user) {
        this._users.push(user);
    };
    return App;
}());
var app = new App();
var user1 = {
    id: "e32ab",
    name: "Ali",
    roles: ["admin", "manager"],
    active: true,
    sex: "M", // M, F, O
};
var user2 = {
    id: "e32fa",
    name: "Njarasoa",
    roles: ["admin"],
    active: true,
    sex: "M",
};
app.addUser(user1);
app.addUser(user2);
console.log(app.users);
