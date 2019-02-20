import Vue from "vue/dist/vue.esm";
export default Vue;

export function vueComponent(component, name, _this) {
  return ref => {
    if (!ref) return null;
    setTimeout(() => {
      _this[name] = _this[name] || component(_this, ref);
    });
  };
}
