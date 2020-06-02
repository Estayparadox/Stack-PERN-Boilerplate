import React, { Fragment, useState } from "react";

const LittleButton =(props) => {
    const handleClick = () => props.onClickFunction(props.increment)

    return (
        <Fragment>
            <button onClick={handleClick}
                    className="mt-5"
            >
                +{props.increment}
            </button>
        </Fragment>
    );
}

export default LittleButton;