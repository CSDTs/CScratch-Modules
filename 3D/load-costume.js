const got = require('got');

const loadCostume = function (md5ext, costume, runtime) {
	const [md5, ext] = md5ext.split('.');

	if (ext.toLowerCase() !== 'json') {
		return costume;
	}

	const filepath = './static/costumes/' + md5ext;

	return new Promise((resolve, reject) => {
		got(filepath).then(
			response => {
				if (response.statusCode === 200) {
					resolve(response.body);
				} else {
					reject(response);
				}
			},
			error => {
				reject(error);
			}
		)
	}).then(costumeAsset => {
		costume.skinId = runtime.renderer.create3DSkin(JSON.parse(costumeAsset));
		costume.dataFormat = ext;
		return costume;
	});
};

module.exports = loadCostume;
