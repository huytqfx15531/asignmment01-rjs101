import React, { useState } from "react";
import { Card, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const luongCB = 3000000;
const luongGio = 200000;

function RenderSalary ({salary}) {
    return(
        <Card>
            <CardTitle className="p-3 bg-white rounded m-2">{salary.name}</CardTitle>
            <CardBody>
                <CardText>Mã nhân viên: {salary.id}</CardText>
                <CardText>Hệ số lương: {salary.salaryScale}</CardText>
                <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
                <CardText className="bg-light p-2 shadow">Lương: {(salary.salaryScale * luongCB + salary.overTime*luongGio).toFixed(0)}</CardText>
            </CardBody>
        </Card>     
    );
}

const Salary = (props) => {
    const [sortSalary]=useState(false)
    
    const salary = props.staffs.sort((a,b)=>sortSalary ? a.salaryScale : b.salaryScale).map((ss) => {
        return(
            <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
                <RenderSalary salary={ss} />
            </div>
        )
    });
    

    return(
        <div className="container">            
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>                
            </div>
            
           
            <div className="row shadow mb-3">
                {salary}
            </div>
        </div>
    );
}

export default Salary;