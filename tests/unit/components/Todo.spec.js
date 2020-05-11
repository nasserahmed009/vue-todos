import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Testing Todo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
        description: "test todo",
        completed: false
      }
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders todo description correctly", () => {
    const toggleBtn = wrapper.find(".toggle-todo");
    const span = toggleBtn.find("span");
    expect(span.text()).toBe("test todo");
  });

  it("emits on-toggle when todo button is clicked", () => {
    wrapper.setData({
      isEditing: false
    }); //to assure that the button exists
    const toggleBtn = wrapper.find(".toggle-todo");
    toggleBtn.trigger("click");
    expect(wrapper.emitted("on-toggle").length).toBe(1);
  });

  it("finish editing and emit on-edit event correctly", () => {
    wrapper.setData({
      isEditing: true
    });
    wrapper.vm.finishEditing();

    expect(wrapper.vm.isEditing).toBe(false);
    expect(wrapper.emitted("on-edit").length).toBe(1);
  });

  it("emits on-delete event correctly", () => {
    const deleteTodoBtn = wrapper.find(".delete-todo");
    deleteTodoBtn.trigger("click");
    expect(wrapper.emitted("on-delete").length).toBe(1);
  });

  it("starts editing correctly", () => {
    // in case of isEditing is true
    wrapper.setData({
      isEditing: true
    });
    const finishEditingFn = jest.fn();
    wrapper.setMethods({
      finishEditing: finishEditingFn
    });
    wrapper.vm.startEditing();
    expect(finishEditingFn).toHaveBeenCalled();

    // in case of isEditing is false
    wrapper.setData({
      isEditing: false
    });
    wrapper.vm.startEditing();
    expect(wrapper.vm.newTodoDescription).toEqual(wrapper.vm.description);
    expect(wrapper.vm.isEditing).toBeTruthy();
  });
});
