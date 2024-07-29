import "./styles.css"



export default function TicTacToe(){



    function Square({value}){
        return <button className="Square">{value}</button>
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