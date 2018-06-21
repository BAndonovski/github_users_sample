import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import './user_card.css';


const UserDetails = props => (
  <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">{props.user.login}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <div className="row">
        <div className="col-md-2">
          <img src={props.user.avatar_url} alt="avatar" className="user_card_avatar" />
        </div>
        <div className="col-md-4">
          <div>ID: {props.user.id}</div>
          <div>Login: {props.user.login}</div>
          <div>URL: {props.user.html_url}</div>
        </div>
      </div>
    </Panel.Body>
  </Panel >
);

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;
