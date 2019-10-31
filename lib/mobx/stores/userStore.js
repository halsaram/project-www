import { observable, action } from 'mobx';
import dapp from '../../../pages/dapp';

class UserStore {

    @observable loadingUser;
    @observable myaddr;
    // @observable currentUser;
    // @observable updatingUser;
    // @observable updatingUserErrors;

    @action newAccount() { // 새로운 Account 생성
        this.loadingUser = true;
        return dapp.isNewAccount()
            .then(action(({ account }) => {
                this.myaddr = account;
                console.log('newAccount ==>', this.myaddr);
            }))
            .finally(action(() => { this.loadingUser = false }))
    }

    // @action updateUser(newUser) {
    //     this.updatingUser = true;
    //     return agent.Auth.save(newUser)
    //         .then(action(({ user }) => { this.currentUser = user; log }))
    //         .finally(action(() => { this.updatingUser = false; }))
    // }

    // @action forgetUser() {
    //     this.currentUser = undefined;
    // }

}

export default new UserStore();
