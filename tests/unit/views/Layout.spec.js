import { mount } from "@vue/test-utils";
import Layout from "@/views/Layout.vue";
import Navbar from "@/components/Navbar.vue";

describe("Testing Main Layout", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Layout, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has a navbar", () => {
    const navbar = wrapper.find(Navbar);
    expect(navbar.exists()).toBe(true);
  });
});
