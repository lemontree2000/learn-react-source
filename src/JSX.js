import React from "react";

const button = <button>Hello Button</button>;

// 子组件
function Button(props) {
  return <button onClick={props.handleClick}>{props.ButtonText}</button>;
}
// https://s1.ax1x.com/2018/11/13/iOZXPx.png

class ButtonClass extends React.Component {
    render() {
       return (
           <button>react</button>
        )
    }
}

const MyContainer = WrappedComponent =>
  class extends WrappedComponent {
    render() {
        if (this.props.loggedIn) {
            return super.render();
        } else {
            return null;
        }
    }
};

const NewCom = MyContainer(ButtonClass)

// 父组件
class ViewInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "保存"
    };
  }
  render() {
    return (
      <div>
        <p>name: Edward</p>
        <p>age: 19</p>
        <Button
          ButtonText={this.state.text}
          handleClick={() => this.setState({ text: "删除" })}
        />
        <NewCom loggedIn={true}/>
      </div>
    );
  }
}


export default ViewInfo;

