var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./containers/App');

ReactDOM.render(
    <App store={{
        hello: 'Hello World!'
    }} />,
    document.getElementById('app')
);