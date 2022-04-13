import Vue from 'vue';
import Vuex from 'vuex';

import loading from './modules/loading';
import error from './modules/error';
import notify from './modules/notify';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		notify,
		error,
		loading,
	},
});
