import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import UserDetails from '../../components/user_details';
import { fetchUser, receivedUser } from './actions';

class Details extends React.Component {
  componentDidMount() {
    this.props.fetch(this.props.pathname);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    return (
      <div className="container">
        <UserDetails user={this.props.user} />
        <Button onClick={() => this.props.goBack()}>Back</Button>
      </div>
    );
  }
}

Details.propTypes = {
  pathname: PropTypes.string.isRequired,
  user: PropTypes.object,
  goBack: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

Details.defaultProps = {
  user: {},
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(push('/')),
  fetch: login => dispatch(fetchUser(login)),
  clear: () => dispatch(receivedUser({})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));
