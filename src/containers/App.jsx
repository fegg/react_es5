var React = require('react');

var App = React.createClass({
   render: function () {
        var store = this.props.store;

        return (
            <div>
                <h1>{store.hello}</h1>
            </div>
        );
   }
});

module.exports = App;