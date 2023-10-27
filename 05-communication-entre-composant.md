# Communication entre composants

## Data Binding (rappel)

<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/databinding.png">
<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/component-databinding.png">

```ts
@Component({
  selector: "app-root",
  templateUrl: `<input [type]="inputType" (input)="onInputChanged()" />`,
})
class AppComponent {
  inputType: "password" | "text" = "password";

  onInputChanged() {}
}
```

## Parent-Child components

<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/component-tree.png">

## Parent-Child components communication : Unidirectionnal

- Parent -> Child : Property Binding

<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/input.svg" width="400" style="background-color:silver;">

- Child -> Parent : Event Binding

<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/output.svg" width="400" style="background-color:silver;">

- Parent-Child communication (summary)

<img src="https://rblmdst.github.io/angular-training-gdg-lome/assets/images/parent-child-binding.png" >

## Smart-Dumb Components

[⬅️ retour](https://rblmdst.github.io/angular-training-gdg-lome/day-3)
