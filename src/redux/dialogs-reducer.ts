
const SEND_MESSAGE = 'SEND_NEW_MESSAGE_BODY'


type DialogType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}
let initialState = {
    dialogs: [
        { id: 1, name: 'Vadim' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Dima' },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Im good. And you?' },
    ] as Array<MessagesType>
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,

                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state
    }
}

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string)
    : sendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer