import { mount } from "@vue/test-utils";
import TheNavbar from "@/components/TheNavbar.vue";

describe("TheNavbar", () => {
  it("renders the star wars logo", () => {
    const wrapper = mount(TheNavbar);
    const img = wrapper.findAll(".star-wars-logo");
    expect(img.length).toBe(1);
  });

  // Test for 'Starships' text
  it("displays 'Starships' text", () => {
    const wrapper = mount(TheNavbar);
    const text = wrapper.text();
    expect(text).toContain("Starships");
  });
});
