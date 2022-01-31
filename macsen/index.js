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
