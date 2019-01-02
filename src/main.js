// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    name: "Wojtek",
    myColor: {
      color: "#fab"
    }
  },
  template: '<h1 v-bind:style="myColor"> Hello {{ name }} </h1>'
});
