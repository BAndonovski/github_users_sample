import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { fetchUsers } from './actions';
import UserCard from '../../components/user_card';
import spinner from '../../assets/cloud_load.gif';

class List extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        {!this.props.users.length &&
          <img src={spinner} alt="Please wait..." />
        }

        {this.props.users.length &&
          this.props.users.map(u => (<UserCard
            user={u}
            showDetails={this.props.showDetails}
            key={u.id}
          />))
        }
      </div>
    );
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
  fetchUsers: () => dispatch(fetchUsers()),
  showDetails: u => dispatch(push(`/${u.login}`)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
