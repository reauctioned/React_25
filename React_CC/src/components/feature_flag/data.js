

const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToe : true,
    showRandomColor : true,
    showAccordian : false,
    showTreeView: false
}


export default function featureFlagsDataCall(){

    return new Promise((resolve,reject)=>
           {   if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
            else reject("Errors occured!")
           })
}