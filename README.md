# CST391-Activity 3 Part 1

### Angular CLI was used to generate starter app and then generate 2 components: shopComponent and infoComponent.

Bootstrap class="container text-center" was used in the app.component.html for a responsive view:

Large screen
![Large Grid](/newsimpleapp/screenshots/Large_Screen.png)

Small (mobile) screen
![Small Grid](/newsimpleapp/screenshots/Small_screen.png)

Default page before the user enters their name
![Default](/newsimpleapp/screenshots/default.png)

View after user enters their name along with console to show that all buttons are working
![Entered Info](/newsimpleapp/screenshots/Entered_info.png)


## Research questions
#### 1.	Describe @Input decorator used in info.component.ts
This @Input decorator tells this infoComponent that it needs to get the value of 'name' from the parent (shopComponent).  The shopComponent assigns that value from the form submission in shop.component.html.  In the infoComponent view, the *ngIf is used to only display the label and app-info if the answer to the form does not equal 'unknown' as it does at the initial load time.

```
<label *ngIf="answer != 'unknown'">Your name is {{ answer }}</label>
<app-info [name]="answer" *ngIf="answer != 'unknown'" (resetClicked)="resetAnswer()"></app-info>
```

The answer/'name' is reset to the value of 'unknown' (my addition to the code) in the app-info tag by calling resetAnswer() method when the resetClicked emitter is activated in the infoComponent and received by the shopComponent.

I added this method listed below to clear the value of the form and reset the answer to 'unknown' in the shop.component.ts.  That is called when the Reset button is clicked in the infoComponent view.  
```
// This method resets the answer property to 'unknown' and clears the form control
  resetAnswer() {
    this.answer = 'unknown';
    this.appForm.get('answer')?.setValue(''); // Clear the form control
  }
```
This works by adding the following to the info.component.ts to tell it to talk back to it's parent shopComponent:
```
@Output() resetClicked = new EventEmitter<void>();
```
Then actually emit using the method to the newInfo() method:
```
this.resetClicked.emit(); // emit the event to the parent
```

#### 2.	Describe [value] used in info.component.html
This is used in the option element inside the select element.  The select element creates a dropdown feature with the class "form-control" which is a Bootstrap class.  This [value] is used to get the current 'product' that is showing in the dropdown.  When the form is submitted, this current 'product' will be the one that is assigned to the 'selectedProduct'.

#### 3.	Describe [(ngModel)] also used in info.component.html
This is used to establish a "2-way data binding" according to the activity instructions.  It binds the selected value of 'product' to the 'selectedProduct' property.

<br>
<br>

# Generic Angular generated stuffs below

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
