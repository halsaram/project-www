import { observable, action } from 'mobx';

class PojectStore {
    @observable project = {
        large_title: undefined,     //큰 제목
        short_title: undefined,     //짧은 제목
        project_name: undefined,    //프로젝트 명
        target_amount: 0,           //목표 금액
        category: undefined,        //카테고리
        end_date: null,             //종료 일
        creator_name: undefined,    //창작자 네임
        creator_intro: undefined,   //창작자 소개
        fb_url: null,               //페이스북 URL
        ig_url: null                //인스타그램 URL
    };

    @action setProject = (_project) => {
        this.project = _project;
    }

}

export default PojectStore;