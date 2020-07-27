const title = 'Visibility Toggle';
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const jsx = (
        <div>
            <h1>{title}</h1>
            <button onClick={toggleVisibility}>{(visibility) ? 'Hide details' : 'Show details'}</button>
            {(visibility) && (
                <div>
                    <p>'The quick brown fox jumped over the lazy dog!'</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

renderApp();