
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
    <div>
        <h1>{ app.title }</h1>
        <p>{ app.subtitle }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Wojtek',
    age: 30,
    location: 'Białystok'
};
var userName = 'Siemka eniu';
var userAge = 26;
var userLocation = 'Ta';

var templateTwo = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location }</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);