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
## JSX:
  **Javascript Syntax Extension**
  Basically syntactic sugar to be able to write the output of our component in an XML or HTML like way. Under the hood its actually JS. You don't need to use JSX but it will save time and code to use JSX for your output.

  There are a couple of differences between HTML and JSX. One of them is using **className** within JSX, instead of class. It will render, but you will get a warning. 

  for attributes, you will use **htmlFor** with JSX. 
  ```javascript
  <div className='App'>
    <label htmlFor='name'>Name</label>
  </div>
  ``` 

JSX expressions must have one parent element.
Can use a **fragment** instead of a div. <Fragment> </Fragment>

Add expressions and conditionals in JSX inside of { }.
```javascript
class App extends Component {
  render() {
    const name = 'Lara Croft';

    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()}</h1>
      </div>
    );
  } 
}
```
this returns Hello LARA CROFT in browser



