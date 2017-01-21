import { Component, PropTypes } from 'react';
import axios from 'axios';
import isEqual from 'lodash/isEqual';
import jsCookie from 'js-cookie';
import mockData from './mock.json';

export default class Fetch extends Component {
  static propTypes = {
    onResponse: PropTypes.func,
    onData: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.func,
    urls: PropTypes.array,
  }

  static defaultProps = {
    onResponse: () => {},
    onData: () => {},
    onError: () => {},
    children: () => {},
    urls: [],
  };

  static defaultProps = { method: 'get' }

  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      response: null,
      data: null,
      error: null,
    };

    this.api = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 5000,
      headers: {
        Authorization: jsCookie.get('token'),
        'x-specialpurpose': 'sentinela',
      },
    });
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shouldFetch) this.fetch();
    else if (!isEqual(this.props.urls, nextProps.urls)) {
      this.fetch();
    }
  }

  componentWillUnmount() {
    this.willUnmount = true;
  }

  request = url => this.api.get(url);

  fetch = () => {
    this.setState({ fetching: true }, () => {
      axios.all(['https://api.github.com/users/jeanbauer']) // this.props.urls.map(url => this.request(url))
      .then(() => { // .then((responses) => {
        if (this.willUnmount) return;

        // Once we have the API up and running we have to delete this line and change l:61 to response instead of res
        const responses = [{ data: mockData }];

        this.setState({
          fetching: false,
          responses,
          data: responses.map(x => x.data),
          error: null,
        }, () => {
          if (this.props.onResponse) {
            this.props.onResponse(null, this.state.response);
          }
          if (this.props.onData) {
            this.props.onData(this.state.data);
          }
        });
      }).catch((error) => {
        if (this.willUnmount) {
          return;
        }
        this.setState({
          fetching: false,
          response: error,
          error,
        }, () => {
          if (this.props.onResponse) {
            this.props.onResponse(this.state.response);
          }
          if (this.props.onError) {
            this.props.onError(this.state.error);
          }
        });
      });
    });
  }

  render() {
    if (!this.props.children) return null;
    return this.props.children({
      fetching: this.state.fetching,
      response: this.state.response,
      data: this.state.data,
      error: this.state.error,
      fetch: this.fetch,
    }) || null;
  }
}
