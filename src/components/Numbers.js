import React from "react";

export default function Numbers(props) {
    let styles
    if (props.id === "clr") {
        styles = {
            backgroundColor: "#FA5438",
            border: "#FA5438",
            color: "#9E0800"
                }
    }

    if (props.id === "+") {
        styles = {
            backgroundColor: "#FF9E3F",
            border: "#FF9E3F",
            color: "#915B24"
        }
    }
    if (props.id === "÷") {
        styles = {
            backgroundColor: "#FF9E3F",
            border: "#FF9E3F",
            color: "#915B24"
        }
    }
    if (props.id === "-") {
        styles = {
            backgroundColor: "#FF9E3F",
            border: "#FF9E3F",
            color: "#915B24"
        }
    }
    if (props.id === "*") {
        styles = {
            backgroundColor: "#FF9E3F",
            border: "#FF9E3F",
            color: "#915B24"
        }
    }
    if(props.id === "subscript") {
        props.isSub ? styles={backgroundColor : "#5EBD68", border: "#5EBD68", color: "#23611B"} : styles={backgroundColor : ""};
        return (
            <div
                className="number"
                onClick={props.useOperator}
                style={styles}
            ><h4>X<sub>y</sub></h4></div>
        )
    }
    return (
    <div className="number"
        style={styles}
        onClick={props.useOperator}
     ><h4>{props.id}</h4></div>
    )
}