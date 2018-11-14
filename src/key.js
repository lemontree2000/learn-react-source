import React from 'react';


class KeyDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [
                { name: 'a' },
                { name: 'b' },
                { name: 'c' }
            ]
        }
        this.reverseArr = this.reverseArr.bind(this); 0
    }
    shouldComponentUpdate(nextProps,nextState) {
        // 默认true
        return true
    }
    reverseArr() {
        const { arr } = this.state;
        this.setState({
            arr: arr.reverse()
        })
    }
    
    render() {
        const list = this.state.arr.map((item, index) => (
            <li key={index}> {item.name}<input type="text" /></li>
        ))
        return (
            <div>
                <ul>{list}</ul>
                <button onClick={this.reverseArr}>reverse</button>
            </div>
        )
    }
}


export default KeyDemo;