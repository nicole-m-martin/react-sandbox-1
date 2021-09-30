Sharpening my react skills with tutorials. Always learning! Yay!


# General Notes: 
Components can be classes, functions with hooks

A class component can have State and it used to be functional components could not, but with the addition of Hooks, they allow us to have state with functional components.

## Class Components:
  You can not return directly from a class. We need a method (a function within a class) That method is called **render**. 
  
  Render is a **Lifecycle Method** 
  (it runs at a certain point when the components are loaded)
  
  ```javascript
  class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Class Component</h1>
      </div>
    );
  } 
}
```
`<inline-code>`



