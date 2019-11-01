import { observable, action } from 'mobx';
import Web3Container from '../../web3/Web3Container'

class UserStore {
    @observable loadingUser;
    @observable myaddr;
    // @observable currentUser;
    // @observable updatingUser;
    // @observable updatingUserErrors;
    
    @action isNewAccount = async () => {
        const { web3 } = Web3Container
        return await web3.eth.personal.newAccount('!@superpassword')
    };

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

export default () => (
    <Web3Container
        renderLoading={() => <div>Loading Dapp Page...</div>}
        render={({ web3, accounts, contract, coinbase }) => (
            <UserStore accounts={accounts} contract={contract} web3={web3} coinbase={coinbase} />
        )}
    />
)
