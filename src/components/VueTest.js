import Vue from "../react-vue";

export function VueTest(_this, ref) {
  return new Vue({
    el: ref,
    data: {
      message: "",
      counter: _this.state.counter
    },
    watch: {
      message(val) {
        _this.setState({
          message: this.message
        });
      }
    },
    mounted() {
      _this.setState({
        message: this.message
      });
    },
    template: `
    <div class="vue vue1">
      <label for="message">Message:</label>
      <input
        id="message"
        type="text"
        v-model="message"
        size="30"
        placeholder="Enter message or Escape..."
        @keydown.escape="message = ''"
      ></input> - '{{ message }}'
      <div>Counter from React state: {{ counter }}</div>
    </div>
    `
  });
}
