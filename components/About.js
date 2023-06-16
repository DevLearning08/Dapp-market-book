import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div>
        <h2 className="section-title">Thông tin đội sản xuất</h2>
        <div className="team-container">
          <div className="team-member">
            <img src='/img/members/z3724710153534_c02d27ab7cd51786128d890574b03af9.jpg' alt="Thân Văn Hoàng" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Thân Văn Hoàng</h3>
              <p className="team-member-role">Front End</p>
              <p className="team-member-info">front-end.</p>
            </div>
          </div>
          <div className="team-member">
            <img src='/img/members/z4417183483794_75c23ea10f22c6952fd139bf8991b40c.jpg' alt="Huỳnh Đức Thành" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Huỳnh Đức Thành</h3>
              <p className="team-member-role">Leader</p>
              <p className="team-member-info">Development Support and Technology Updates for the Team</p>
            </div>
          </div>
          <div className="team-member">
            <img src='/img/members/z4418764576035_577f450d84a3e4ab4405cf4ab9148805.jpg' alt="Nguyễn Thiện Ngôn" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Nguyễn Thiện Ngôn</h3>
              <p className="team-member-role">Back-end</p>
              <p className="team-member-info">Back-end solidity, build and smart contract.</p>
            </div>
          </div>
          <div className="team-member">
            <img src='/img/members/z4417239505154_4ba65ed816df584a207d0419902f2bb4.jpg' alt="Nguyễn Văn Toản" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Nguyễn Văn Toản</h3>
              <p className="team-member-role">Designer</p>
              <p className="team-member-info">Back-end solidity, build and smart contract.</p>
            </div>
          </div>
          <div className="team-member">
            <img src='/img/members/z4431680471424_e16a3bcf9410c88de55a5f98caad8008.jpg' alt="Thân Văn Hoàng" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Phạm Minh Đạt</h3>
              <p className="team-member-role">Backend</p>
              <p className="team-member-info">API.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
