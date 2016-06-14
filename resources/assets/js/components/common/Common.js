import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

import { Grid, Row, Col} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import * as commonActions from '../../actions/commonActions';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class Common extends Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  toggleDrawer() {
    this.props.actions.toggleDrawer();
  }

  closeSnackbar() {
    this.props.actions.closeSnackbar();
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <AppBar
            title="Perlur Business Stack"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggleDrawer}
          />
          <Drawer
            docked={false}
            open={this.props.Drawer.open}
            onRequestChange={(open) => this.props.actions.toggleDrawer({open})}
          >
            <ListItem onTouchTap={(open) => this.props.actions.toggleDrawer({open})}><Link to="/login">Login Screen</Link></ListItem>
            <ListItem onTouchTap={(open) => this.props.actions.toggleDrawer({open})}><Link to="/">Sample UI collection page</Link></ListItem>
            <Divider />
            <List>
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
              <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
              <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            </List>
            <Divider />
            <List>
              <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
            </List>
          </Drawer>
          <Snackbar
            open={this.props.Snackbar.open}
            message={this.props.Snackbar.message}
            action="undo"
            autoHideDuration={20000}
            onRequestClose={this.closeSnackbar}
          />
          <Dialog
            modal={false}
            open={this.props.Dialog.open}
          >
            <CircularProgress
              style={{
                margin: '0 auto'
              }}
            />
          </Dialog>
        </Col>
      </Row>
    );
  }
}

Common.propTypes = {
  Drawer: PropTypes.object.isRequired,
  Snackbar: PropTypes.object.isRequired,
  Dialog: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    Drawer: state.commonReducer.Drawer,
    Snackbar: state.commonReducer.Snackbar,
    Dialog: state.commonReducer.Dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commonActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Common);
