angular.config(['$routeprovider', function ($routeProvider) {
    $routeProvider.when('/messages', {
        templateUrl: 'components/messages.html'
    }).otherwise({
        templateUrl: 'components/error.html'
    })
}])