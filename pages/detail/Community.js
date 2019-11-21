/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지(Community)
 * 소스파일 이름  : pages/deteile/Community.js
 * 파일설명		   : 프로젝트 상세 커뮤니티 공간(댓글달기 기능)
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-01
 * 최종수정일자 	:
 * 최종수정자	   :
 * 최종수정내용	  :
**************************************************************************************/

import React, { Component } from 'react'
import { Segment, Button, Comment, Form, Container } from 'semantic-ui-react'

const Community = () => (
	<Segment>
		<Container text>
	<Comment.Group size='large'>
		<Comment>
			<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
			<Comment.Content>
				<Comment.Author as='a'>Matt</Comment.Author>
				<Comment.Metadata>
					<div>Today at 5:42PM</div>
				</Comment.Metadata>
				<Comment.Text>How artistic!</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>

		<Comment>
			<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
			<Comment.Content>
				<Comment.Author as='a'>Elliot Fu</Comment.Author>
				<Comment.Metadata>
					<div>Yesterday at 12:30AM</div>
				</Comment.Metadata>
				<Comment.Text>
					<p>This has been very useful for my research. Thanks as well!</p>
				</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
			<Comment.Group>
				<Comment>
					<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
					<Comment.Content>
						<Comment.Author as='a'>Jenny Hess</Comment.Author>
						<Comment.Metadata>
							<div>Just now</div>
						</Comment.Metadata>
						<Comment.Text>Elliot you are always so right :)</Comment.Text>
						<Comment.Actions>
							<Comment.Action>Reply</Comment.Action>
						</Comment.Actions>
					</Comment.Content>
				</Comment>
			</Comment.Group>
		</Comment>

		<Comment>
			<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
			<Comment.Content>
				<Comment.Author as='a'>Joe Henderson</Comment.Author>
				<Comment.Metadata>
					<div>5 days ago</div>
				</Comment.Metadata>
				<Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>

		<Form reply>
			<Form.TextArea />
			<Button content='Add Reply' labelPosition='left' icon='edit' primary />
		</Form>
	</Comment.Group>
		</Container>
	</Segment>
);

export default Community;