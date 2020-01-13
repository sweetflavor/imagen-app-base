import { shallowMount } from "@vue/test-utils"
import ImagesGrid from "@/components/images-grid"

describe("ImagesGrid.vue", () => {
    it("render the component", () => {
        const wrapper = shallowMount(ImagesGrid)
        wrapper.vm
    })
})