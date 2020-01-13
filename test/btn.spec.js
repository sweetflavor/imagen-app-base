import { shallowMount } from "@vue/test-utils"
import Btn from "@/components/UI/btn"

describe("Btn.vue", () => {
    it("render the component", () => {
        const wrapper = shallowMount(Btn)
        wrapper.vm
    })
})