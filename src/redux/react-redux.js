import React from 'react';
import propTypes from 'prop-types';
import {bindActionsCreators} from './redux'

export class Provider extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.store = props.store;
    }
    static childContextTypes = {
        store: propTypes.object
    }
    getChildContext() {
        return {
            store: this.store
        }
    }
    render() {
        return this.props.children
    }
}


export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapperComponent) => {
    return class ConnectComponet extends React.Component {
        static contextTypes = {
            store: propTypes.object
        }
        constructor(props, context) {
            super(props, context);
            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            const { store } = this.context;
            store.subscribe(() => this.update())
            this.update();
        }
        update() {
            // 获取mapStateToProps mapDispatchToProps
            const { store } = this.context;
            const stateProps = mapStateToProps(store.getState());
            const dispatchProps =  bindActionsCreators(mapDispatchToProps, store.dispatch)
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        render() {
            return <WrapperComponent {...this.state.props}></WrapperComponent>
        }
    }
}

