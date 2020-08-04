import React from "react";
import { Option } from "./Option";

export const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleRemoveAll}
                disabled={!(props.options.length > 0)}
            >
                Remove all
            </button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        option={option}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))
            }
        </div>
    );
}