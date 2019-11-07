import { observable, action } from 'mobx';

class UserStore {
    @observable user = [];
    @observable loggedIn = true;

    @action setUser = (_user) => {
        this.user = _user;
    }

    @action setLoggedIn = (_loggedIn) => {
        this.loggedIn = _loggedIn;
    }
}

export default UserStore;