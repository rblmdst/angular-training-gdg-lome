# Introduction rapide au TypeScript

**TypeScript** = JavaScript + Types

![Typescript](https://rblmdst.github.io/angular-training-gdg-lome/assets/images/typescript.png)

- Installation du compilateur : `tsc`

```
npm init
# Global install
npm i -g typescript

# local install (need some edit to npm script)
npm i typescript
```

- Initialisation d'un projet TS

```
mkdir <project_folder>
cd <project_folder>
tsc --init
```

- compilation de fichier

```
touch file1.ts
tsc file1.ts [...file2.ts]
```

- Fichier de configuration : `tsconfig.json`
  L'essentiel du fichier de configuration: module, output, src, includes, etc.

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

[⬅️ retour](https://rblmdst.github.io/angular-training-gdg-lome/day-1)
