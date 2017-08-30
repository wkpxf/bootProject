(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'configLayout',
		 			files: [
		 				'./view/layout/nav.js',
		 				'./view/layout/aside.js'
		 			]
		 		},
		 		{
		 			name: 'heibulin',
		 			files: [
		 				'./controller/heibulinController.js'
		 			]
		 		},
		 		{
		 			name: 'yangmei',
		 			files: [
		 				'./controller/yangmeiController.js'
		 			]
		 		}
	 		]
 		});
	}]);
	
})();