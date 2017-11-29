import _ from 'lodash';

const messagelist = ($http, API, $q) => {
    let allMessages = [];
    const get = () => {
        return $http.get(`${API.url}/messages`).then(res => allMessages = res.data);
    };

    const getMessage = (id) => {
        const message = _.find(allMessages, {id});
        if(message) {
            return $q.when(post);
        } else {
            return $http.get(`${API.url}/message/${id}`).then(({data}) => {
                allMessages.push(data);
                return data;
            });
        }
    };
    const getState = () => {
        return allMessages;
    }
    return {get, getMessage, getState};
};

messagelist.$inject = ['$http', 'API', '$q'];