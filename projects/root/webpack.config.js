const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const angularVersion = '^19.2.0';
const devexVersion = '^24.2.10';

function sharedSingletonStrictLibrary(requiredVersion = "auto") {
	return { singleton: true, strictVersion: true, requiredVersion };
}

module.exports = withModuleFederationPlugin({
	name: 'root',
	shared: share({
		"@angular/core": sharedSingletonStrictLibrary(angularVersion),
		"@angular/platform-browser": sharedSingletonStrictLibrary(angularVersion),
		"@angular/router": sharedSingletonStrictLibrary(angularVersion),
		'@angular/animations': sharedSingletonStrictLibrary(angularVersion),
		'@angular/animations/browser': sharedSingletonStrictLibrary(angularVersion),
		'@angular/common': sharedSingletonStrictLibrary(angularVersion),
		'@angular/common/http': sharedSingletonStrictLibrary(angularVersion),
		'@angular/compiler': sharedSingletonStrictLibrary(angularVersion),
		'@angular/forms': sharedSingletonStrictLibrary(angularVersion),
		// DEVEX START
		'devextreme-angular/ui/button': sharedSingletonStrictLibrary(devexVersion),
    	'devextreme-angular/ui/text-box': sharedSingletonStrictLibrary(devexVersion),
		'devextreme/ui/text_box': sharedSingletonStrictLibrary(devexVersion),
		'devextreme-angular/ui/data-grid': sharedSingletonStrictLibrary(devexVersion),
		'devextreme/ui/data_grid': sharedSingletonStrictLibrary(devexVersion),
		// DEVEX END
	  }, '', [
		'@angular/animations/browser/testing',
		'@angular/common/http/testing',
		'@angular/common/testing',
		'@angular/core/testing',
		'@angular/router/testing'
	])
});
