import React, { Component } from 'react';
import './App.css';
import { CardFooter, Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import Menu from './StaffList/StaffListComponent';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      staffs: STAFFS,
      

     
    }
   
  }
  render(){
  return (
  <div className='App'>
<Navbar dark color='primary'>
<div className='container'>
<NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
</div>
</Navbar>
<Menu staffs={this.state.staffs} />
<h5>Bấm vào nhân viên để xem thông tin.</h5>
  </div>
  );
  }
  }
  export default App;