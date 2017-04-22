import React from 'react';
import { Link, withRouter } from 'react-router';


class QuestionsDisplay extends React.Component {
	constructor(props) {
    super(props);
      this.state = {}
    }
  componentWillReceiveProps(newProps){
    if (newProps.route !== this.props.route){
      this.state = { username: "", password: "", email:"", errors:[]};
      this.props.clear()
    }
  }
  render() {
    return (<div> Does this display</div>)
  }

}

export default withRouter(QuestionsDisplay);
