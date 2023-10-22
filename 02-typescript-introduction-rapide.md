# Introduction rapide au TypeScript

TypeScript = JavaScript + Types

- Installation du compilateur : `tsc`

```
npm init
npm i typescript
```

- Initialisation d'un projet TS

```
tsc --init
```

- compilation de fichier

```
tsc file.ts [...file2.ts]
```

- Fichier de configuration : `tsconfig.json`
  l'essentiel du fichier de configuration: module, output, src, includes, etc.

- Déclaration de variable
  - type primitif (`string`, `boolean`, `entier`, `null`, `undefined`, `symbol`, `bigInt`)
  - inference
  - type non primitif (`array`, `object`, `function`, `record`)
- Interface
- Custom type (union | , intersection &, optional, omit, pick)

ex:

```js
class App {
	users = [
		{
			id: "e32ab"
			name: "Ali",
			roles: ["admin", "manager"], // admin, manager, guest
			active: true,
			sex: "M", // M, F, O
		}
	]

	// TODO : methods to implements
	// add user
	// delete user
	// find user by id
	// add role
	// disable user
	// add role
	// remove role
}
```
