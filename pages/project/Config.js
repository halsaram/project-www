/**************************************************************************************
 * 제목          : 프로젝트 올리기  선물 페이지
 * 소스파일 이름  : pages/project/Config.js
 * 파일설명		   : 프로젝트 시작하기 전 펀딩 및 선물 구성하는 페이지(프로젝트 메뉴바)
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-11-04
 * 최종수정자	   : 최다올
 * 최종수정내용	  :  체크박스 체크 유지
**************************************************************************************/
import Link from 'next/link';
import { Grid, Segment, Button, Form, Input, Divider, Checkbox, List, Radio, TextArea } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader'
import { useState, useEffect } from 'react';
import React, { useReducer, Component } from 'react';
import { inject, observer} from 'mobx-react';

// 리워드 추가하기 버튼을 클릭했을 때 InsertConfig 컴포넌트가 밑에 추가적으로 생김
//(페이지 높이가 계속 늘어남)


//작성되는 대로 로컬에 저장 할 수 있게 함
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
		}
		catch (error) {
			console.log(error);
		}

	};
	return [storedValue, setValue];

}
const buttonText = {
	color : "white"
}


const CreateItem =()=>{
	const [itemValue, setitemValue] = useLocalstorage('');
	const [items, setitem] = useState([])
	const handleChange = e => {

	  setitemValue(e.target.value);
  
	}
  
	const handleSubmit = e => {
  
	  e.preventDefault();    
  
	  const item = {
  
		value: itemValue,
  
		done: false
  
	  } 
  
	  if(!itemValue) return;
  
	  setitem([...items, item]);
  
	  document.getElementById('itemValue').value = ''
  
	}
  
	const handleDelete = e => {
  
	  const { id } = e.target.parentElement;
  
	  items.splice(id, 1)
  
	  setitem([...items]);
  
	}
  
	const handleDone = e => {
  
	  const { id } = e.target.parentElement;
  
	  items[id].done = !items[id].done
  
	  setitem([...items])
  
	}
  
  
  
	return (
	<Segment>
		 <label>최소 후원금액</label>
		<Input /><label>원 이상 밀어주시는 분들께</label>
		<Form className="todo-form" onSubmit={handleSubmit}>
		<label>아이템을 추가하세요</label>
		<Input  id="itemValue" onChange={handleChange} /><Button type="submit">+</Button>
		{
  
			items && items.map((item, i) => (
  
			  <div className="todo-block" key={item.value} id={i}>
  
				{/* <button className={todo.done ? 'done' : 'not-done'} onClick={handleDone}></button> */}
				<List.Item>{item.value}</List.Item><Button className="delete-todo" onClick={handleDelete} >x</Button>
			              
  
			  </div>
  
			))
  
		  } 
		<p>알리고 싶은 내용</p>
		<Input />
		</Form>
	</Segment>
	 
  
	)
  
  }



const InsertConfig = () => {


	const fontSize = {
		fontSize: 12,
		color: "gray"
	}

	// 옵션 체크 여부를 정하는 변수
	const [size, setSize] = useLocalstorage('sizeChecked','') // 옵션이 필요없는 아이템 선택
	const [multiple, setMultiple] = useLocalstorage('colorChecked', '') // 객관식 옵션 선택
	const [delivery, setDelivery] = useLocalstorage('deliveryChecked','')	//배송여부 체크시 입력이 가능한 변수
	const [limit, setLimit] = useLocalstorage('limitChecked','')	//제한수량 체크시 입력이 가능한 변수
	const [sum, setSum] = useLocalstorage('금액', '') 	//최소 후원금액 입력칸 데이터 
	const [rewardName, setRewardname] = useLocalstorage('리워드명', '')	//리워드명 입력칸 데이터
	const [inmessage, setInmessage] = useLocalstorage('메세지', '')	//주관식 옵션 입력칸 데이터
	const [limitnum, setLimitnum] = useLocalstorage('제한수량', '')	//수량 제한 입력칸 데이터
	const [date, setDate] = useLocalstorage('날짜', '')	//날짜 입력칸 데이터


	const storage = {
		size: size,
		multiple: multiple,
		delivery: delivery,
		limit: limit,
		sum: sum,
		rewardName: rewardName,
		inmessage: inmessage,
		limitnum: limitnum,
		date: date
	};

	localStorage.setItem("config", JSON.stringify(storage));

	

	return (
		<Grid columns='equal'>
			<Grid.Column />
			<Grid.Column width={10}>
				<Segment><Grid>
					<Grid.Column floated='left' width={14}>
					{/* 올리는 금액 입력폼 */}
						<Form.Field inline>
							<p>최소 후원금액<span style={fontSize}>
								인기 금액대인 1만원대 선물부터 특별한 의미를 담은 10만원 이상 선물까지, 다양한 금액대로 구성하면 성공률이 더욱 높아집니다. 배송이 필요한 선물의 경우, 배송비 포함된 금액으로 작성해주세요.
								</span></p>
							<Input type='number'
								placeholder='0'
								value={sum}
								name='sum'
								onChange={e => setSum(e.target.value)} />
							<label> 원 이상 밀어주시는 분께 드리는 선물입니다.</label>
							</Form.Field>
						</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 리워드명 입력폼 */}
						<p>리워드명<span style={fontSize}>
							해당 리워드의 이름을 입력하세요</span></p>
							<Input placeholder="예) 병뚜껑스피커, 욜로북"
								value={rewardName}
								name='rewardName'
								onChange={e => setRewardname(e.target.value)} fluid />
						</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 옵션선택체크 및 입력폼 */}
						<p>옵션<span style={fontSize}>
							아이템은 선물에 포함되는 구성 품목을 말합니다. 이 금액대의 선물을 선택한 후원자에게 어떤 아이템들을 얼마나 전달하실건가요?</span></p>
							<Divider />
							{/* 옵션 체크시 -> 칸에 입력이 가능하게 */}
							
							
								
								<Grid.Row columns={2}>

								<Form>
									<Form.Field>
									<Grid.Column>
										<Radio label='옵션이 필요 없는 아이템입니다.' value='a' checked={size=='a'} 
												onChange={(e, { value }) => {setSize(value) }} />
									</Grid.Column>
									</Form.Field>

									<Form.Field>
									<Grid.Column>
										<Radio label='객관식 옵션이 필요한 아이템입니다. (사이즈, 색상 등)' value='b' checked={size == 'b'}
												onChange={(e, { value }) => { setSize(value) }} />
									</Grid.Column>
									<Grid.Column>
											{size == 'b' ?
											<TextArea placeholder="옵션 항목을 입력해 주세요.
									옵션 항목은 줄바꿈으로 구분됩니다.
									예시) 블랙 - 230mm
									화이트 - 240mm"
												
												name="multiple"
												value={multiple}
												maxlength="100"
													onChange={(e, { value }) => setMultiple(value)} fluid />
											: <Input name="multiple" fluid disabled />}
									</Grid.Column>
									</Form.Field>

									<Form.Field>
									<Grid.Column>
											<Radio label='주관식 옵션이 필요한 아이템입니다. (각인, 메시지 등)' value='c' checked={size == 'c'}
												onChange={(e, { value }) => { setSize(value) }} />
									</Grid.Column>
									<Grid.Column>
											{size == 'c' ?
											<Input placeholder="후원자에게 안내할 메시지를 작성해 주세요.
											예시) 사이즈, 메시지 순으로 작성해 주세요."
												value={inmessage}
												name="message"
												onChange={e => setInmessage(e.target.value)} fluid />
											: <Input name="message" fluid disabled />}
									</Grid.Column>
									</Form.Field>
									</Form>

								</Grid.Row>
							
						</Grid.Column>

					<Grid.Column floated='left' width={14}>
						{/* 발송시작일폼 */}
						<p>발송 시작일<span style={fontSize}>
							리워드 제품 발송 시작일을 입력하세요</span></p>
						<Input type="date"
							value={date}
							name='date'
							onChange={e => setDate(e.target.value)} fluid />
					</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 배송조건 체크폼 */}
						<p>배송조건<span style={fontSize}>
							배송을 위한 주소지가 필요합니다.</span></p>
							<Divider />
							<Grid>
								<Grid.Column floated='left' width={7}>
								<Checkbox label='배송이 필요한 선물입니다.' checked={delivery}
										onChange={(e) => {console.log(delivery);
										{ setDelivery(!delivery); }}} />
								</Grid.Column>
							</Grid>
						</Grid.Column>

					<Grid.Column floated='left' width={14}>
						{/* 제한수량 체크폼 */}
						<p>제한 수량<span style={fontSize}>
							리워드 수량을 제한하려면 체크와 수량을 입력하세요.</span></p>
						<Divider />	
						<Grid>
							<Grid.Column floated='left' width={7}>
								<Checkbox label='리워드 수량을 제한합니다.' onChange={()=>{setLimit(!limit)}}/>
							</Grid.Column>
							<Grid.Column floated='right' width={7}>

								{/* 제한수량 입력폼 */}
								<Form.Field inline>
									<label>제한수량 </label>

									{/* 제한수량 여부 체크시 열리는 입력폼 */}
									{limit && true ? <Input type='number' placeholder='0' value={limitnum} onChange={e => setLimitnum(e.target.value)} name='limitnum'/> : <Input placeholder='0' disabled/>}
									<label> 개</label>
								</Form.Field>
							</Grid.Column>
						</Grid>
					</Grid.Column>


					</Grid>			
				</Segment>
			</Grid.Column>
			<Grid.Column />
		</Grid>

	)

 }

const Config = () => {
	const insertConfigs = []
	const [configCount, setConfigCount] = useLocalstorage('선물갯수',1)
	for (let i = 0; i < configCount; i++) {
		insertConfigs.push((<InsertConfig key={i}/>))
	}
	
	const addConfig = () => {
		setConfigCount(configCount + 1)
	}

	return (
		<div>

			{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}

			<ProjectHeader />

			<ProjectLink menus="config" />

			<br /><br />



			{/* 프로젝트의 소제목을 배치한 부분 */}

			<Grid columns='equal'>

				<Grid.Column />

				<Grid.Column width={10}>

					<p>리워드 등록하기</p>

				</Grid.Column>

				<Grid.Column />

			</Grid>



			{/* 프로젝트 내용부분 */}

			{insertConfigs}
			{/* <CreateItem />*/}
			
			<Button onClick={addConfig}>Add</Button>
			<br /><br /><br /><br />
			
			{/* 이전페이지 이동 */}

			<Link as='/프로젝트개요' href={{ pathname: '/project', query: { id: 'summary', title: '프로젝트개요' } }}>

				<Button color='blue' floated='left'><a style={buttonText}>이전</a></Button>

			</Link>



			{/* 다음 페이지 이동 */}

			<Link as='/프로젝트스토리텔링' href={{ pathname: '/project', query: { id: 'storytelling', title: '프로젝트스토리텔링' } }}>

				<Button color='blue' floated='right'><a style={buttonText}>다음</a></Button>

			</Link>



			{/* 정확한 수치전에 예비로 br태그 삽입 */}

			<br /><br /><br /><br />



		</div>
	)
}


export default Config;







// 버튼 클릭시 펀딩작성 부분이 추가된다.onClick=>



//펀딩선택하기 본문 페이지


// @inject('UIStore')
// @observer
// class  Config extends React.Component{

// 	render(){	
		
// 		return(	<div>
// 		{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
// 		<ProjectHeader />
// 		<ProjectLink menus="config"/>
// 		<br /><br />

// 		{/* 프로젝트의 소제목을 배치한 부분 */}
// 		<Grid columns='equal'>
// 			<Grid.Column />
// 			<Grid.Column width={10}>
// 				<p>리워드 등록하기</p>
// 			</Grid.Column>
// 			<Grid.Column />
// 		</Grid>

// 		{/* 프로젝트 내용부분 */}
// 		<InsertConfig />
// 		<Segment>
// 			<p>최소 후원금액</p>
// 			<Input /><p>원 이상 밀어주시는 분들께</p>
// 			<p>아이템을 추가하세요</p>
// 			<Input  /><Button>+</Button>
// 			<p>알리고 싶은 내용</p>
// 			<Input />
// 		</Segment>
		
// 		{/* 이전페이지 이동 */}
// 		<Link as='/p' href='/project?id=summary&title=프로젝트개요'>
// 			<Button color='blue' floated='left'><a style={buttonText}>이전</a></Button>
// 		</Link>

// 		{/* 다음 페이지 이동 */}
// 		<Link as='/p' href='/project?id=storytelling&title=스토리텔링'>
// 			<Button color='blue' floated='right'><a style={buttonText}>다음</a></Button>
// 		</Link>

// 		{/* 정확한 수치전에 예비로 br태그 삽입 */}
// 		<br /><br /><br /><br />

// 	</div>)
// 	}
// }

// export default Config;




