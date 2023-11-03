# Routing

Le routage consiste à mapper un composant sur un chemin(URL) donné. Pour cela on définit des routes.

## Définition des routes

```ts
const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  { path: "second-component", component: SecondComponent },
  { path: "", redirectTo: "/first-component", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
```

## routerLink

- simple route
- dynamique route

## router-outlet

## Accès aux données de routing

### Via le service `ActivatedRoute`

`ActivatedRoute` est un objet utilitaire avec des propriétés et méthodes permettant d'accéder aux données/metadonnées sur la route active.

```ts
// Route Params : '/products/a2ed33' => productId === 'a2ed33'
// Query Params : '/products/a2ed33?lang=fr' => lang === 'fr'

{ path: "products/:productId", component: ProductDetailsComponent }

```

- **params**

```ts
route = inject(ActivatedRoute);
productId$ = this.route.params.pipe(map((params) => params["productId"]));
```

- **queryParams**

```ts
route = inject(ActivatedRoute);
id$ = this.route.queryParams.pipe(map((query) => data["search"]));
```

### Via les `@Input`s d'un compoant (**Angular V16+**)

```ts
// app configs
providers: [provideRouter(appRoutes, withComponentInputBinding())];
```

[⬅️ retour](https://rblmdst.github.io/angular-training-gdg-lome/day-5)
