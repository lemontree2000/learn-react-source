import React from 'react';

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 1,
            name: 'edward'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        const data = { name: 'edward', age: 10 };
        const List = ['react', 'vue', '']
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>button</button>
                <button onClick={this.handleClick.bind(this)}>button</button>
                <button onClick={() => this.handleClick()}>button</button>
                {/* <Demo data={{ name: 'edward', age: 10 }}>button</Demo>
                <Demo {...data}></Demo> */}
                <Demo name={this.state.name}></Demo>
            </div>
        )
    }
}

class Demo extends React.Component {
   
    render() {
        console.log('demo rendering')
        return <div>{this.props.name}</div>
    }
}

export default Container;



// shouldComponentUpdate(nextProps) {
//     if (this.props.name === nextProps.name) {
//         return false
//     }
//     return true
// }