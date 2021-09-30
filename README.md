Sharpening my react skills with tutorials. Always learning! Yay!


# General Notes: 
Components can be classes, or functions with hooks

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

  There are a couple of differences between HTML and JSX. One of them is using **className** within JSX, instead of **class**. It will render, but you will get a warning. 

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

## Props:

**Props** are properties that you can pass into a component from the outside. Wherever you want to place the prop, go to that file and use curly braces { } to add an expression, and the way you access props in **class based components** is with {this.props.}
```javascript
App.js
class App extends Component {
  render() {
    return (
      <Navbar title='Github Finder' icon='fab fa-github' /> 
    );
  } 
}
```
```javascript
Navbar.js
export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
      <i className={this.props.icon}></i>{this.props.title}
        </h1>
      </nav>
    )
  }
}
```
*or you can use **defaultProps** within that file.*
```javascript
App.js
class App extends Component {
  render() {
    return (
      <Navbar /> 
    );
  } 
}
```
```javascript
Navbar.js
export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
      <i className={this.props.icon}></i>{this.props.title}
        </h1>
      </nav>
    )
  }
}
```
**Prop Types**
Prop types are basically a type checking to tell you your prop should be a string or number or array or object etc. Helps to make sure the props are the correct data type. Use them! Similar to Typescript. 

```javascript
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
```
## State:

**Component Level State** component level state means that state is contained within a single component. 





