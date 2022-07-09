import React from "react";

export default function Button (props) {
    let styles
    if (props.group === "nonmetal") {
        styles = {
            backgroundColor: "#D8E8F5",
            border: "#90B4FF",
            color: "#5021FF"
        }
    }

    if (props.group === "halogen") {
        styles = {
            backgroundColor: "#D8E8F5",
            border: "#90B4FF",
            color: "#5021FF"
        }
    }
    
    if (props.group === "noble gas") {
        styles= {
            backgroundColor: "#F6CDFE",
            border: "#F6CDFE",
            color: "#D500DF"
        }
    }

    if (props.group === "alkali metal") {
        styles= {
            backgroundColor: "#EBFFF2",
            border: "#EBFFF2",
            color: "#369BFF"
        }
    }

    if (props.group === "alkaline earth metal") {
        styles= {
            backgroundColor: "#FEE8E6",
            border: "#FEE8E6",
            color: "#FF5E6C"
        }
    }

    if (props.group === "transition metal") {
        styles= {
            backgroundColor: "#EFE2FE",
            border: "#EFE2FE",
            color: "#B43DFF"
        }
    }


    if (props.group === "metalloid") {
        styles= {
            backgroundColor: "#FFF9C4",
            border: "#FFF9C4",
            color: "#915613"
        }
    }

    if (props.group === "metal") {
        styles= {
            backgroundColor: "#DDFDE4",
            border: "#DDFDE4",
            color: "#3D7530"
        }
    }

    if (props.group === "lanthanoid") {
        
        styles= {
            backgroundColor: "#FFDFBD",
            border: "#FFDFBD",
            color: "#CC4C01"
        }
    }

    if (props.group === "actinoid") {
        styles= {
            backgroundColor: "#dff3ff",
            border: "#dff3ff",
            color: "#008bd3"
        }
    }
    
    if (props.group === "post-transition metal") {
        styles= {
            backgroundColor: "#F7ECE6",
            border: "#E3D8D3",
            color: "#948D8A"
        }
    }

    
    return (
        <div className="button"
         style={styles}
         onClick={props.setScreen}
         >
            <h2 className="element--symbol">{props.symbol}</h2>
            <p className="element--name">{props.name}</p>
        </div>
    )
} 