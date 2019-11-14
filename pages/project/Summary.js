/**************************************************************************************
 * 제목          : 프로젝트 올리기 개요 페이지
 * 소스파일 이름  : pages/project/Summary.js
 * 파일설명		   : 프로젝트 개요 페이지 / 프로젝트 개요, 프로젝트 창작자 입력하는 페이지
 * 작성자		   : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-11-12
 * 최종수정자	   : 전새희
 * 최종수정내용	  :  ImageUpload
**************************************************************************************/

import React, { useState, Component } from 'react'
import Link from 'next/link';
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader'
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';



// class ImageUpload extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { file: '', imagePreviewUrl: '' };
// 	}

// 	_handleSubmit(e) {
// 		e.preventDefault();
// 		// TODO: do something with -> this.state.file
// 		console.log('handle uploading-', this.state.file);
// 	}

// 	_handleImageChange(e) {
// 		e.preventDefault();

// 		let reader = new FileReader();
// 		let file = e.target.files[0];

// 		reader.onloadend = () => {
// 			this.setState({
// 				file: file,
// 				imagePreviewUrl: reader.result
// 			});
// 		}

// 		reader.readAsDataURL(file)
// 	}

// 	render() {
// 		let { imagePreviewUrl } = this.state;
// 		let $imagePreview = null;
// 		if (imagePreviewUrl) {
// 			$imagePreview = (<img src={imagePreviewUrl} width="180"/>);
// 		} else {
// 			$imagePreview = (<div className="previewText"><Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' /></div>);
// 		}

// 		return (

// 			<div className="previewComponent">
// 				<form onSubmit={(e) => this._handleSubmit(e)}>
// 					<input className="fileInput"
// 						type="file"
// 						accept="image/*"
// 						onChange={(e) => this._handleImageChange(e)} />
// 					{/* <button className="submitButton"
// 						type="submit"
// 						onClick={(e) => this._handleSubmit(e)}>Upload Image</button> */}
// 				</form>
// 				<div className="imgPreview">
// 					{$imagePreview}
// 				</div>
// 			</div>
// 		)
// 	}
// }



class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
			loaded: 0
		}

	}
	checkMimeType = (event) => {
		//getting file object
		let files = event.target.files
		//define message container
		let err = []
		// list allow mime type
		const types = ['image/png', 'image/jpeg', 'image/gif']
		// loop access array
		for (var x = 0; x < files.length; x++) {
			// compare file type find doesn't matach
			if (types.every(type => files[x].type !== type)) {
				// create error message and assign to container   
				err[x] = files[x].type + ' is not a supported format\n';
			}
		};
		for (var z = 0; z < err.length; z++) {// if message not same old that mean has error 
			// discard selected file
			toast.error(err[z])
			event.target.value = null
		}
		return true;
	}
	maxSelectFile = (event) => {
		let files = event.target.files
		if (files.length > 3) {
			const msg = 'Only 3 images can be uploaded at a time'
			event.target.value = null
			toast.warn(msg)
			return false;
		}
		return true;
	}
	checkFileSize = (event) => {
		let files = event.target.files
		let size = 2000000
		let err = [];
		for (var x = 0; x < files.length; x++) {
			if (files[x].size > size) {
				err[x] = files[x].type + 'is too large, please pick a smaller file\n';
			}
		};
		for (var z = 0; z < err.length; z++) {// if message not same old that mean has error 
			// discard selected file
			toast.error(err[z])
			event.target.value = null
		}
		return true;
	}
	onChangeHandler = event => {
		var files = event.target.files
		if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)) {
			// if return true allow to setState
			this.setState({
				selectedFile: files,
				loaded: 0
			})
		}
	}
	onClickHandler = () => {
		const data = new FormData()
		for (var x = 0; x < this.state.selectedFile.length; x++) {
			data.append('file', this.state.selectedFile[x])
		}
		axios.post("http://a50cc827.ngrok.io/upload", data, {
			onUploadProgress: ProgressEvent => {
				this.setState({
					loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
				})
			},
		})
			.then(res => { // then print response status
				toast.success('upload success')
			})
			.catch(err => { // then print response status
				toast.error('upload fail')
			})
	}

	render() {
		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} width="180"/>);
		} else {
			$imagePreview = (<div className="previewText"><Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' /></div>);
		}

		return (
			<div class="container">
				<div class="row">
					<div class="offset-md-3 col-md-6">
						<div class="form-group files">
							<input type="file" class="form-control" multiple onChange={this.onChangeHandler} />
						</div>
						<div className="imgPreview">
 							{$imagePreview}
		 				</div>
						<div class="form-group">
							<ToastContainer />
							<Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>

						</div>

						<button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

					</div>
				</div>
			</div>
		);
	}
}



function useLocalstorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	})
	const setValue = value => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
			console.log(key, '==>', valueToStore);
		} catch (error) {
			console.log(error);
		}
	};
	return [storedValue, setValue];

}

const buttonText = {
	color: "white"
}

const Summary = () => {

	// 카테고리항목변수
	const options = [
		{ key: '건강', value: '건강', text: '건강' },
		{ key: '생활', value: '생활', text: '생활' }
	]


	// 작은 안내문 글자
	const fontSize = {
		fontSize: 12,
		color: "gray"
	}

	const [projectTitle, setProjectTitle] = useLocalstorage('프로젝트명', '')
	const [keyword, setKeyword] = useLocalstorage('짧은제목', '')
	const [fundingGoal, setFundingGoal] = useLocalstorage('목표금액', '')
	const [category, setCategory] = useLocalstorage('카테고리', '')
	const [deadline, setDeadline] = useLocalstorage('종료일', '')
	const [creator, setCreator] = useLocalstorage('창작자명', '')
	const [websites1, setWebsites1] = useLocalstorage('창작자소셜주소1', '')
	const [websites2, setWebsites2] = useLocalstorage('창작자소셜주소2', '')


	const handleChange = (e, { value }) => setCategory(value)



	return (

		<div>

			<Form>
				{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
				<ProjectHeader />
				<ProjectLink menus="summary" />
				<br /><br />

				{/* 프로젝트의 소제목을 배치한 부분 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						<p>프로젝트 개요 작성하기</p>
					</Grid.Column>
					<Grid.Column />
				</Grid>


				{/* 프로젝트 입력폼 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						{/* 이미지를 등록하는 요소 */}
						<Segment>
							<Grid>
								<Grid.Column width={4}>
									<Segment placeholder textAlign="center">
										<Grid>
											{/* <Grid.Row>
										<Grid.Column>
											<Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>
										</Grid.Column>
										</Grid.Row>
										<Grid.Row>
										<Grid.Column>
											<Button color="blue">업로드</Button>
										</Grid.Column>
										</Grid.Row> */}
											<ImageUpload />
										</Grid>
									</Segment>
								</Grid.Column>



								{/* 프로젝트 정보폼 */}
								<Grid.Column width={12}>
									<p>프로젝트명<span style={fontSize}>
										프로젝트 성격과 리워드를 짐작할 수 있게 간결하고 직관적으로 작성해주세요
											</span></p>
									<Form.Field inline>
										<Input placeholder='예) 더 가벼워진 미래식사, 밀스 라이트'
											value={projectTitle}
											name="projectTitle"
											onChange={e => setProjectTitle(e.target.value)} maxlength="40" fluid />
									</Form.Field>

									<br />
									<p>짧은제목<span style={fontSize}>
										검색, 알림 등에 사용되는 짧은 제목을 작성해주세요
											</span></p>
									<Form.Field inline>
										<Input placeholder='예) 병뚜껑스피커, 욜로북'
											value={keyword}
											name="keyword"
											onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
									</Form.Field>

									<br />
									<p>목표금액<span style={fontSize}>
										마감일 자정 기준 목표 금액 미달시 펀딩은 취소됩니다.(리워드 평균 목표 금액 : 100만원)
											</span></p>
									<Form.Field inline>
										<Input placeholder='0'
											value={fundingGoal}
											type="number"
											name="fundingGoal"
											onChange={e => setFundingGoal(e.target.value)} maxlength="8" fluid />
									</Form.Field>

									<br />
									<p>카테고리<span style={fontSize}>
										오픈 후, 노출될 카테고리를 선택해 주세요.
											</span></p>
									<Form.Field inline>
										<Dropdown clearable value={category} options={options} onChange={handleChange} selection fluid />
									</Form.Field>

									<br />
									<p>종료일<span style={fontSize}>
										프로젝트 진행 기간은 평균 30일입니다.
											</span></p>
									<Form.Field inline>
										<Input
											type="date"
											value={deadline}
											name="deadline"
											onChange={e => setDeadline(e.target.value)} fluid />
									</Form.Field>
								</Grid.Column>
							</Grid>
						</Segment>
					</Grid.Column>
					<Grid.Column />
				</Grid>


				{/* 창작자 제목을 배치한 부분 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						<p>창작자 정보 작성하기</p>
					</Grid.Column>
					<Grid.Column />
				</Grid>


				{/* 창작자 입력폼 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						{/* 창작자이미지 */}
						<Segment>
							<Grid>
								<Grid.Column width={4} textAlign="center">
									<Image src='/static/test/testlist.png' size='medium' circular />
									<br />
									<Label>창작자명</Label>
								</Grid.Column>

								{/* 창작자 정보폼 */}
								<Grid.Column width={12}>
									<p>창작자 소개<span style={fontSize}>
										프로젝트를 창작하는 창작자 본인에 대한 소개를 입력하세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='간단히 40자 이내로 소개하시오'
											value={creator}
											name="creator"
											onChange={e => setCreator(e.target.value)} maxlength="40" fluid />
									</Form.Field>

									<br /><br />
									<p>소셜 네트워크<span style={fontSize}>
										서포터가 확인할 수있는 창작자님의 페이스북, 인스타그램 등을 입력하세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='http://'
											value={websites1}
											name="websites1"
											onChange={e => setWebsites1(e.target.value)} maxlength="8" fluid />
										<br />
										<Input placeholder='http://'
											value={websites2}
											name="websites2"
											onChange={e => setWebsites2(e.target.value)} maxlength="8" fluid />
									</Form.Field>
								</Grid.Column>
							</Grid>
						</Segment>
					</Grid.Column>
					<Grid.Column />
				</Grid>
				<Link as='/p' href='/project?id=config&title=구성'>
					<Button color='blue' floated='right'><a style={buttonText}>다음</a></Button>
				</Link>
				<br /><br /><br /><br />
			</Form>

		</div>
	);
}

export default Summary;