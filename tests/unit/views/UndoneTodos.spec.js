import { mount } from "@vue/test-utils";
import UndoneTodos from "@/views/UndoneTodos.vue";
import TodoList from "@/components/TodoList.vue";

describe("Testing UndoneTodos view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UndoneTodos);
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
    expect(todoList.vm.filterTodos).toEqual("undone");
  });
});
