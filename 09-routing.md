# Routing

Le routage consiste à mapper un composant sur un chemin(URL) donné. Pour cela on définit des routes.

### Définition des routes

```ts
const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  { path: "second-component", component: SecondComponent },
  { path: "", redirectTo: "/first-component", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
```

### routerLink

- simple route
- dynamique route

### router-outlet

### Accès aux données de routing depuis un compoant

providers: [
provideRouter(appRoutes, withComponentInputBinding()),
]

[⬅️ retour](https://rblmdst.github.io/angular-training-gdg-lome/day-5)
