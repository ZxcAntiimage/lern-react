import React from 'react';
import Header from './components/Header';
import Users from './components/users';
import AddUser from './components/AddUser';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      users : [
        {
            id: 1,
            firstName: "Mark",
            lastName: "Antonov",
            Age: 24,
            Bio: "Lorem ipsum dolor sit amet consectetur.",
            isHappy: true
        },
        {
            id: 2,
            firstName: "John",
            lastName: "Antonov",
            Age: 25,
            Bio: "Lorem ipsum dolor sit amet consectetur.",
            isHappy: false,
        },
    ]
    }
    this.addUser = this.addUser.bind(this);
  }
 
  render(){
    return(
      <>
     <Header title="Список пользователей"/>
     <main>
        <Users users={this.state.users}/>
     </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>

      </>
    )
  }

  addUser(user){
    const id = this.state.users.length + 1;
    this.setState({users:[...this.state.users, {id, ...user}]})
  }

}
export default App;