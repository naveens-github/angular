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

   
