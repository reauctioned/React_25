import { useContext } from "react"
import Accordian from "../accordian"
import RandomColor from "../color_gen"
import LightDarkMode from "../switch_modes"
import TicTacToe from "../tic_tac_toe/tic-tac-toe"
import TreeView from "../tree_view_menu"
import { FeatureFlagContext } from "./context"
import menus from "../tree_view_menu/data"


export default function FeatureFlag(){

        const {loading, enableFlags}= useContext(FeatureFlagContext)



        const componentsToRender = [
            {key: 'showLightAndDarkMode',
             component: <LightDarkMode/>
            },
            {key: 'showTicTacToe',
             component: <TicTacToe/>
            },
            {key: 'showRandomColor',
             component: <RandomColor/>
            },
            {key: 'showAccordian',
             component: <Accordian/>
            },
            {key: 'showTreeView',
             component: <TreeView menus={menus}/>
            }
           


        ]

        if(loading){<div>Loading Data</div>}


        function checkEnabledFlags(currentKey){
            return enableFlags[currentKey]
        }


    return (
        <div>
            <h1>
                FeatureFlags
                {
                    componentsToRender.map(componentItem => [checkEnabledFlags(componentItem.key)?componentItem.component: null])
                }
            </h1>
        </div>
    )
}