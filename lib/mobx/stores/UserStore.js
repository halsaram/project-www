import { observable, action } from 'mobx';

class UserStore {
    @observable user = [];
    @observable profileImage = null;
    @observable loggedIn = true;

    @action setUser = (_user) => {
        this.user = _user;
    }

    @action setProfileImage = (_profileImage) => {
        this.profileImage = _profileImage;
    }

    @action setLoggedIn = (_loggedIn) => {
        this.loggedIn = _loggedIn;
    }
}

export default UserStore;