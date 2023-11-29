<!-- use 
# for heading
> and >>>> for tabbed item desc
``` code ``` for code box
- for line item
any html tag for formatting text content like header, para etc... -->
# EP 01: 27/Nov/23
#### React Basics
- ```React.createElement()```  React returns an object not a html component, the object contain the object map data like <u>Tag, Properties and information about the tag</u>.
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

