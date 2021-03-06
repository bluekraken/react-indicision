import React from "react";
import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
import { OptionModal } from "./OptionModal";

export class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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
        this.setState(() => ({
            selectedOption: option
        }));
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

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

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
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePickOption={this.handlePickOption}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}