import React from "react";

export const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}