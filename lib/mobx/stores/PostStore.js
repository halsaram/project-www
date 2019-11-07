import { observable, action } from 'mobx';

// import { makeFetchRequest } from '../utils/API';

class PostStore {
    @observable post = null;

    endpoint = 'post';

    constructor(initialData = {}) {
        this.post = initialData.post;
    }

    async fetch(id) {
        // const response = await makeFetchRequest(`${this.endpoint}/${id}/`);
        this.setPost(id);
    }

    @action setPost(post) {
        this.post = post;
    }
}

export default PostStore;