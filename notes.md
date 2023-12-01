<!-- use 
# for heading
> and >>>> for tabbed item desc
``` code ``` for code box
- for line item
any html tag for formatting text content like header, para etc... -->
# EP 01: 27/Nov/23
#### React Basics
- React can be written without ```.jsx``` . JSX is way to write react components in a earier manner. JSX removes the necessity of ```React.createElement``` etc...
- ```React.createElement()```  React returns an object not a html component, the object contain the object map data like <u>Tag, Properties and children (information about the tag) </u>.
- once the ```root``` element is rendered then it will REPLACE the entore root, it will never append in the same tag.
- Parcel is the bundler: used behind the scenes of CREATE REACT_APP
- ```npm``` is not  abbriviation for Node Package Manager, npm is a pckage manager and it handles all the packages
- ```npx``` is a package execution command. npm and npx are different.
- <i>why not use CDN links in ```index.html``` to link react to our project</i> : links are not a good way as they are network calls, we need something locally. with Parcel, we have ```node_modules``` embedded in the project which can be run with ```install``` command.
- ```package.json``` is the config file for npm.
#### Two types of Dependecies in React
>Dev. dependency : <i>Its generally required when in Dev env</i><br><br>
>Normal dependency: <i> It's like normal, can be used for prod as well.</i>

##### ^ and ~ difference
```^1.1.1``` => install minor version when update available like: 1.1.3, 1.1.4 etc..
```~1.1.1``` => install major version when update available 2.0.0 etc..

#### Parcel and its super powers
- Refreshes app after file save: works as ```HMR (Hot Module Replace)``` HMR works as Parcel has a file watching algo written in C++.
- Create a local server
- Faster builds as it uses cache mechanism
- Image optimisation
- File minification
- Bundling the code
- Compress the files
- Consists hashing algos
- Code splitting
- ```Differential building```: means building the app in different browsers and providing compatibility with minimalistic changes and by default.
- Diagnostics as provide what to for the error resolving.
- Good error handling and suggestions to fix
- ```Tree shaking``` remove unused code from the files as part of minification

# EP 02 & 03: 29/Nov/23

```npm``` generates ```app.js``` in dev ```packges.json``` to generate the prod build need to remove that line as it conflicts with ```index.html```
> Dev: ```npx parcel index.html``` <br>
> Prod: ```npx parcel build index.html```

- add start and build commnds in ```scripts``` key in ```packages.json```. 
- ```npm run start``` can be excuted as ```npm start``` also
- rest of the commands should be expectued as ```npm run ***```

#### JSX 

- ```JSX``` is not ```html``` in ```JS``` file, ```JSX``` is a ```html/xml``` like syntax.
- Never using ```React.createElement()``` from now on, as we have a simpler one in ```JSX```
- JS engine doesn't understand JSX code, parcel <i>transpile (convert it to a form which JS engine understand, babel does the job, its a package dependency in parcel bundle)</i> the jsx code before it reaches JS engine, then it executes
- JSR attributes should be given with ```camelCase```

### React Components
its a plain javascript function, we commonly use arrow functions here. name it with a <b><u>Title case</u></b> to avoid errors. This element just returns a JSX.

~~~
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
~~~

React functional components should be renders using TAG syntax, React element will be rendered with object name.

```
<!-- Rendering element -->
root.render(val);

<!-- Rendering a component -->
root.render(<Val />);
```

#### Class based components -> old way, nobody uses now
<br>

```code```

#### Functional components -> New way 
<br>

```
<!-- functional component -->
const HeadingComponent = () => {
    return "<h1>header here</h1>"
}
```
Example: if only 1 return element is there
~~~
<!-- functional component -->
const Val = () => {
    return true;
}
~~~
is exactly same as below only when 1 parameter present
~~~
<!-- functional component -->
const Val = () => true
~~~

- Component composition: means writing a component in another component.
- javascript code can be added inside JSX using ```{}``` add code between curly braces
- We can mix n match any component. react element can be added in functional component and plain html and vice-versa. 
- JSX will provide cross site scrpting safety, it will sanitize the JS data. XSS safe, is automatically taken care by React.

