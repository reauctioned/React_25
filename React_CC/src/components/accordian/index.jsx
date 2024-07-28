import {useState} from "react"
import data from "./data"
import './styles.css'


export default function Accordian(){
     const [selected,setSelected] = useState(null)
     const [enableMulti,setEnableMulti] = useState (false)
     const [multi,setMulti] = useState ([])

     function handleSingleSelect(itemId){
        setSelected(itemId === selected? null : itemId)
     }

    function handleMultiSelection(itemId){
          let cpyMulti = [...multi]
        const findCurrentIndex = cpyMulti.indexOf(itemId)
        if(findCurrentIndex === -1 ){cpyMulti.push(itemId)}
        else {cpyMulti.splice(findCurrentIndex, 1)}
        setMulti( cpyMulti )
        console.log(cpyMulti)
    }




    return <div className="wrapper">
        <button onClick={() => setEnableMulti(!enableMulti)}>Multi Select</button>
        <div className="accordian">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className="item">
                        <div  onClick={ enableMulti?
                            () => 
                            handleMultiSelection(dataItem.id):
                            () => handleSingleSelect(dataItem.id)}  className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                        enableMulti
                        ? multi.indexOf(dataItem.id) !== -1 && (
                            <div>{dataItem.answer}</div>
                        ):
                        selected ===dataItem.id && (
                            <div>{dataItem.answer}</div>
                        )
                        }
                    </div>
                ))
            ) : (
                <div>No data was found</div>
            )}
        </div>
    </div>
}