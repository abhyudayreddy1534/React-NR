<!-- use
# for heading
> and >>>> for tabbed item desc
``` code ``` for code box
- for line item
any html tag for formatting text content like header, para etc... -->

# EP 01: 27/Nov/23

#### React Basics

- React can be written without `.jsx` . JSX is way to write react components in a earier manner. JSX removes the necessity of `React.createElement` etc...
- `React.createElement()` React returns an object not a html component, the object contain the object map data like <u>Tag, Properties and children (information about the tag) </u>.
- once the `root` element is rendered then it will REPLACE the entore root, it will never append in the same tag.
- Parcel is the bundler: used behind the scenes of CREATE REACT_APP
- `npm` is not abbriviation for Node Package Manager, npm is a pckage manager and it handles all the packages
- `npx` is a package execution command. npm and npx are different.
- <i>why not use CDN links in `index.html` to link react to our project</i> : links are not a good way as they are network calls, we need something locally. with Parcel, we have `node_modules` embedded in the project which can be run with `install` command.
- `package.json` is the config file for npm.

#### Two types of Dependecies in React

> Dev. dependency : <i>Its generally required when in Dev env</i><br><br>
> Normal dependency: <i> It's like normal, can be used for prod as well.</i>

##### ^ and ~ difference

`^1.1.1` => install minor version when update available like: 1.1.3, 1.1.4 etc..
`~1.1.1` => install major version when update available 2.0.0 etc..

#### Parcel and its super powers

- Refreshes app after file save: works as `HMR (Hot Module Replace)` HMR works as Parcel has a file watching algo written in C++.
- Create a local server
- Faster builds as it uses cache mechanism
- Image optimisation
- File minification
- Bundling the code
- Compress the files
- Consists hashing algos
- Code splitting
- `Differential building`: means building the app in different browsers and providing compatibility with minimalistic changes and by default.
- Diagnostics as provide what to for the error resolving.
- Good error handling and suggestions to fix
- `Tree shaking` remove unused code from the files as part of minification

# EP 02 & 03: 29/Nov/23

`npm` generates `app.js` in dev `packges.json` to generate the prod build need to remove that line as it conflicts with `index.html`

> Dev: `npx parcel index.html` <br>
> Prod: `npx parcel build index.html`

- add start and build commnds in `scripts` key in `packages.json`.
- `npm run start` can be excuted as `npm start` also
- rest of the commands should be expectued as `npm run ***`

#### JSX

- `JSX` is not `html` in `JS` file, `JSX` is a `html/xml` like syntax.
- Never using `React.createElement()` from now on, as we have a simpler one in `JSX`
- JS engine doesn't understand JSX code, parcel <i>transpile (convert it to a form which JS engine understand, babel does the job, its a package dependency in parcel bundle)</i> the jsx code before it reaches JS engine, then it executes
- JSR attributes should be given with `camelCase`

### React Components

its a plain javascript function, we commonly use arrow functions here. name it with a <b><u>Title case</u></b> to avoid errors. This element just returns a JSX.

```
<!-- React Element -->
const val = (
    <h1 className="head">
        Header here
    </h1>
);

<!-- React Functional component -->
const Val = () => (
    <h1 className="head">
        Header here
    </h1>
);
```

React functional components should be renders using TAG syntax, React element will be rendered with object name.

```
<!-- Rendering element -->
root.render(val);

<!-- Rendering a component -->
root.render(<Val />);
```

#### Class based components -> old way, nobody uses now

<br>

`code`

#### Functional components -> New way

<br>

```
<!-- functional component -->
const HeadingComponent = () => {
    return "<h1>header here</h1>"
}
```

Example: if only 1 return element is there

```
<!-- functional component -->
const Val = () => {
    return true;
}
```

is exactly same as below only when 1 parameter present

```
<!-- functional component -->
const Val = () => true
```

- Component composition: means writing a component in another component.
- javascript code can be added inside JSX using `{}` add code between curly braces
- We can mix n match any component. react element can be added in functional component and plain html and vice-versa.
- JSX will provide cross site scrpting safety, it will sanitize the JS data. XSS safe, is automatically taken care by React.
- calling a javascript like `{Title()}` or `<Title />` or `<Title></Title>` are same while executing.

# Ep 04: 01/Dec/2023

- can pass arguments to a component using props and can be access like `props.name` etc...

```
<RestaurantCard
          name="Pista House"
          cuisine="Biryani, North Indian"
          rating="4.4"
          eta="32"
          image={pistahouseLogo}
        />
```

```
const RestaurantCard = (props) => { }
  /**
   * can try destructuring like this too
   * const {name, cuisine} = props
   * to avoid using props.name
   *
   * or props param can be replaced with {name, cuine} for on the fly destructuring as well.
   */
```

- whenever using array.map() please assign a unique to key parameter. never use index as a key as the order might change. React doesn;t recommend putting index as key. using KEY is must considering rendering and memory optimising.
-

# EP 05: 04/Dec/23 React Hooks

- read about the file structure in react documentstion "React file structure". as React doesn;t have any specific structure. Its based on individual or project req's.
- follow a single process, either go by components specific or feature or type specdific.
  > Two types of import
  >
  > > `import Component from "Path"` </br> >> `import {export constant} from "path"`

> Two types of export
>
> > `export default const_name` //when one variable </br> >> `export const = ""` when multi //called named export

- React hook is a normal JS function which is given by React from FB developers inside React.
- `useState()` --> super powerful state variables.
- `userEffect()`
- Whenever a state variable updates REACT re-renders the comonent.
- React used reconciliation algorthm (React Fiber)
- Once the component is rendered, React will create the Virtual DOM (which is a representation of actual DOM). ex: <Component /> is the virutal DOM bcz its not an actual HTML, its a React Object.
- <b>Diff algorithm:</b> it finds the difference between old virtual dom and new virtual dom, it will calculate the diffrence and update the component to re-render.
- <b>React Fibre (released in React v16.0):</b> its the way of finding the difference and updating the component.
- To read more about React Fiber: refer to (https://github.com/acdlite/react-fiber-architecture)
- Why React is fast ----> bcz its doing efficient DOM manipulation, it does incremental rendering (update the frame in small chunks with multiple frames), React can efficiently finds out the diff between virtual DOM and update the components. [UI layer and Data layer will be kept in sync].

# Ep 06: 05/Dec/23 Arcitecture

- Monolith Architecture: Everything at one place (UI, API, Services, DB all in one place)
- Micro service architecture: breaking every item into smallest possible services, all together combined will become a bigger app. small small chunks put together to make it bigger.
- work with separation of concern and single responsibilities.

##### useEffect

- useEffect(arg1 <arrow function>, arg2 <display object>)
- Conditional rendering: render content according to condition is called conditional rendering
- whenver React state variable changes, the React will re-renderthe component.

# Ep 07: 06/Dec/23 Routing and hooks deep dive

- useEffect will call everytime the component re-rendered when the dependency array is not present.
- Never define your useState hooks outside the component, thats the reason they are called local state variables.
- Never create a useState() inside an IF_ELSE or LOOPS or FUNCTIONS as it will create inconsistencies.
- \***\*\*\*\*\***\*\*\***\*\*\*\*\*** <b>To avoid using CORS extention try giving https://corsproxy.io/? as prefix toyour API URL. </b> \***\*\*\*\*\***\*\*\***\*\*\*\*\***

```
useEffect(() => {//Call back function with out dependency array})

useEffect(() => {//Call back function with empty dependency array will called only once at the start render}, [])

useEffect(() => {//Call back function with a dependency array will called whenever the btnReact state updated}, [btnReact])
```

#### React Router

- https://reactrouter.com/en/main site install it `npm install react-router-dom`
- Rounting example syntax:

```
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Router creation
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/about", element: <About />, childeren: [//children will be added to the same above//]},
]);

```

- For error related details of routing

```
import { useRouteError } from "react-router-dom";
<!-- inside the component to know the issue -->
const error = useRouteError();
```

- Types of Routing in web apps
  > Client side rounting: what react does like, single page apps. </br>
  > Server side routing: API call sends which page to transition to. etc...

# EP08: 08/Dec/23

```
//Class based component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name : {this.props.name}</h2>
        <h3>Location : {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
```

- never update state variable in class based components directly, it won't work and triggers inconsistencies
- componentDidMount() method is called from this, as all the components are rendered.
- first Parent constructor, Parent render, child1 constructor, child1 render, child2 constructor, child2 render, child 1 component mount, child2 component, parent mount.... in the order.
- React is fast: it has 2 phases
  > Render phase
  > commit phase
