import { shallowMount } from "@vue/test-utils";
import Error404 from "@/views/Error404.vue";

describe("Testing Error404 view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Error404, {
      stubs: ["router-link"]
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has a button to return to the home page", () => {
    const btn = wrapper.find(".btn");
    expect(btn.text()).toEqual("Back to the home page");
  });

  it("it illustrates the problem to the user", () => {
    const h5 = wrapper.find("h5");
    expect(h5.text()).toEqual("There's no page with the requested route");
  });
});
