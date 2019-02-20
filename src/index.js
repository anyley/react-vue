import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { VueTest } from "./components/VueTest";
import { VueTest2 } from "./components/VueTest2";
import { vueComponent } from "./react-vue";

class App extends React.Component {
  state = {
    counter: 0,
    message: "",
    message2: ""
  };

  renderCounter = 0;
  vueTest = null;
  vueTest2 = null;

  change = () => {
    this.setState(
      state => ({
        counter: state.counter + 1
      }),
      () => {
        this.vueTest.$data.counter = this.state.counter;
        this.vueTest2.$data.counter = this.state.counter * 2;
      }
    );
  };

  render() {
    const { counter, message, message2 } = this.state;
    console.log("render counter:", ++this.renderCounter);
    return (
      <div className="App">
        <div ref={vueComponent(VueTest, "vueTest", this)} />
        <div ref={vueComponent(VueTest2, "vueTest2", this)} />

        <button onClick={this.change}>Increase: {counter}</button>

        <div>Message from Vue 1: '{message}'</div>
        <div>Message from Vue 2: '{message2}'</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
