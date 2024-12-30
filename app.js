/*
const heading = React.createElement(
    "h1",
    {id:"heading"}, 
    "Welcome greeting from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/* 
Now i want to create a nested div like shown below
<div id="parent">
    <div id="child1">
        <h1>This is nested</h1>
        <h2>This is 2nd line</h2>
    </div>

    <div id="child2">
        <h1>This is nested</h1>
        <h2>This is 2nd line</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"This is nested. WOOOah!"),
            React.createElement("h2",{},"This is 2nd line"),
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"This is nested. WOOOah!"),
            React.createElement("h2",{},"This is 2nd line"),
        ]),
    ]    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//this is very complex to understand and not making our task simple. So, we have the JSX coming into picture.