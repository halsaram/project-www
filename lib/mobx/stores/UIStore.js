import { observable, action } from 'mobx';

class UIStore {
    @observable searchOverlayOpen = false;
    @observable item =[];

    @action setSearchOverlayOpen(value) {
        this.searchOverlayOpen = value;
    }

    @action createitem(name) {
        this.item.push({
            name });
    }

}

export default UIStore;