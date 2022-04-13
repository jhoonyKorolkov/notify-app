import axios from '../../plugins/axios';

export default {
	namespaced: true,

	state: {
		messages: [],
		messagesMain: [],
		endMessages: false,
	},
	mutations: {
		SET_MESSAGES(state, payload) {
			state.messages = payload;
		},

		SET_END_MESSAGE(state, payload) {
			state.endMessages = payload;
		},

		LOAD_MESSAGES(state, payload) {
			const newMessages = payload.filter((message) => !message.main);
			const res = [];
			// if > 3
			if (newMessages.length > 3) {
				for (let i = 0; i < 3; i++) {
					// main - false to main - true
					newMessages[i].main = true;
					res.push(newMessages[i]);
				}
			} else {
				for (let i = 0; i < newMessages.length; i++) {
					newMessages[i].main = true;
					res.push(newMessages[i]);
				}
				state.endMessages = true;
			}
		},
	},
	actions: {
		async loadMessages({ dispatch, commit, getters }, payload) {
			const messages = getters.messages;
			commit('LOAD_MESSAGES', messages);
		},

		async setMessage({ commit, dispatch, getters }) {
			dispatch('isLoading', true, { root: true });
			try {
				const resp = await axios.get();
				commit('SET_MESSAGES', resp.notify);
			} catch (error) {
				dispatch('setError', 'Error: Network Error', { root: true });
				throw error;
			} finally {
				dispatch('isLoading', false, { root: true });
			}
		},

		updateMessage({ dispatch, commit }) {
			dispatch('isLoading', true, { root: true });
			dispatch('setMessage');
			commit('SET_END_MESSAGE', false);
		},
	},
	getters: {
		messages: ({ messages }) => messages,
		mainMessages: ({ messages }) => messages.filter((message) => message.main),
		endMessages: ({ endMessages }) => endMessages,
	},
};
