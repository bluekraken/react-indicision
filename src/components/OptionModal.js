import React from "react";
import ReactModal from "react-modal";

export const OptionModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </ReactModal>
);