import Link from 'next/link';
<<<<<<< HEAD
import { Header, Icon, Image, Input, Menu, Segment, Sidebar } from 'semantic-ui-react'


const HeaderBar =()=> (
  
<div>
  <Menu fluid widths={4}>
    <Menu.Item>
      <Link href='/'>
        <a>홈</a>
      </Link>
    </Menu.Item>
        
    <Menu.Item
    name='카테고리'
    />
    <Menu.Item
    name='새로운 프로젝트'
    />
    <Menu.Item
    name='성공임박 프로젝트'
    />
  </Menu>
</div>     
)
  
  export default HeaderBar;
=======
import React from 'react'
import { withRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'

const HeaderBar = ({ router: { pathname } }) => (
  <div>
    <Menu>
      <Menu.Item active={pathname === '/'}>
        <Link href='/'>
          <a>HOME</a>
        </Link>
      </Menu.Item>
      <Menu.Item active={pathname === '/cate'}>
        <Link as='/cate' href='/'>
          <a>카테고리</a>
        </Link>
      </Menu.Item>
      <Menu.Item active={pathname === '/new'}>
        <Link as='/new' href='/'>
          <a>새로운프로젝트</a>
        </Link>
      </Menu.Item>
      <Menu.Item active={pathname === '/cate'}>
        <Link as='/last' href='/'>
          <a>성공임박프로젝트</a>
        </Link>
      </Menu.Item>
    </Menu>
  </div>
)

export default withRouter(HeaderBar);
>>>>>>> 81fe8da41cd06c899b310905b67c15afc7d2fdba
