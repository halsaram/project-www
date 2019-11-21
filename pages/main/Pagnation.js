// 페이지네이션 컴포넌트
import React, { useState } from 'react'
import ListCard from './ListCard'
import { Grid, Pagination } from 'semantic-ui-react'


const Pagnation = (props) => {
    console.log('Pagnation===>',props.props);
    
    const [activePage, setActivePage] = useState(1);
    const [projectData, setProjectData] = useState(new Array);
    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)

    let index = 0

    if (projectData.length == 0) {
        const { campaign, crowdfundProject, crowd_web3 } = props.props
        campaign.methods.returnAllProjects().call().then(projects => {
            const projectData = []
            projects.forEach((projectAddress) => {
                const projectInst = new crowd_web3.eth.Contract(crowdfundProject['abi'], projectAddress);
                projectInst.methods.getDetails().call().then(projectInfo => {
                    projectInfo.contract = projectInst;
                    projectData.push(projectInfo);
                }).then(result => {
                    setProjectData(projectData)
                })
            })
        }).finally(fin => {
            props.props.userStore.setProjectData(projectData)
        })
    }

    return (
        <div>
            <Grid>
                <Grid.Column width="2" />
                <Grid.Column width="8">
                    <h3>{props.title}</h3>       {/* props.title 프로젝트 제목 */}
                </Grid.Column>

                <Grid.Column>               {/* 페이지네이션 */}
                    <Pagination
                        activePage={activePage}
                        onPageChange={handlePaginationChange}
                        defaultActivePage={1}
                        firstItem={null}
                        lastItem={null}
                        pointing secondary totalPages={3} />
                </Grid.Column>
            </Grid>

            <Grid centered>
                {props.project == "NewProject" ?
                    <Grid.Row centered columns={4}>
                        {activePage == 1 &&
                            (projectData.slice(0, 3)).map((item, i) => (                                
                                <ListCard title={JSON.parse(item.projectSummary).projectTitle}
                                    editor={item.projectStarter}
                                    Dday={new Date(item.deadline * 1000).getDate() - new Date().getDate()}
                                    catogory={JSON.parse(item.projectSummary).category}
                                    targetCoin={item.goalAmount}
                                    fundCoin={item.currentAmount}
                                    deadline={item.deadline}
                                    projectGift={JSON.parse(item.projectGift)}
                                    projectStory={JSON.parse(item.projectStory)}
                                    projectSummary={JSON.parse(item.projectSummary)}
                                    index={index++}
                                />                            
                            ))
                        }

                        {activePage == 2 &&
                            (projectData.slice(3, 6)).map((item, i) => (
                                <ListCard title={JSON.parse(item.projectSummary).projectTitle}
                                    editor={item.projectStarter}
                                    Dday={new Date(item.deadline * 1000).getDate() - new Date().getDate()}
                                    catogory={JSON.parse(item.projectSummary).category}
                                    targetCoin={item.goalAmount}
                                    fundCoin={item.currentAmount}
                                    projectGift={JSON.parse(item.projectGift)}
                                    projectStory={JSON.parse(item.projectStory)}
                                    projectSummary={JSON.parse(item.projectSummary)}
                                    index={index++}
                                />
                            ))
                        }

                        {activePage == 3 &&
                            (projectData.slice(6, 9)).map((item, i) => (
                                <ListCard title={JSON.parse(item.projectSummary).projectTitle}
                                    editor={item.projectStarter}
                                    Dday={new Date(item.deadline * 1000).getDate() - new Date().getDate()}
                                    catogory={JSON.parse(item.projectSummary).category}
                                    targetCoin={item.goalAmount}
                                    fundCoin={item.currentAmount}
                                    projectGift={JSON.parse(item.projectGift)}
                                    projectStory={JSON.parse(item.projectStory)}
                                    projectSummary={JSON.parse(item.projectSummary)}
                                    index={index++}
                                />
                            ))
                        }
                    </Grid.Row> : (props.project == "EncoreProject" ?
                        <Grid.Row centered columns={4}>
                            {activePage == 1 &&
                                (EncoreProject.slice(0, 3)).map((item, i) => (
                                    < ListCard title={item.title}
                                        editor={item.editor}
                                        Dday={item.Dday}
                                        catogory={item.catogory}
                                        targetCoin={item.targetCoin}
                                        fundCoin={item.fundCoin}
                                        description={item.description}
                                        link='' />))
                            }

                            {activePage == 2 &&
                                (EncoreProject.slice(3, 6)).map((item, i) => (
                                    < ListCard title={item.title}
                                        editor={item.editor}
                                        Dday={item.Dday}
                                        catogory={item.catogory}
                                        targetCoin={item.targetCoin}
                                        fundCoin={item.fundCoin}
                                        description={item.description}
                                        link='' />))
                            }

                            {activePage == 3 &&
                                (EncoreProject.slice(6, 9)).map((item, i) => (
                                    < ListCard title={item.title}
                                        editor={item.editor}
                                        Dday={item.Dday}
                                        catogory={item.catogory}
                                        targetCoin={item.targetCoin}
                                        fundCoin={item.fundCoin}
                                        description={item.description}
                                        link='' />))
                            }
                        </Grid.Row> : (
                            props.project == "EndProject" ?
                                <Grid.Row centered columns={4}>
                                    {activePage == 1 &&
                                        (EndProject.slice(0, 3)).map((item, i) => (
                                            < ListCard title={item.title}
                                                editor={item.editor}
                                                Dday={item.Dday}
                                                catogory={item.catogory}
                                                targetCoin={item.targetCoin}
                                                fundCoin={item.fundCoin}
                                                description={item.description}
                                                link='' />))
                                    }

                                    {activePage == 2 &&
                                        (EndProject.slice(3, 6)).map((item, i) => (
                                            < ListCard title={item.title}
                                                editor={item.editor}
                                                Dday={item.Dday}
                                                catogory={item.catogory}
                                                targetCoin={item.targetCoin}
                                                fundCoin={item.fundCoin}
                                                description={item.description}
                                                link='' />))
                                    }

                                    {activePage == 3 &&
                                        (EndProject.slice(6, 9)).map((item, i) => (
                                            < ListCard title={item.title}
                                                editor={item.editor}
                                                Dday={item.Dday}
                                                catogory={item.catogory}
                                                targetCoin={item.targetCoin}
                                                fundCoin={item.fundCoin}
                                                description={item.description}
                                                link='' />))
                                    }
                                </Grid.Row> : ""


                        )
                    )
                }


            </Grid>
        </div>
    );


}


//-------------------임시데이터---------------------------------------------------------
//프로젝트별 제목(title) | 창작자(editor) | 디데이(Dday) | 분류(catogory)
//목표금액(targetCoin) | 모금된 금액(fundCoin)

//newProject의 프로젝트 개수는 9개
// const NewProject = [
//     {
//         title: "첫1번째 프로젝트 제목",
//         editor: "창작자1",
//         Dday: 130,
//         catogory: "생활",
//         description: "첫번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 10000,
//         fundCoin: 9000
//     },

//     {
//         title: "두2번째 프로젝트 제목",
//         editor: "창작자2",
//         Dday: 150,
//         catogory: "건강",
//         description: "두번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 1000,
//         fundCoin: 500
//     },
//     {
//         title: "세번째 프로젝트 제목",
//         editor: "창작자3",
//         Dday: 150,
//         catogory: "소품",
//         description: "세3번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 100022,
//         fundCoin: 500
//     },

//     {
//         title: "첫4번째 프로젝트 제목",
//         editor: "창작자1",
//         Dday: 130,
//         catogory: "생활",
//         description: "첫번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 10000,
//         fundCoin: 5000
//     },

//     {
//         title: "두5번째 프로젝트 제목",
//         editor: "창작자2",
//         Dday: 150,
//         catogory: "건강",
//         description: "두번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 1000,
//         fundCoin: 500
//     },

//     {
//         title: "세6번째 프로젝트 제목",
//         editor: "창작자3",
//         Dday: 150,
//         catogory: "소품",
//         description: "세번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 100022,
//         fundCoin: 50034
//     },


//     {
//         title: "두7번째 프로젝트 제목",
//         editor: "창작자2",
//         Dday: 150,
//         catogory: "건강",
//         description: "두번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 1000,
//         fundCoin: 500
//     },

//     {
//         title: "세8번째 프로젝트 제목",
//         editor: "창작자3",
//         Dday: 150,
//         catogory: "소품",
//         description: "세번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 100022,
//         fundCoin: 50034
//     },
//     {
//         title: "세9번째 프로젝트 제목",
//         editor: "창작자3",
//         Dday: 150,
//         catogory: "소품",
//         description: "세번째 프로젝트입니다.아아ㅏ",
//         targetCoin: 100022,
//         fundCoin: 50034
//     },


// ]

const EncoreProject = [
    {
        title: "첫1sdsd번째 프로젝트 제목",
        editor: "창작자1",
        Dday: 130,
        catogory: "생활",
        description: "첫번째 프로젝트입니다.아아ㅏ",
        targetCoin: 10000,
        fundCoin: 7000
    },

    {
        title: "두2번째 프로젝트 제목",
        editor: "창작자2",
        Dday: 150,
        catogory: "건강",
        description: "두번째 프로젝트입니다.아아ㅏ",
        targetCoin: 10000,
        fundCoin: 500
    },
    {
        title: "세번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세3번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },

    {
        title: "첫4번째 프로젝트 제목",
        editor: "창작자1",
        Dday: 130,
        catogory: "생활",
        description: "첫번째 프로젝트입니다.아아ㅏ",
        targetCoin: 10000,
        fundCoin: 5000
    },

    {
        title: "두5번째 프로젝트 제목",
        editor: "창작자2",
        Dday: 150,
        catogory: "건강",
        description: "두번째 프로젝트입니다.아아ㅏ",
        targetCoin: 1000,
        fundCoin: 500
    },

    {
        title: "세6번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },


    {
        title: "두7번째 프로젝트 제목",
        editor: "창작자2",
        Dday: 150,
        catogory: "건강",
        description: "두번째 프로젝트입니다.아아ㅏ",
        targetCoin: 1000,
        fundCoin: 500
    },

    {
        title: "세8번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },
    {
        title: "세9번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },
]


const EndProject = [
    {
        title: "첫1번째 프로젝트 제목",
        editor: "창작자1",
        Dday: 130,
        catogory: "생활",
        description: "첫번째 프로젝트입니다.아아ㅏ",
        targetCoin: 10000,
        fundCoin: 5000
    },

    {
        title: "두2번째 프로젝트 제목",
        editor: "창작자2",
        Dday: 150,
        catogory: "건강",
        description: "두번째 프로젝트입니다.아아ㅏ",
        targetCoin: 1000,
        fundCoin: 500
    },
    {
        title: "세번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세3번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },

    {
        title: "첫4번째 프로젝트 제목",
        editor: "창작자1",
        Dday: 130,
        catogory: "생활",
        description: "첫번째 프로젝트입니다.아아ㅏ",
        targetCoin: 10000,
        fundCoin: 5000
    },

    {
        title: "두5번째 프로젝트 제목",
        editor: "창작자2",
        Dday: 150,
        catogory: "건강",
        description: "두번째 프로젝트입니다.아아ㅏ",
        targetCoin: 1000,
        fundCoin: 500
    },

    {
        title: "세6번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },


    {
        title: "두7번째 프로젝트 제목",
        editor: "창작자2",
        Dday: 150,
        catogory: "건강",
        description: "두번째 프로젝트입니다.아아ㅏ",
        targetCoin: 1000,
        fundCoin: 500
    },

    {
        title: "세8번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },
    {
        title: "세9번째 프로젝트 제목",
        editor: "창작자3",
        Dday: 150,
        catogory: "소품",
        description: "세번째 프로젝트입니다.아아ㅏ",
        targetCoin: 100022,
        fundCoin: 50034
    },
]


export default Pagnation;