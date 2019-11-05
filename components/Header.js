import Link from 'next/link';
import { Header, Icon, Image, Input, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React, {useState} from 'react'


const HeaderBar =()=> {
  const [actives, setActives] = useState('');
  return(
    <div>
      <Menu fluid widths={4} inverted compact>
          <Link as='/' href={{ pathname: '/', query: { id: 'home', title: '홈' } }}>
            <Menu.Item name='홈' link onClick={()=>setActives('홈')} active={actives === '홈'} />
          </Link>
        
          <Link as='/' href={{ pathname: '/', query: { id: 'cate', title: '카테고리' } }}>
            <Menu.Item name='카테고리' link onClick={()=>setActives('카테고리')} active={actives === '카테고리'} />
          </Link>

          <Link as='/' href={{ pathname: '/', query: { id: 'new', title: '새로운 프로젝트' } }}>
            <Menu.Item name='새로운 프로젝트' link onClick={()=>setActives('새로운 프로젝트')} active={actives === '새로운 프로젝트'} />
          </Link>

          <Link as='/' href={{ pathname: '/', query: { id: 'imit', title: '성공임박 프로젝트' } }}>
            <Menu.Item name='성공임박 프로젝트' link onClick={()=>setActives('성공임박 프로젝트')} active={actives === '성공임박 프로젝트'} />
          </Link>
    </Menu>   
</div>  
  )   
}
  
  export default HeaderBar;
