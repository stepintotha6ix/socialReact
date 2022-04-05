import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', countLike: '20' },
                { id: 2, message: 'It\'s my first post', countLike: '15' },
                
            ],
            newPostText: 'suuupman'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Im good. And you?' },
            ],
            dialogs: [
                { id: 1, name: 'Vadim' },
                { id: 2, name: 'Ivan' },
                { id: 3, name: 'Valera' },
                { id: 4, name: 'Dima' },
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Ivan' },
                { id: 2, name: 'Dima' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer
        (this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer
        (this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer
        (this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store
window.store = store

