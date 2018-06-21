import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import './user_card.css';


const UserCard = props => (
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
          <div>Login: {props.user.login}</div>
          <Button onClick={() => props.showDetails(props.user)}>Details</Button>
        </div>
      </div>
    </Panel.Body>
  </Panel >
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default UserCard;
