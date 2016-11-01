import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as HomeActions from './HomeActions';
import './Home.scss';
import logo from '../../assets/images/logo.png';
// <img src={logo} alt="Logo" />

const card = spending => spending.map((s, k) =>
  <div className="card" key={k}>
    {s.name}
  </div>
);

class Home extends Component {
  componentWillMount() {
    this.props.actions.getExpenses();
  }
  renderText() {
    if (this.props.text) {
      return (<p>this.props.text</p>);
    }
    return null;
  }
  render() {
    return (
      <div className="home">
        <header>
          <button>Feedback</button>
          <button>Filtrar</button>
        </header>
        <section className="container">
          {this.renderText()}
          {card(this.props.spending)}
        </section>
        <footer>
          <button>
            <Link to="/perfil" className="btn btn-sm btn-danger">Meu perfil</Link>
          </button>
        </footer>
      </div>
    );
  }
}

Home.propTypes = {
  text: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  spending: PropTypes.any
};

export default connect(
  state => ({
    text: state.home.text,
    spending: state.home.spending
  }),
  dispatch => ({ actions: bindActionCreators(HomeActions, dispatch) })
)(Home);
