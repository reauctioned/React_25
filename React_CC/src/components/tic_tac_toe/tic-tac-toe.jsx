import "./styles.css"



export default function TicTacToe(){



    function Square(){
        return <button className="square">{value}</button>
    }



  return(
    <div className="tic-tac-toe-container">
        <div className="row">
           <Square/>
           <Square/>
           <Square/>
        </div>
        <div className="row">
            <Square/>
           <Square/>
           <Square/>
        </div>
        <div className="row">
            <Square/>
           <Square/>
           <Square/>
        </div>
    </div>
  )

}