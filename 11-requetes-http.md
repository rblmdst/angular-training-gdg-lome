# Réaliser des requêtes HTTT (HttpClient)

### Configuration de la fonctionnalité

```ts
// app config
import { provideHttpClient } from "@angular/common/http";
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // ....
  ],
};
```

### Injection et utilisation au niveau d'un service (ou d'un composant)

```ts
// in service
import { HttpClient } from "@angular/common/http";

class UserService {
  http = inject(HttpClient);

  getUsers() {
    return this.http.get("localhost:3000/users");
  }
}
```

### Mise en place du serveur de test

- Installation du module `json-server`

```bash

npm install -g json-server

touch db.json
json-server --watch db.json
```

- `db.json`

```json
{
  "users": [
    {
      "id": "a2bf",
      "name": "RakNj",
      "sex": "M"
    },
    {
      "id": "a2aa",
      "name": "AliK",
      "sex": "M"
    }
  ]
}
```

- Endpoints de test accessibles : `localhost:3000/users`

- Générer des UUID depuis le navigateur (ID des users au besoin):

```ts
crypto.randomUUID();
```

[⬅️ retour](https://rblmdst.github.io/angular-training-gdg-lome/day-6)
