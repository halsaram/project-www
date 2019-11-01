import Link from 'next/link';
import { Header, Icon, Image, Input, Menu, Segment, Sidebar } from 'semantic-ui-react'
import React, {useState} from 'react'

const HeaderBar =()=> {
  const [actives, setActives] = useState('');
  return(
    <div>
      <Menu fluid widths={4} inverted compact>
          <Link href='/'>
            <Menu.Item link onClick={()=>setActives('홈')} active={actives === '홈'}>
              <a>홈</a>
            </Menu.Item>
          </Link>
       
          <Link href='/'>
            <Menu.Item link onClick={()=>setActives('카테고리')} active={actives === '카테고리'}>
              <a>카테고리</a>
            </Menu.Item>
          </Link>

          <Link href='/'>
            <Menu.Item link onClick={()=>setActives('새로운 프로젝트')} active={actives === '새로운 프로젝트'}>
              <a>새로운 프로젝트</a>
            </Menu.Item>
          </Link>

          <Link href='/'>
            <Menu.Item link onClick={()=>setActives('성공임박 프로젝트')} active={actives === '성공임박 프로젝트'}>
              <a>성공임박 프로젝트</a>
            </Menu.Item>
          </Link>
    </Menu>   
</div>  
  )   
}
  
  export default HeaderBar;
