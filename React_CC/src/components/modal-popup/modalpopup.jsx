import "./modalpopup.css"

export default function Modal({id, header , body , footer }){
    return <div id={ id || 'Modal'} className="modal">
        <div className="modal-content">
            <div className="header">
                    <span className="close-modal-icon">&times;</span>
                    <h2>{header ? header : 'this is header'}</h2>
            </div>
            <div className="body">
               {
                body ? body : "body"
               }
            </div>
            <div className="footer">
                {footer ? footer : "footer"}
            </div>

        </div>
        
    </div>
}