var app = new Vue({
  el: "#app",
  data: {
    message: "Testing Vue message!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    msg: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello vue",
  },
});

Vue.component("todo-item", {
  props: ["topic"],
  template: "<li>{{ topic }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {
        id: 1,
        topic: "Do #1",
      },
      {
        id: 2,
        topic: "Do #2",
      },
    ],
  },
});
