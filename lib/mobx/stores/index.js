import { useStaticRendering } from 'mobx-react';

import PostStore from './PostStore';
import UIStore from './UIStore';
import UserStore from './UserStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postStore: {} }) {
    if (isServer) {
        return {
            postStore: new PostStore(initialData.postStore),
            uiStore: new UIStore(),
            userStore: new UserStore(),
        };
    }
    if (store === null) {
        store = {
            postStore: new PostStore(initialData.postStore),
            uiStore: new UIStore(),
            userStore: new UserStore(),
        };
    }

    return store;
}