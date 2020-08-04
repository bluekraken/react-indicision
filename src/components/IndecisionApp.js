import React from "react";
import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";

export class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    handleRemoveAll = () => {
        this.setState(() => ({
            options: []
        }));
    };

    handleRemoveOption = (removeOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => removeOption !== option)
        }));
    };

    handlePickOption = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Please enter a value!";
        }

        if (this.state.options.indexOf(option) > -1) {
            return "Option already exists!";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({
                    options: options
                }));
            }
        } catch(e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}