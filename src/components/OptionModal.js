import React from "react";
import ReactModal from "react-modal";

export const OptionModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </ReactModal>
);