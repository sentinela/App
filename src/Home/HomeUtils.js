import axios from 'axios';

class HomeUtils {
  constructor(getState) {
    this.state = getState();
  }

  getExpenses() {
    // this will be changed when we have the expenses API up
    const username = this.state.home.github.username;
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }
}

export default HomeUtils;
