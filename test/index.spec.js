import Vue from "vue"
import Vuex from "vuex"

import VueTestUtils, { createLocalVue, shallowMount } from "@vue/test-utils"
import Home from "@/pages/"
import InfiniteLoading from "vue-infinite-loading"

Vue.component("infinite-loading", InfiniteLoading)

Vue.config.silent = true

// Mock Nuxt components
VueTestUtils.config.stubs['client-only'] = '<span><slot /></span>'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Home", () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      GET_IMAGES: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        images: {
          namespaced: true,
          actions
        }
      }
    })
  })

  it('dispatches "GET_IMAGES" function is triger', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    wrapper.vm.getImages()
    expect(actions.GET_IMAGES).toHaveBeenCalled()
  })
})

