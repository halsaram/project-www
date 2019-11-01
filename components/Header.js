import Link from 'next/link';
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