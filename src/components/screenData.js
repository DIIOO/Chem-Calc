import React from "react";

export default function ScreenData (props) {
    let styles = {
        marginTop: props.isSub ? "15px": "0px",
        fontSize: props.isSub ? "small" : "x-large"
    }
    return (
        <div className="elements" style={styles}>{props.val}</div>
    )
}