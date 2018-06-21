import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { fetchUsers } from './actions';
import UserCard from '../../components/user_card';
import spinner from '../../assets/cloud_load.gif';

class List extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    }
  }

  static renderSpinner() {
    return (
      <div className="container">
        <img src={spinner} alt="Please wait..." />
      </div>
    );
  }

  renderList() {
    return (
      <div className="container">
        {
          this.props.users.map(u => (<UserCard
            user={u}
            showDetails={this.props.showDetails}
            key={u.id}
          />))
        }
        <Button onClick={() => this.props.fetchUsers(this.props.users)}>Load More...</Button>
      </div>
    );
  }

  render() {
    return this.props.users.length
      ? this.renderList()
      : List.renderSpinner();
  }
}

List.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};

List.defaultProps = {
  users: [],
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: u => dispatch(fetchUsers(u)),
  showDetails: u => dispatch(push(`/${u.login}`)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
