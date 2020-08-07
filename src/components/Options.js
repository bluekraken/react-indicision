import React from "react";
import { Option } from "./Option";

export const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button
                className="button button--link"
                onClick={props.handleRemoveAll}
                disabled={!(props.options.length > 0)}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    option={option}
                    count={index + 1}
                    handleRemoveOption={props.handleRemoveOption}
                />
            ))
        }
    </div>
);