export default function thunk({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            console.log(action)
            if (typeof action === 'function') {
                return action(dispatch, getState)
            }
            return next(action)
        }
    }
}