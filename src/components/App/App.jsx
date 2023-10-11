import {Phonebook} from 'components/Phonebook/Phonebook'
import { Component } from 'react';
import { nanoid } from 'nanoid';
import {PhoneList} from 'components/PhoneList/PhoneList'
import{Filter} from 'components/Filter/Filter'
export class App extends Component {

  state = {
contacts: [
    {id: 'id-1', firstName: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', firstName: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', firstName: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', firstName: 'Annie Copeland', number: '227-91-26'},
  ],  firstName: '',
    number: '',
    filter:'',
  }
  
  addList = newList => {
    this.setState(prevState => ({
      contacts:[...prevState.contacts,{ ...newList, id:nanoid()}]
    }))
  }

  onRemove = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contacts)=>contacts.id!==id)
    }))
  }

  handleFilter = (evt) => {
    this.setState({filter: evt.target.value})
  }

  onContactFilter = () => {
     const { filter, contacts } = this.state
    const filterText = filter.toLowerCase()
    
    return contacts.filter(({firstName})=> firstName.toLowerCase().includes(filterText))
  }
  render() {
  
const contactsFilter = this.onContactFilter()

  return (<div>
    <Phonebook onAdd={this.addList} />
    <Filter value={this.state.filter} onChange={this.handleFilter}></Filter>
    <PhoneList contacts={contactsFilter}
      onRemove={this.onRemove} />
   </div>

);
  };
  }
