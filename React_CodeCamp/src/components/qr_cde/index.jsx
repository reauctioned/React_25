import QRCode from "react-qr-code"
import { useState } from "react"



export default function QrCodeGenerator(){

   const [qrCode, setQrCode] = useState("")
   const [input, setInput] = useState("")
   
     function handleGenerateQR(){
          setQrCode(input)
          setInput('')
     }



    return(
        <div>
            <h1>Qr Code Generator</h1>
            <div>
                <input  onChange={(e) => setInput(e.target.value)}     value={input}  type="text" name='qr-code' />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQR}>Enter</button>
            </div>
            <dir>
              <QRCode
              id= 'qr-code-value'
              value={qrCode} 
              size={400}
              />
            </dir>
        </div>
    )
}