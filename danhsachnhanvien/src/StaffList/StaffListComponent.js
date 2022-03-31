import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import dateFormat from 'dateformat'; 
import { DEPARTMENTS } from '../shared/staffs';
  
    

    

    class Menu extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                selectedStaffs: null
            }
        }
    
        onStaffsSelect(staffs) {
            this.setState({ selectedStaffs: staffs});
        }
    
        renderStaffs(staffs) {
            if (staffs != null)
                return(
                    <Card>
                         <CardTitle>Họ và tên: {staffs.name}</CardTitle>
                       <CardBody>
                       <CardText>Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
                       <CardText>Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
                       <CardText>Phòng ban: {staffs.department.name}</CardText>
                       <CardText>Số ngày nghĩ còn lại: {staffs.annualLeave}</CardText>
                       <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                      
                       </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
    
        render() {
            const menu = this.props.staffs.map((staffs) => {
                return (
                  <div  className="col-12 col-md-5 m-1">
                    <Card key={staffs.id}
                      onClick={() => this.onStaffsSelect(staffs)}>
                     <CardTitle>{staffs.name}</CardTitle>
                    </Card>
                  </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        {this.renderStaffs(this.state.selectedStaffs)}
                      </div>
                    </div>
                </div>
            );
        }
        
    }
    
     
export default Menu;