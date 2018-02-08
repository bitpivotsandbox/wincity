import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderMessage from 'components/HeaderMessage';
import { fetchMessage } from 'actions/message';
import { propTypes } from 'reducers/message';
import routes from 'routes/';

class App extends React.Component {
  static propTypes = {
    message: propTypes.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch, message: { isFetched } } = this.props;
    if (!isFetched) dispatch(fetchMessage());
  }

  render() {
    const { message: { message } } = this.props;

    return (
      <div>
        <HeaderMessage message={message} />
        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => ({ message });
export default withRouter(connect(mapStateToProps)(App));
