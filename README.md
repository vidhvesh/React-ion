# React-ion

## How to push your files from LOCAL to REMOTE ?
```bash
git init   //initializes an empty git repository
git branch -m main  //creates "main" as the main branch
git add .  //this adds all the files present in our project folder
git commit -m "commit_name"  //commits these files
git remote add origin url_of_remote_repo  //creates a connection between the local and the remote repo for pushing the files
git push origin main  //pushes the code/files to the remote repo/ github repo we call.
//(tip: **git push -u origin main**)
//Here '-u' helps you later to push the files easily without mentioning the main everytime.
```
**Important:** Always run `npm install` before starting the server.

**Note:** npm doesnot stand for node package manager but it manages packages..
## What makes our app fast ?
- As we all now, we say it React!! But no, it doesn't solely make it faster.
- there are lot of things that PARCEL(one of the type of bundler) is contributing for this fast appl experience. i.e, Bundler is the key player..
- It can do many things like HMR(Hot Module Replacement), caching, consistent hashing, differential bundling, tree shaking and a lot more...
- Are you excited, visit [Parcel documentation](https://parceljs.org/)

- React.createElement (creates a)---->React Element(JS Object)    (renders it into)----->HTML Element.
- But using the core React is a bit lengthy and inefficient. So facebook developers introduced JSX.
- **JSX is not html written in JS... It is html like syntax**
- JSX ---->React.createElement (creates a)---->React Element(JS Object)    (renders it into)----->HTML Element.  So, both the JSX and React ode functionality is the same.


- Here JSX or the code written by us is not understandable by the JS Engine. What will happen then? How does it understand? and the answer is **BABEL**
### BABEL (a package managed by Parcel)
- Babel is a JavaScript Compiler, many also call it as "Transpiler".
- It transpiles the JSX code into JS Engine understandable code.

- config driven ui
- wherever we use .map or looping we should use key.
