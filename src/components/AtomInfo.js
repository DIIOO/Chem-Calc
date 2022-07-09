import React from "react";

export default function AtomicInfo(props) {
    return (
        <div className="atomic--info">
            <div className="atom">
                <div className="atom--num">{props.atomicNum}</div>
                <div className="atom--symbol">{props.symbol}</div>
                <div className="atom--name">{props.name}</div>
            </div>

            <div className="atom--info">
                <h4 className="atom--mass">Mass: <br /> {props.mass}</h4>
                <h4 className="atom--group">Group: <br /> {props.group}</h4>
                <h4 className="standard--state">Standard State: <br /> {props.standardState}</h4>
                <h4 className="electron--config">Electron Config: <br />{props.electronConfig}</h4>
            </div>
        </div>
    )
}