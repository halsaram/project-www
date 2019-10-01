import Header from './Header';

const Layout = props => (
  <div>
    <Header />
    {props.content}
  </div>
);

export default Layout;