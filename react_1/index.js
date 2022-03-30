// ----------------------------- Lesson 1 ------------------------------------


// this is an example of declarative style of coding

// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));


// ----------------------------- Lesson 2 ------------------------------------


// let elem = <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>

// ReactDOM.render(elem, document.getElementById("root"));


// ----------------------------- Lesson 3 ------------------------------------


// this is an example of imperative style of coding

// let elem = document.createElement('h1');

// elem.textContent = "Imperative style";

// elem.className = "header";
// document.getElementById("root").append(elem);


// ----------------------------- Lesson 4 ------------------------------------


// difference between the elements

// let elem = document.createElement('h1');
// elem.textContent = "Imperative style";
// elem.className = "header";
// console.log(elem);

// let elemJSX = <h1 className="header">This is JSX</h1>
// console.log(elemJSX);


// ----------------------------- Lesson 5 ------------------------------------


// with JSX, we can only return a single parent element

// let elemJSX = <h1 className="header">A heading</h1>; // works
// let elemJSX = <h1 className="header">A heading</h1><p>A paragraph</p>; // error

// works
// let elemJSX = (
//     <div>
//         <h1 className="header">A heading</h1>
//         <p>A paragraph</p>
//     </div>
// );

// let navbar = (
//     <nav>
//         <h1>My Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"));


// ----------------------------- Lesson 6 ------------------------------------
// see what happens when we use .append() instead of ReactDOM.render()

let navbar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

document.getElementById("root").append(navbar);
