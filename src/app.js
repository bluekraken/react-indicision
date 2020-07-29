class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        };
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handlePickOption() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return "Please enter a value!";
        }

        if (this.state.options.indexOf(option) > -1) {
            return "Option already exists!";
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePickOption}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                <button
                    onClick={this.props.handleRemoveAll}
                    disabled={!(this.props.options.length > 0)}
                >
                    Remove all
                </button>
                {this.props.options.map((option) => <Option key={option} option={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error
            }
        });

        e.target.elements.option.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));