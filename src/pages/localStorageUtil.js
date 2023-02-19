const LocalStorageUtil = {

  getFromLocalStorage: (key) => {
    try {
      const users = localStorage.getItem(key);
      if (users) {
        return JSON.parse(users);
      }
      return null;
    } catch (error) {
      console.error(`Error retrieving ${key} from localStorage: ${error.message}`);
      return null;
    }
  },
  pull: () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users || [];
  },
  push: (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  },
  // admins can remove regular users, but not other admins
  removeUser: (userToRemove, currentUser) => {
    if (currentUser.type !== 'admin' || userToRemove.type === 'admin') {
      return;
    }
    const updatedUsers = LocalStorageUtil.pull().filter((user) => {
      return user.email !== userToRemove.email;
    });
    LocalStorageUtil.push(updatedUsers);
  },
  updateVotes(name) {
    let votes = this.pull('parties')
    // eslint-disable-next-line
    const result = votes.map(element => element.name === name ? { ...element, ['votes']: element['votes'] + 1 } : element)
    this.push('parties', result)
    return result
  },
  logout(type) {
    const users = this.pull('users')
    const currentUser = this.pull('user')
    // eslint-disable-next-line
    const result = users.map(element => element.name === currentUser.name ? { 
                                          ...element, 'voted':
                                          currentUser['voted'] } : element)
                                          this.push('users', result)
                                          this.remove('tempvote')
                                          type !== 'admin' && this.remove('user')
                                          },

  votes(operation) {
    let totalVotes = localStorage.getItem('totalVotes')
    if (operation === 'add') {
      totalVotes++
      localStorage.setItem('totalVotes', totalVotes)
    } else {
      totalVotes--
      localStorage.setItem('totalVotes', totalVotes)
    }
  },
  addUser(name, email, password) {
    const users = this.pull('users')
    const newUser = {
      id: `${Math.random()}`,
      name: name,
      email: email,
      password: password,
      type: 'user',
      voted: false,
    }
    users.push(newUser)
    this.push('users', users)
  }
};

export default LocalStorageUtil