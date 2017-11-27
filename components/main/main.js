angular.module('app').component('main', {
    templateUrl: '/components/main/main.html',
    controllerAs: 'mainCtrl',
    bindings: {
        name: '<'
    },
    controller: function(mainSrvc) {
        this.messages = mainSrvc.messages;
        console.log(this.messages);
    }
})