import { observable, action } from 'mobx';

class PojectStore {

    @observable item = {
        projectTitle: null,
        keyword: null,
        fundingGoal: null,
        category: null,
        deadline: null,
        creator: null,
        websites1: null,
        websites2: null
    };

}

export default PojectStore;