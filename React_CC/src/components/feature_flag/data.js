

const dummyApiResponse = {
    showLightAndDarkMode : false,
    showTicTacToe : false,
    showRandomColor : false,
    showAccordian : false,
    showTreeView: true
}


export default function featureFlagsDataCall(){

    return new Promise((resolve,reject)=>
           {   if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
            else reject("Errors occured!")
           })
}