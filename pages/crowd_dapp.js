import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Segment, Button, Image, Input, Rail } from 'semantic-ui-react'

import Page from '../components/Page'
import Web3Container from '../lib/web3/Web3Container'
import ListCard from './main/ListCard';

class Contents extends Component {
  state = {
    myaddr1: undefined,
    myaddr2: undefined,
    title: undefined,
    description: undefined,
    durationInDays: undefined,
    amountToRaise: undefined,
    projectData: []
  };

  componentDidMount() {    
    this.getProjects();
  }

  isNewAccount = async () => {
    const { web3 } = this.props
    await web3.eth.personal.newAccount('!@superpassword')
      .then((result) => {
        this.setState({ myaddr1: result })
      });
    await web3.eth.personal.newAccount('!@superpassword')
      .then((result) => {
        this.setState({ myaddr2: result })
      });
  };

  insertProject = async () => {
    const { campaign, coinbase } = this.props
    const { myaddr1, title, description, durationInDays, amountToRaise } = this.state

    try {
      const project = await campaign.methods.startProject(title, description, durationInDays, amountToRaise, myaddr1).send({ from: coinbase, gas: 4500000 })
      console.log(project);
      this.getProjects();
    }
    catch (exception) {
      console.log(exception);
    }
  }

  getProjects = async () => {
    const { campaign, crowdfundProject, crowd_web3 } = this.props
    await campaign.methods.returnAllProjects().call().then(async projects => {
      const projectData = []
      projects.forEach(async (projectAddress) => {
        const projectInst = new crowd_web3.eth.Contract(crowdfundProject['abi'], projectAddress);
        await projectInst.methods.getDetails().call().then(projectInfo => {
          projectInfo.contract = projectInst;
          projectData.push(projectInfo);
        }).then(result => {
          this.setState({
            projectData
          })
        })
      })
    });
  }

  fundProject = async (index, val) => {
    const { coinbase } = this.props
    console.log(index);
    
    const projectContract = this.state.projectData[index].contract;
    // this.state.projectData[index].isLoading = true;
    await projectContract.methods.contribute(this.state.myaddr2, val).send({
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
    const { coinbase } = this.props
    let index = 0

    console.log(this.state.projectData);
    const projectIn = this.state.projectData.map(projects => {
      const { currentAmount, currentState, deadline, goalAmount, projectDesc, projectStarter, projectTitle } = projects
      return (
        <>
          <Button.Group vertical>
            <Button value={index} onClick={(e) => { this.fundProject(e.target.value, 1000) }}>1000원펀드</Button>
            <Button value={index} onClick={(e) => { this.fundProject(e.target.value, 2000) }}>2000원펀드</Button>
            <Button value={index} onClick={(e) => { this.fundProject(e.target.value, 3000) }}>3000원펀드</Button>
            <Button value={index++} onClick={(e) => { this.fundProject(e.target.value, 4000) }}>4000원펀드</Button>
          </Button.Group>
          
          < ListCard title={projectTitle}
          editor=''
          Dday={new Date(deadline * 1000).getDate() - new Date().getDate()}
            catogory={projectStarter}
          targetCoin={goalAmount}
          fundCoin={currentAmount}
          description={projectDesc}
              link='' />
        </>
      ) 
    })


    const { balance = 'N/A', myaddr1 = 'N/A', myaddr2 = 'N/A', title = 'N/A', description = 'N/A', durationInDays = 'N/A', amountToRaise = 'N/A' } = this.state
    return (
      <Segment>
        <h1>Crowd Dapp</h1>
        <Button onClick={this.isNewAccount}>Is new Account</Button>
        <Button onClick={this.insertProject}>Insert Project</Button>
        <Button onClick={this.getProjects}>Get Projects</Button>
        <div>Coinbase: {coinbase}</div>
        <div>A Addres: {myaddr1}</div>
        <div>B Addres: {myaddr2}</div>
        {/* <Input type='text' onChange={(e) => { this.setState({ title: e.target.value }) }} /> 제목 : {title} <br />
        <Input type='text' onChange={(e) => { this.setState({ description: e.target.value }) }} /> 상세내용 : {description} <br />
        <Input type='text' onChange={(e) => { this.setState({ durationInDays: e.target.value }) }} /> 기한 : {durationInDays} 일 <br />
        <Input type='text' onChange={(e) => { this.setState({ amountToRaise: e.target.value }) }} /> 목표금액 : {amountToRaise} 원 <br /> */}
        <Grid  >
          <Grid.Row centered columns={5}>
            {projectIn}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

@inject('web3', 'accounts', 'contract', 'campaign', 'coinbase', 'crowdfundProject', 'crowd_web3')
@observer
export default class extends Component {
  static getInitialProps({ query: { id, title } }) {
    return { id, title }
  }

  render() {
    return (
      <Page title={this.props.title} >
        <Contents {...this.props} />
      </Page>
    )
  }
}