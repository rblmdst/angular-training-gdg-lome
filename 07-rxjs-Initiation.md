# Initiation à la Programmation Réactive avec RxJs

La programmation réactive est un paradigme dans lequel le flux d'exécution d'un programme est basé sur des **flux de données** appelés "streams".

**Un flux de données** représente une émission de données dans le temps.

## Concepts Clés

La programmation réactive repose sur deux concepts clés : l'observable(**Observable**), l'observateur(**Observer**) et l'abonnement(**Souscription**).

- **Un observable** (Observable),est une source de données qui émet des valeurs dans le temps.
- **Un observateur** (Observer) est une entité qui souscrit à une source de données pour être informée des émissions de valeurs de cette source. Dans la pratique, il s'agit d'un objet doté des attributs `next`, `error`, et `complete`, qui font référence à des rappels(_callbacks_) à appeler respectivement lors de l'émission d'une valeur, lorsqu'une erreur survient, et lorsque l'émission se termine.
- Lorsqu'un observateur souscrit à un flux, cela crée ce que l'on appelle **une souscription**.

## RxJS

La librairie RxJs (**R**eactive E**x**tensions for **JavaScript**) fournit un ensemble d'utilitaires pour la programmation réactive.

### Émission

Un flux peut émettre des données, et en cas d'erreur, l'émission de valeurs s'arrête. Si aucune action n'est entreprise, le flux est donc coupé ou détruit.
Lorsqu'il n'y a plus de données à émettre, le flux se complète, et les souscriptions s'arrêtent.

<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/marble-diagram-anatomy.svg" width="640">

Image Source : https://rxjs.dev/guide/operators

### Notion d'opérateur

On peut modifier les valeurs émises par un flux en utilisant des opérateurs. Il existe une multitude d'opérateurs en fonction des besoins (création, projection, combinaison, high order, etc.).

### Création et souscription à un flux

- Créer manuellement un flux (next, complete, error).
- Souscrire ou se désabonner d'un flux.
- Utiliser des opérateurs pour créer un flux (exemples : `of`, `interval`, etc.).
  Exemples :
  - `of(10)`
  - `of(10, 13, 25)`
  - `from([10, 13, 25])`

### Quelques opérateurs courants

- `map`
- `filter`
- `first`
- `take`
- `tap`
- `merge`
- `concat`
- etc.

### Combinaison d'opérateurs

On peut également combiner plusieurs opérateurs en utilisant la technique du "piping" :

```js
obs.pipe(op1(), op2(), op3(), op4());
```
