import { observable, action } from 'mobx';

class UserStore {
    @observable user = [];
    @observable projectData = [];
    @observable profileImage = null;
    @observable loggedIn = true;

    @action setUser = (_user) => {
        this.user = _user;
    }

    @action setProjectData = (_projectData) => {
        console.log('setProjectData==>',_projectData);
        
        this.projectData = _projectData;
    }

    @action setProfileImage = (_profileImage) => {
        this.profileImage = _profileImage;
    }

    @action setLoggedIn = (_loggedIn) => {
        this.loggedIn = _loggedIn;
    }
}

export default UserStore;