
function route($routeProvider){
	$routeProvider
        .when('/',{
            templateUrl:'view/updateInfo.html',
            controller:'aaa'
        }) 
        .when('/jianjie',{
            templateUrl:'view/intro.html',
            controller:'aaa'
        })
        .when('/xinxi',{
            templateUrl:'view/info.html',
            controller:'aaa'
        })
        .otherwise({redirectTo:'/'});
}
