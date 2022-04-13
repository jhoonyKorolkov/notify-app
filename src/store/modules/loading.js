export default {
	state: {
		loading: false,
	},
	mutations: {
		IS_LOADING(state, value) {
			state.loading = value;
		},
	},
	actions: {
		isLoading({ commit }, value) {
			commit('IS_LOADING', value);
		},
	},
	getters: {
		loading: ({ loading }) => loading,
	},
};
