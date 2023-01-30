import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/esm/Row'
import "./profile.css"

const Profile = () => {
  return (
    <div className="container">
      <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className="col">
              <div className="card-profile-stats d-flex justify-content-center">
                <img src="/man.png" alt="" />
              </div>
            </div>
          </Row>
          <div className='text-center'>
            <h3>Kaushik Das</h3>
            <h4><i class="fa-solid fa-envelope email"></i>&nbsp;:- <span>Test123@gmail.com</span> </h4>
            <h5><i class="fa-solid fa-mobile"></i>&nbsp;:- <span>8119030611</span> </h5>
            <h4><i class="fa-solid fa-person"></i>&nbsp;:- <span>Male</span> </h4>
            <h4><i class="fa-solid fa-location-pin location"></i>&nbsp;:- <span>Tripura</span> </h4>
            <h4>Status&nbsp;:- <span>Active</span> </h4>
            {/* <h5><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Created&nbsp;:- <span>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span> </h5> */}
            {/* <h5> <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Updated&nbsp;:- <span>{userprofile.dateUpdated}</span> </h5> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile