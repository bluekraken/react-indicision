console.log('app.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some text',
    options: []
};

const addOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const removeOptions = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const randonNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randonNumber];
    alert(option);
};

const renderApp = () => {
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'You have no options!'}</p>
            <button disabled={!app.options.length} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

renderApp();