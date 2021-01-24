const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['sources/*.{jpg,jpeg,png}'], {
		destination: 'compressed',
		plugins: [
			imageminWebp({
        quality: 85,
        method: 6
      })
		]
	});

	console.log('Images optimized');
})();