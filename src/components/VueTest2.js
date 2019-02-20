import Vue from "../react-vue";

export function VueTest2(_this, ref) {
  return new Vue({
    el: ref,
    data: {
      message: "",
      counter: _this.state.counter
    },
    // watch: {
    //   message(val) {
    //     _this.setState({
    //       message2: this.message
    //     });
    //   }
    // },
    methods: {
      send() {
        _this.setState({
          message2: this.message
        });
      }
    },
    template: `
    <div class="vue vue2">
      <label for="message2">Message:</label>
      <input
        id="message2"
        type="text"
        v-model="message"
        size="30"
        placeholder="Press Enter to send to React..."
        @keydown.esc="message = ''"
        @keydown.enter="send(message)"
      ></input> - '{{ message }}'
      <div>Counter from React state (x2): {{ counter }}</div>
    </div>
    `
  });
}
