import Tabs from './tabs'



export default function TabsTest(){

    const tabs = [
        {
            label :"Tab 1",
            content : <div>This is tab 1</div>},
            {label :"Tab 2",
            content : <div>This is tab 2</div>},
            {label :"Tab 3",
            content : <div>This is tab 3</div>}
        
    ]

    function handleChange(currentTabIndex){
       console.log(currentTabIndex)
    }


    return(
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}