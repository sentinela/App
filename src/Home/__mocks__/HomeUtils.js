class HomeUtilsMock {
  getUserInfo() {
    return new Promise(resolve => resolve({
      data: {
        login: 'MockedLogin',
        repos_url: 'MockedRepoUrl'
      }
    }));
  }
}

export default HomeUtilsMock;
