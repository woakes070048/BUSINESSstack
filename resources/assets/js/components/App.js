// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Common from './common/Common';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Grid } from 'react-bootstrap';


class App extends React.Component {

  render() {
    return (
      <Grid fluid={true}>
        <Common />
        {this.props.children}
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps)(App);
