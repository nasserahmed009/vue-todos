const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "",
        name: "Todos",
        component: () => import("@/views/Todos.vue")
      },
      {
        path: "/done-todos",
        name: "DoneTodos",
        component: () => import("@/views/DoneTodos.vue")
      },
      {
        path: "/undone-todos",
        name: "UndoneTodos",
        component: () => import("@/views/UndoneTodos.vue")
      }
    ]
  }
];

export default routes;
