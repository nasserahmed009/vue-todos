const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "",
        name: "Todos",
        component: () => import("@/views/Todos.vue"),
        meta: { title: "All Todos" }
      },
      {
        path: "/done-todos",
        name: "DoneTodos",
        component: () => import("@/views/DoneTodos.vue"),
        meta: { title: "Done Todos" }
      },
      {
        path: "/undone-todos",
        name: "UndoneTodos",
        component: () => import("@/views/UndoneTodos.vue"),
        meta: { title: "Undone Todos" }
      }
    ]
  }
];

export default routes;
