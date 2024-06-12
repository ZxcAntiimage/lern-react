import React from 'react';

class AddUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            Bio: "",
            Age: 1,
            isHappy: false,
        }
    }
  render(){
    return(
      <form>
            <input placeholder='Ваше имя' onChange={(e) => 
                this.setState({firstName: e.target.value})}/>

            <input placeholder='Ваша фамилия' onChange={(e) => 
                this.setState({lastName: e.target.value})} />

            <textarea placeholder='Кратко о вас' onChange={(e) => 
                this.setState({Bio: e.target.value})}></textarea>

            <input placeholder='Ваш возраст' onChange={(e) => 
                this.setState({Age: e.target.value})}/>

            <label htmlFor="isHappy">Вы счастливы?</label>
            <input type='checkbox' id="isHappy" onChange={(e) => 
                this.setState({isHappy: e.target.checked})}/>

            <button type="button" onClick={() => this.props.onAdd({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                Bio: this.state.Bio,
                Age: this.state.Age,
                isHappy: this.state.isHappy,
            })}>
                Добавить
            </button>

      </form>
    )
  }
}
export default AddUser;