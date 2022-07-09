import React, {useState, useEffect} from "react";
import Button from "./Button";
import Numbers from "./Numbers";
import numbersData from '../numbersData';
import AtomicInfo from "./AtomInfo";
import ScreenData from "./screenData";
import ScreenData2 from "./screenData2";



export default function Interface (props) {

    const [screenElements, setScreenElements] = useState([{display: "    "}])
    const [screenElementsValues, setScreenElemnetsValues] = useState([{is: "    "}])
    const [atom, setAtom] = useState([])
    const [extra, setExtra] = useState([])
    const [sum, setSum] = useState()
    

    useEffect(() => {
        let arr = screenElements
        let arr2 = screenElementsValues

        if(arr[arr.length - 1].display === " ") {
            arr.pop()
            arr.pop()
            arr2.pop()
        }
        if(arr[arr.length - 1].display === "  ") {
            arr=[{display: "    "}]
            arr2=[{is: "    "}]
        }
        setScreenElements([{display: "    "}])
        setScreenElemnetsValues([])
        setScreenElements(arr)
        setScreenElemnetsValues(arr2)
        result(screenElementsValues)
    }
        ,[screenElements, screenElementsValues])

    const buttons = props.info.map(button => (
        <Button
             key={button.atomicNumber}
             id={button.atomicNumber}
             symbol={button.symbol}
             name={button.name}
             group={button.groupBlock}
             mass={button.atomicMass}
             setScreen={() => press(button)}
        />
    ))
    
    const meths = numbersData.numbers.map(meth => (
        <Numbers 
            keys={meth.id}
            value={meth.value}
            id={meth.id}
            isSub={meth.isSub}
            useOperator={() => setOperators(meth)}
        />
    ))

    const screenData = screenElements.map(piece => (
        <ScreenData
            val={piece.display}
            isSub={piece.isSub}
        />
    ))

    const screenData2 = screenElementsValues.map(piece => (
        <ScreenData2
            val={piece.val}
        />
    ))

    function result(arr) {
        let re=[]
        let sum = 0

        //checks if literal element is going to be pushed in the array
        for (let i=0;i<arr.length; i++) {
            if (arr[i].val !== "") {
                if(arr[i + 1]) {
                    if (arr[i+1].val === "") {
                        continue
                    }
                    else {
                        re.push(arr[i].val)
                    }
                }
                else {
                    re.push(arr[i].val)
                }
            }
            
            // makes any subscript an integer that can be multiplied
            if (arr[i].val === "") {
                let temp = i - 1
                let sub=[]
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j].val !== "") {
                        sub.push(String(arr[j].val))
                        i += 1
                    }
                    if (arr[j].val === "") {
                        i+= 1
                        break
                    }
                }
                re.push(arr[temp].val * parseFloat(sub.join('')))
            }
        }
        for (let i =1;i<re.length; i++) {
            sum += re[i]
        }
        setSum(sum)
    }

    function press(iD) {
        atomicInfo(iD)
        setScreenElements(oldElm => { 
            let newElm = iD.symbol
            return [...oldElm, {display: newElm, isSub: numbersData.numbers[15].isSub}]
        })
        setScreenElemnetsValues(oldVals => {
            let newVal
            if (Array.isArray(iD.atomicMass)) {
                newVal = iD.atomicMass[0]
                return [...oldVals, {is: "atom", val: newVal}]
            } 

            else {
                newVal = iD.atomicMass.split('')
                for (let i=newVal.length;i>5;i--) {
                    newVal.pop()
                }
                return [...oldVals, {is: "atom", val: parseFloat(newVal.join(''))}]
        }
        })
    }

    function setOperators (iD) {
        if(iD.id === "subscript") {
            iD.isSub = !iD.isSub
        }

        setScreenElements(oldelm => {
            let newElm = iD.value
            return [...oldelm, {display: newElm, isSub: numbersData.numbers[15].isSub}]
        })

        setScreenElemnetsValues(oldVals => {
            let newVal = iD.value
            return [...oldVals,{is: "number",val: newVal}]
        })
        
    }
    

    function nobleGases() {
        let arr =[]
        for(let i=17;i<buttons.length;i++) {
            if (buttons[i].props.group === "noble gas") {
                arr.push(buttons[i])
            }
        }
        setExtra(arr)
    }

    function transMetals() {
        let arr =[]
        for(let i=21;i<buttons.length;i++) {
            if (buttons[i].props.group === "transition metal") {
                arr.push(buttons[i])
            }
        }
        setExtra(arr)
    }

    function nonMetals() {
        let arr =[]
        for(let i=3;i<buttons.length;i++) {
            if (buttons[i].props.group === "nonmetal") {
                arr.push(buttons[i])
            }
            if (buttons[i].props.group === "halogen") {
                arr.push(buttons[i])
            }
            if (buttons[i].props.group === "alkali metal") {
                arr.push(buttons[i])
            }
            if (buttons[i].props.group === "alkaline earth metal") {
                arr.push(buttons[i])
            }
        }
        setExtra(arr)
    }

    function actLan() {
        let arr =[]
        for(let i=58;i<buttons.length;i++) {
            if (buttons[i].props.group === "lanthanoid") {
                arr.push(buttons[i])
            }
            if (buttons[i].props.group === "actinoid") {
                arr.push(buttons[i])
            }
        }
        setExtra(arr)
    }

    function atomicInfo(iD) {
        setAtom(<AtomicInfo 
            atomicNum={iD.atomicNumber}
            symbol={iD.symbol}
            name={iD.name}
            electronConfig={iD.electronicConfiguration}
            standardState={iD.standardState}
            group={iD.groupBlock}
            mass={iD.atomicMass}
        />)
    }

    
    return (
        <div className="calculator">
            <div className="calc--brand"><h5>Chem Assistor</h5></div>
        <div className="screen"><h2 className="screen2"><div>{screenData}</div><div>{sum}</div></h2><h4 className="element--values">{screenData2}</h4></div>
            <div className="button--container">
               {buttons[0]} <div className="row--spacer1"></div> <div className="noble--gases" onClick={nobleGases}><h4>Noble Gases</h4></div> {meths[10]} {meths[7]} {meths[8]}{meths[9]}{meths[14]}
               {buttons[2]} {buttons[3]} <div className="transition--metals" onClick={transMetals}><h4>Transition Metals</h4></div> {buttons[4]} {buttons[5]} {buttons[6]} {buttons[7]} {buttons[8]} {meths[11]} {meths[4]} {meths[5]} {meths[6]} {meths[15]}
               {buttons[10]} {buttons[11]} {buttons[12]} {buttons[13]} {buttons[14]} {buttons[15]} {buttons[16]} {meths[12]} {meths[1]} {meths[2]} {meths[3]} {meths[18]}
               {buttons[18]} {buttons[19]} <div className="more--nonmetals" onClick={nonMetals}><h4>More Nonmetals and Earth Metals</h4></div> {meths[13]} {meths[0]}  {meths[16]} {meths[17]} {meths[19]}
               <div className="act--lan" onClick={actLan}><h4>Actinides and Lanthanoids</h4></div>
               <div className="spacer2"></div>
               <div className="extra--elements">{extra}</div>
               {atom}
            </div>
        </div>
    )
}