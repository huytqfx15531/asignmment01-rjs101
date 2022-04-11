import React from "react";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';


function RenderStaffItem({ staff }) {
    return (
        <Link to={`/staff/${staff.id}`}>
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardBody>
                    <CardSubtitle>{staff.name}</CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    )
}


const StaffList = (props) => {
    
    //Dùng hàm sort để sắp xếp,map để kéo toàn bộ mảng ra màn hình
    const staffList = props.staffs.map((staff) => {
            return (
                <div className='col-6 col-md-4 col-lg-2 mt-3 mb-3' key={staff}>
                    <RenderStaffItem staff={staff} onClick={props.onClick}/>
                </div>
            );
        });

    //Render giao diện Staff list
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-3">
                    <h3>Nhân viên</h3>
                </div>
                <div className="col-12">
                    <hr />
                </div>

            </div>
            <div className="row shadow mb-5 mt-5">
                {staffList}
            </div>
        </div>
    )
}


export default StaffList;