import React from "react";

export const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.option}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleRemoveOption(props.option);
            }}
        >
            Remove
        </button>
    </div>
);