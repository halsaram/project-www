/**************************************************************************************
 * 제목          : 상세페이지 화면 중 상품 옵션 선택 부분(오른쪽 고정)
 * 소스파일 이름  : pages/detail/DetailCato.js
 * 파일설명		   : 상세페이지 화면에서 가장 오른쪽에 고정된다.
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-11-14
 * 최종수정자	   : 전새희
 * 최종수정내용	  : Base
**************************************************************************************/
import React, { Component } from 'react'
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'

@inject('userStore', 'web3', 'accounts', 'contract', 'campaign', 'coinbase', 'crowdfundProject', 'crowd_web3')
@observer
class DetailCato extends Component {

    fundProject = async (index, val) => {
        const { coinbase } = this.props
        console.log(index);

        const projectContract = this.props.userStore.projectData[index].contract;
        // this.state.projectData[index].isLoading = true;
        await projectContract.methods.contribute(this.props.userStore.user.myAddr, val).send({
            from: coinbase,
            gas: 4500000,
        }).then(async (res) => {
            console.log(res);
            const newTotal = await parseInt(res.events.FundingReceived.returnValues.currentTotal, 10);
            const projectGoal = await parseInt(this.state.projectData[index].goalAmount, 10);
            this.state.projectData[index].currentAmount = newTotal;
            // this.state.projectData[index].isLoading = false;
            // Set project state to success
            if (newTotal >= projectGoal) {
                this.state.projectData[index].currentState = 2;
            }
        }).catch(error => {
            console.log(error);
        }).finally(fin => {
            console.log(fin);
            this.getProjects();
        })
    }

    render() {
        console.log('DetailCato===>', this.props);
        console.log('DetailCato===>', this.props.userStore.projectData);
        console.log('DetailCato===>', this.props.userStore.user);
        return (
            <Segment>
                <h3>펀드가격 : {this.props.projectGift.sum}원+</h3>
                <p>이 펀딩 제품에 대한 설명</p>
                <h3>제품명 : {this.props.projectGift.rewardName}</h3>
                <p>예상 전달일 : <span>{this.props.projectGift.date}</span></p>
                <Button color="blue" value={this.props.index} onClick={(e) => { this.fundProject(e.target.value, this.props.projectGift.sum) }}>프로젝트 밀어주기</Button>
            </Segment>
        )
    }
}

export default DetailCato;