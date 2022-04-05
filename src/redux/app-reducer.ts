
import { getAuthUserData } from './auth-reducer'

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS'


export type InitialStateType= {
    initialized: boolean

}

let initialState: InitialStateType = {
    initialized: false,

}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
type initializedSuccessActionType = {
    type: typeof INITIALIZING_SUCCESS
}


export const initializedSuccess = (): initializedSuccessActionType => ({ type: INITIALIZING_SUCCESS })
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}

export default appReducer