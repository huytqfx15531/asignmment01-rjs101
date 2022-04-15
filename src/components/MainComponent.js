import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffDetail from './StaffDetailComponent';
import StaffList from './StaffListComponent';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
      staffs: state.staffs,
      departments: state.departments,
      staffsSalary: state.staffsSalary,
    };
  };
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            department: DEPARTMENTS
        }
    }
    render() {
        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
            );
        };
        const addStaff = (staff) => {
            const id = Math.floor(Math.random() * 10000 + 1);
            const newStaff = { id, ...staff };
            this.setState({
              staffs: [...this.state.staffs, newStaff],
            });
            console.log(newStaff);
            console.log(this.state.staffs);
          };
      
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/staff/:staffId' component={StaffWithId} />
                    <Route
                        path="/staff"
                        component={() => (
                            <StaffList onAdd={addStaff} staffs={this.state.staffs} />
                        )}
                    />
                    <Route path='/department' component={() => <Department departments={this.state.department} />} />
                    <Route path='/salary' component={() => < Salary staffs={this.state.staffs} />} />
                    <Redirect to='/staff' />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps)(Main));