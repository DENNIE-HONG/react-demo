import React from 'react';
import ComponentHeader from '../components/layout/header';
import UserList from '../components/userList';
class App extends React.Component {
  render () {
    return (
      <div>
        <ComponentHeader keywords="react练习" />
        <h1>测试</h1>
        <UserList />
      </div>
    );
  }
}
export default App;
