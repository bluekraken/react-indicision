'use strict';

var title = 'Visibility Toggle';
var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderApp();
};

var renderApp = function renderApp() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                '\'The quick brown fox jumped over the lazy dog!\''
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

renderApp();
