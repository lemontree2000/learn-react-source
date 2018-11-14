export function createStore(reducer,enhancer) {
    // document.write(enhancer)
    // debugger
    if (enhancer) {
        return enhancer(createStore)(reducer);
    }

    // 定义当前的state，默认undefined, 为了reducer里面的initState有效
    let currentState = undefined;
    let currentListeners = [];

    // getState 直接返回当前的state
    function getState() {
        return currentState;
    }

    /**
     *  dispatch 方法接受一个action
     *  1、执行传入的reducer
     *  2、循环执行监听器
     */

    function dispatch(action) {
        console.log(action)
        currentState = reducer(currentState, action);
        currentListeners.forEach(v => v());
    }

    /**
     * subscribe 加入一个监听器直接push到当前的监听器数组里
     */
    // DOTO 需要return 一个卸载器
    function subscribe(listener) {
        currentListeners.push(listener);
    }

    // 执行一次默认的dispatch ，出发reducer 里面默认的state
    dispatch({
        type: '@@redux-init'
    })

    // 将方法return 出去
    return { getState, dispatch, subscribe };

}

function bindActionsCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args));
}

export function bindActionsCreators(creators, dispatch) {
    let bounds = {};
    Object.keys(creators).forEach(v => {
        let creator = creators[v]
        bounds[v] = bindActionsCreator(creator, dispatch)
    })
    return bounds;
}

/**
 * 
 *  middleware 实质就是改写createStore 的dispatch
 */
export function applyMiddleware(middleware) {

    /**
     * enhancer(createStore)(reducer);
     */
    return function(createStore) {
        return function(...args) {
            const store = createStore(...args);
            let dispatch = store.dispatch;
            const midApi = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args)
            }
            dispatch = middleware(midApi)(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}