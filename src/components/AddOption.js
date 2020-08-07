import React from "react";

export class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
            error: error
        }));

        e.target.elements.option.value = "";
        e.target.elements.option.focus();
    };

    render() {
        return (
            <div>
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add option</button>
                </form>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            </div>
        );
    }
}