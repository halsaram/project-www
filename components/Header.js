import Link from 'next/link';
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