import { useState } from "react"
import Modal from "./modalpopup"



export default function ModalTest(){
const [showModalPopup, setShowModalPopup]= useState(false)
   
    function handleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }


   return <div>
        <button onClick={handleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal />

        }
    </div>
}