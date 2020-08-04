import React from "react";

export const Option = (props) => (
    <div>
        {props.option}
        <button
            onClick={(e) => {
                props.handleRemoveOption(props.option);
            }}
        >
            Remove
        </button>
    </div>
);