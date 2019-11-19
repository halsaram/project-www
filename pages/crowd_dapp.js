import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Segment, Button, Image } from 'semantic-ui-react'

import Page from '../components/Page'
import Web3Container from '../lib/web3/Web3Container'
import ListCard from './main/ListCard';

class Contents extends React.Component {
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
      this.state.projectData = []
      projects.forEach(async (projectAddress) => {
        const projectInst = new crowd_web3.eth.Contract(crowdfundProject['abi'], projectAddress);
        await projectInst.methods.getDetails().call().then(projectData => {
          const projectInfo = projectData;
          this.state.projectData.push(projectInfo);
        })
      })
    });
  }

  render() {
    const { coinbase } = this.props
    console.log(this.props);


    const projectIn = this.state.projectData.map(projects => {
      const { currentAmount, currentState, deadline, goalAmount, projectDesc, projectStarter, projectTitle } = projects
      return < ListCard title={projectTitle}
        editor=''
        Dday={new Date(deadline * 1000).getDate() - new Date().getDate()}
        catogory=''
        targetCoin={goalAmount}
        fundCoin={currentAmount}
        description={projectDesc}
        link='' />
    })


    const { balance = 'N/A', myaddr1 = 'N/A', myaddr2 = 'N/A', title = 'N/A', description = 'N/A', durationInDays = 'N/A', amountToRaise = 'N/A' } = this.state
    return (
      <Segment>
        <h1>Crowd Dapp</h1>
        <button onClick={this.isNewAccount}>Is new Account</button>
        <button onClick={this.insertProject}>Insert Project</button>
        <button onClick={this.getProjects}>Get Projects</button>
        <div>Coinbase: {coinbase}</div>
        <div>A Addres: {myaddr1}</div>
        <div>B Addres: {myaddr2}</div>
        <input type='text' onChange={(e) => { this.setState({ title: e.target.value }) }} /> 제목 : {title} <br />
        <input type='text' onChange={(e) => { this.setState({ description: e.target.value }) }} /> 상세내용 : {description} <br />
        <input type='text' onChange={(e) => { this.setState({ durationInDays: e.target.value }) }} /> 기한 : {durationInDays} 일 <br />
        <input type='text' onChange={(e) => { this.setState({ amountToRaise: e.target.value }) }} /> 목표금액 : {amountToRaise} 원 <br />
        <Grid centered>
          <Grid.Row centered columns={4}>
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