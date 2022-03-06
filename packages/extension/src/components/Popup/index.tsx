import { useEffect, useReducer } from 'react'

import Box from '@mui/material/Box'
import { getActiveTab } from '../../uitls/extension'
import { getEnable, getHostMode } from '../../uitls/setting'
import {
    initialState,
    reducer,
    setEnable,
    setActiveTab,
    setMode,
} from './reducer'
import { ModeOption } from './ModeOption'
import { EnableToggle } from './EnableToggle'
import { PopupContext } from './PopupContext'



export function Popup() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        getActiveTab().then((tab) => {
            dispatch(setActiveTab(tab))
        })
        getEnable().then((value) => {
            dispatch(setEnable(value))
        })
    }, [])

    useEffect(() => {
        if (state.hostname) {
            getHostMode(['*', state.hostname]).then(([global, tab]) => {
                console.log(global, tab)
                dispatch(setMode(global.mode, tab.mode, tab.customized))
            })
        }
    }, [state.hostname])

    return (
        <PopupContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Box sx={{ padding: '25px', minWidth: '300px', boxSizing: 'border-box' }} >
                <EnableToggle />
                <ModeOption />
            </Box >
        </PopupContext.Provider>
    )
}


export default Popup