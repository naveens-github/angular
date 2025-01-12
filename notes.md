# How to create a angular project
1. Install node.js
2. Install Angular-CLI
3. Command: ng new angular-course
4. Then do npm install to download all the required dependencies.
5. Then do npm start

#### What is the {{ }} syntax called in Angular?
    1. The {{ }} syntax in Angular is called "Interpolation"
    2. Interpolation is a technique used in Angular to dynamically bind data from the component's TypeScript file to the template (HTML).
    3. The double curly braces ({{ }}) allow you to embed expressions or variables into the HTML.
    
In the component's TypeScript file:
```
export class AppComponent {
  title = 'Angular Project';
}
```
In the template (HTML):
```
<h1>Welcome to {{ title }}</h1>
```

#### What is the [] syntax in Angular called, and how is it used?
    1. The [] syntax in Angular is called "Property Binding". Property Binding allows you to set the value of an element's property dynamically.

In the component's TypeScript file:
```
export class AppComponent {
    title = 'Welcome to Angular';
}
```

In the template (HTML):
```
<input class="demo1" [value]="title">
```
If we want to pass a String instead of the dynamic value. We have to place that String in quotes. 
```
Ex: <input class="demo1" [value]="'Hello World'">
```

#### What is the purpose of the () syntax in Angular, and how is it used?
    In Angular, the () syntax is used for Event Binding. It binds an event (like click, keyup, etc.) from the template to a method or an expression in the component's TypeScript class.
    Event Binding listens to DOM events (e.g., click, keydown, keyup) and triggers the associated method in the component. It connects the view (HTML) with the logic (TypeScript) to handle user actions.

In the component's TypeScript file:
```
export class AppComponent {
  onInputChange(event: any) {
    console.log('Input value:', event.target.value);
  }
}
```

In the template (HTML):
```
<input (input)="onInputChange($event)" placeholder="Type something">
```


