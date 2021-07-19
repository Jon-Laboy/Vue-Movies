import { mount } from "@vue/test-utils";
import GenreBtns from "@/components/GenreBtns.vue";
import MovieViews from "@/views/MovieViews.vue";
import Home from "@/views/Home.vue";


it("MovieViews component does not render a GenreBtns component", () => {
  const wrapper = mount(MovieViews);

  expect(wrapper.findComponent(GenreBtns).exists()).toBe(false);
});
it("Home component does render a GenreBtns component", () => {
  const wrapper = mount(Home);

  expect(wrapper.findComponent(GenreBtns).exists()).toBe(true);
});

test("GenreBtns triggers a click", async () => {
  const wrapper = mount(GenreBtns);

  await wrapper.trigger("click");
});