angular.module('app').component('leaveMessage', {
    templateUrl: '/components/messages/messages.html',
    controller: function(mainSrvc) {
        this.messages = mainSrvc.messages;
        console.log(this.messages);
        this.submitMessage = function(obj){
            this.messages.push(obj);
        }
    }    
})

// submitMessage($scope){
//     messages.push($scope.message).then(req, res) {
//         return res;
//     }
// }