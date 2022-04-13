export default {
	state: {
		error: null,
	},
	mutations: {
		SET_ERROR(state, value) {
			state.error = value;
		},
	},
	actions: {
		setError({ commit }, value) {
			commit('SET_ERROR', value);
		},
	},
	getters: {
		error: ({ error }) => error,
	},
};
