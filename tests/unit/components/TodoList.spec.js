import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("Testing TodoList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      propsData: {
        listName: "My list"
      }
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("listName prop working correctly", () => {
    expect(wrapper.find("h1").text()).toBe("My list");
  });

  it("has todos array", () => {
    expect(Array.isArray(wrapper.vm.todos)).toBe(true);
  });

  it("adds todo correctly", () => {
    wrapper.vm.addTodo("test todo");
    const foundTodo = wrapper.vm.todos.filter(
      todo => todo.description === "test todo"
    );
    expect(foundTodo).toHaveLength(1);
  });

  it("removes todo correctly", () => {
    const todos = [{ description: "test todo", completed: false }];

    wrapper.setData({
      todos
    });

    // check if the todo is already added
    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test todo" })
    );

    wrapper.vm.deleteTodo(wrapper.vm.todos[0]);

    expect(wrapper.vm.todos).toHaveLength(0);
  });

  it("edits todo correctly", () => {
    const todos = [{ description: "test todo", completed: false }];

    wrapper.setData({
      todos
    });

    // check if the todo is already added
    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test todo" })
    );

    wrapper.vm.editTodo(wrapper.vm.todos[0], "edited todo");

    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "edited todo" })
    );
  });

  it("toggles todo state correctly", () => {
    const todos = [{ description: "test todo", completed: false }];

    wrapper.setData({
      todos
    });

    // check if the todo is already added
    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test todo", completed: false })
    );

    wrapper.vm.toggleTodo(wrapper.vm.todos[0]);

    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test todo", completed: true })
    );
  });

  it("filter done todos correctly", () => {
    wrapper.setData({
      todos: [
        { id: 1, description: "Buy some milk!", completed: false },
        { id: 2, description: "Watch the new episode", completed: true }
      ]
    });
    wrapper.setProps({ filterTodos: "done" });

    expect(wrapper.vm.filteredTodos.length).toBeLessThanOrEqual(
      wrapper.vm.todos.length
    );

    wrapper.vm.filteredTodos.forEach(todo => {
      expect(todo.completed).toBe(true);
    });
  });

  it("filter undone todos correctly", () => {
    wrapper.setData({
      todos: [
        { id: 1, description: "Buy some milk!", completed: false },
        { id: 2, description: "Watch the new episode", completed: true }
      ]
    });
    wrapper.setProps({ filterTodos: "undone" });

    expect(wrapper.vm.filteredTodos.length).toBeLessThanOrEqual(
      wrapper.vm.todos.length
    );

    wrapper.vm.filteredTodos.forEach(todo => {
      expect(todo.completed).toBe(false);
    });
  });
});
