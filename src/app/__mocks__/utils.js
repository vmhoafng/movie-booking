const Axios = {
	axiosGet: (endpoint, params = {}) => {
		return new Promise((resolve, reject) => {
			try {
				const mockFolder = require(`./${endpoint}`);

				resolve({ status: 200, data: mockFolder.default });
			} catch (error) {
				reject({
					status: 404,
					message: 'Invalid endpoint',
				});
			}
		});
	},

	axiosPost: async (endpoint, body, params = {}) => {
		return new Promise((resolve, reject) => {
			try {
				resolve({ status: 201 });
			} catch (error) {
				reject({
					status: 404,
					message: 'Invalid endpoint',
				});
			}
		});
	},

	axiosPut: (endpoint, body, params = {}) => {
		return new Promise((resolve, reject) => {
			try {
				resolve({ status: 201 });
			} catch (error) {
				reject({
					status: 404,
					message: 'Invalid endpoint',
				});
			}
		});
	},
	axiosDelete: (endpoint, params = {}) => {
		return new Promise((resolve, reject) => {
			try {
				resolve({ status: 201 });
			} catch (error) {
				reject({
					status: 404,
					message: 'Invalid endpoint',
				});
			}
		});
	},
};

module.exports = {
	Axios,
};
