import { mount } from "@vue/test-utils";
import Todos from "@/views/Todos.vue";
import TodoList from "@/components/TodoList.vue";

describe("Testing Todos view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Todos);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has a todosList component", () => {
    const todoList = wrapper.find(TodoList);
    expect(todoList.exists()).toBe(true);
  });

  it("todolist component was called with the right props", () => {
    const todoList = wrapper.find(TodoList);
    expect(todoList.vm.filterTodos).toEqual("all");
  });
});
