import React from 'react';
import './counter.css';
// import { connect } from 'react-redux';
import { connect } from './redux/react-redux';
import { reduce, increase, delyAdd } from './store/demo.redux';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handerIncrease = this.handerIncrease.bind(this);
        this.handerReduce = this.handerReduce.bind(this);
        this.handleDelyIncrease = this.handleDelyIncrease.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            num: 1
        }
    }
    componentDidMount() {
        console.log(this.props);
    }

    handerReduce() {
        this.props.reduce();
    }
    handerIncrease() {
        this.props.increase();
    }
    handleDelyIncrease() {
        this.props.delyAdd();
    }
    handleChange() {
        console.log(this)
    }
    render() {
        console.log(this.props);

        return (
            <div>
                <button onClick={this.handerReduce}>减一个数字</button>
                <input type="text" disabled value={this.props.num || 0} />
                <button onClick={this.handerIncrease}>加一个数字</button>
                <button onClick={this.handleDelyIncrease}>过段时间加一个数字</button>
                <br />
                <br />
                <button onClick={this.handleChange}>
                    test
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};
const mapActionToProps = {
    reduce,
    increase,
    delyAdd
}

Counter = connect(mapStateToProps, mapActionToProps)(Counter)

export default Counter