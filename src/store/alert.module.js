export const alert = {
  namespaced: true,
  state: {
    type: null,
    message: null,
    timer: false,
  },
  actions: {
    success({ commit }, message) {
      commit("clear");
      commit("success", message);
    },
    successWithTimer({ commit }, { message, seconds }) {
      commit("setTimer", seconds);
      commit("success", message);
    },
    error({ commit }, message) {
      if (message.includes("TypeError")) {
        commit("error", "An error occured, please try again");
      } else {
        commit("error", message);
      }
    },
    clear({ commit }, message) {
      commit("clear", message);
    },
  },
  mutations: {
    success(state, message) {
      state.type = "success";
      state.message = message;
    },
    error(state, message) {
      state.type = "danger";
      state.message = message;
    },
    clear(state) {
      if (!state.timer) {
        state.type = null;
        state.message = null;
        if (state.timer !== false) {
          window.clearTimeout(state.timer);
        }
        state.timer = false;
      }
    },
    setTimer(state, seconds) {
      if (state.timer !== false) {
        window.clearTimeout(state.timer);
      }
      state.timer = window.setTimeout(() => {
        state.message = null;
        state.type = null;
        state.timer = false;
      }, seconds * 1000);
    },
  },
};
