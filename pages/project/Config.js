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
import { Grid, Segment, Button, Form, Input, Divider, Checkbox, List } from 'semantic-ui-react'
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

	// 옵션 체크 여부를 정하는 변수
	const [size, setSize] = useLocalstorage('sizeChecked','')
	const [color, setColor] = useLocalstorage('colorChecked','')
	const [message, setMessage] = useLocalstorage('messageChecked','')
	const [etc, setEtc] = useLocalstorage('etcChecked','')
	const [delivery, setDelivery] = useLocalstorage('deliveryChecked','')	//배송여부 체크시 입력이 가능한 변수
	const [limit, setLimit] = useLocalstorage('limitChecked','')	//제한수량 체크시 입력이 가능한 변수
	const [sum, setSum] = useLocalstorage('금액', '') 	//금액 입력칸 데이터 
	const [rewardName, setRewardname] = useLocalstorage('리워드명', '')	//리워드명 입력칸 데이터
	const [insize, setInsize] = useLocalstorage('사이즈', '')	//사이즈 입력칸 데이터
	const [incolor, setIncolor] = useLocalstorage('색상', '')	//색상 입력칸 데이터
	const [inmessage, setInmessage] = useLocalstorage('메세지', '')	//메세지 입력칸 데이터
	const [inetc, setInetc] = useLocalstorage('기타', '')	//기타 입력칸 데이터
	const [deliveryfee, setDeliveryfee] = useLocalstorage('배송료', '')	//배송료 입력칸 데이터
	const [limitnum, setLimitnum] = useLocalstorage('제한수량', '')	//수량 제한 입력칸 데이터
	const [date, setDate] = useLocalstorage('날짜', '')	//날짜 입력칸 데이터


	return (
		<Grid columns='equal'>
			<Grid.Column />
			<Grid.Column width={10}>
				<Segment><Grid>
					<Grid.Column floated='left' width={7}>
					{/* 올리는 금액 입력폼 */}
						<Form.Field inline>
							<label>금 액 </label>
							<Input type='number'
								placeholder='0'
								value={sum}
								name='sum'
								onChange={e => setSum(e.target.value)} />
								<label> 원</label>
							</Form.Field>
						</Grid.Column>

						<Grid.Column floated='right' width={7}>




						
						</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 리워드명 입력폼 */}
							<p>리워드명</p>
							<p>해당 리워드의 이름을 입력하세요</p>
							<Input placeholder="예) 병뚜껑스피커, 욜로북"
								value={rewardName}
								name='rewardName'
								onChange={e => setRewardname(e.target.value)} fluid />
						</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 옵션선택체크 및 입력폼 */}
							<p>옵션</p>
							<p>옵션이 필요한 상품의 경우 옵션체크 해주세요.</p>
							<Divider />
							{/* 체크박스 체크시 -> 칸에 입력이 가능하게 */}
							<Grid divided='vertically'>
								<Grid.Row columns={2}>
									<Grid.Column width={4}>
										<Checkbox label='사이즈' checked={size}
											onChange={(e) => { console.log(size);
											  setSize(!size); }} />
									</Grid.Column>
									<Grid.Column width={11}>
										{size && true ?
											<Input value={insize}
												name="size"
												onChange={e => setInsize(e.target.value)} fluid />
											: <Input name="size" fluid disabled />}
									</Grid.Column>

									<Grid.Column width={4}>
										<Checkbox label='색상' checked={color}
											onChange={(e) => { console.log(color);
											  setColor(!color); }} />
									</Grid.Column>
									<Grid.Column width={11}>
										{color && true ?
											<Input value={incolor}
												name="color"
												onChange={e => setIncolor(e.target.value)} fluid />
											: <Input name="color" fluid disabled />}
									</Grid.Column>
									<Grid.Column width={4}>
										<Checkbox label='작성메시지' checked={message}
											onChange={(e) => { console.log(message);
											  setMessage(!message); }} />
									</Grid.Column>
									<Grid.Column width={11}>
										{message && true ?
											<Input value={inmessage}
												name="message"
												onChange={e => setInmessage(e.target.value)} fluid />
											: <Input name="message" fluid disabled />}
									</Grid.Column>

									<Grid.Column width={4}>
										<Checkbox label='기타' checked={etc}
											onChange={(e) => { console.log(etc);
											  setEtc(!etc); }} />
									</Grid.Column>
									<Grid.Column width={11}>
										{etc && true ?
											<Input value={inetc}
												name="etc"
												onChange={e => setInetc(e.target.value)} fluid />
											: <Input name="etc" fluid disabled />}
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 배송조건 체크폼 */}
							<p>배송조건</p>
							<p>배송을 위한 주소지가 필요하다면 체크와 배송료를 입력하세요</p>
							<Divider />
							<Grid>
								<Grid.Column floated='left' width={7}>
									<Checkbox label='배송을 위한 주소지가 필요합니다.' checked={delivery}
										onChange={(e) => {console.log(delivery);
										{ setDelivery(!delivery); }}} />
								</Grid.Column>
							{/* 배송료 입력폼 */}	
							<Grid.Column floated='right' width={7}>
								<Form.Field inline>
									<label>배송료 </label>
									{/* 배송을 위한 주소지가 필요합니다 체크시 열리는 입력폼 */}
									{delivery&&true ? <Input placeholder='0' value={deliveryfee} onChange={e => setDeliveryfee(e.target.value)} name='deliveryfee'/> : <Input placeholder='0' disabled/>}
									<label> 원</label>
								</Form.Field>
							</Grid.Column>
						</Grid>
					</Grid.Column>

					<Grid.Column floated='left' width={14}>
						{/* 제한수량 체크폼 */}
						<p>제한수량</p>	
						<p>리워드 수량을 제한하려면 체크와 수량을 입력하세요.</p>		
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
									{limit&&true ? <Input placeholder='0' value={limitnum} onChange={e => setLimitnum(e.target.value)} name='limitnum'/> : <Input placeholder='0' disabled/>}
									<label> 개</label>
								</Form.Field>
							</Grid.Column>
						</Grid>
					</Grid.Column>

						<Grid.Column floated='left' width={14}>
							{/* 발송시작일폼 */}
							<p>발송 시작일</p>
							<p>리워드 제품 발송 시작일을 입력하세요</p>
							<Input type="date"
								value={date}
								name='date'
								onChange={e => setDate(e.target.value)} fluid />
						</Grid.Column>
					</Grid>			
				</Segment>
			</Grid.Column>
			<Grid.Column />
		</Grid>

	)

 }

const Config = () => (

	<div>

		{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}

		<ProjectHeader />

		<ProjectLink menus="config"/>

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

		<InsertConfig />
		{/* <CreateItem />
		 */}

		{/* 이전페이지 이동 */}

		<Link as='/p' href='/project?id=summary&title=프로젝트개요'>

			<Button color='blue' floated='left'><a style={buttonText}>이전</a></Button>

		</Link>



		{/* 다음 페이지 이동 */}

		<Link as='/p' href='/project?id=storytelling&title=스토리텔링'>

			<Button color='blue' floated='right'><a style={buttonText}>다음</a></Button>

		</Link>



		{/* 정확한 수치전에 예비로 br태그 삽입 */}

		<br /><br /><br /><br />



	</div>



);



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




