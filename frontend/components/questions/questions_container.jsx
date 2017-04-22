import { connect } from 'react-redux';
import QuestionsDisplay from './questions_display'

const mapStateToProps = ({ session }) => {
  debugger
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.hash.slice(2);
  debugger
  return {
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDisplay);


// const wildcard = ownProps.params.wildcard
