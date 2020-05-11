import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Testing Navbar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has the app name (Do it)", () => {
    expect(wrapper.find(".navbar-brand").text()).toContain("Do it");
  });

  it("has 3 nav links", () => {
    const navLinks = wrapper.findAll(".nav-item");
    expect(navLinks.length).toEqual(3);
  });
});
