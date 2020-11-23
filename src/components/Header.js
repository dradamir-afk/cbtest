import React, {useState} from 'react';

function Header(props){


    let tempValue = { id: "9", firstName: "Ив", lastName: "Ивано", position: 'Менеджер' };

    const AddBoard = ({setData}) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [position, setPosition] = useState();

        const handleClick = () => {
            setData(prevData => [...prevData, {firstName, lastName, position}])
            }
    }
    const [newList,updateData] = useState(props.data);

    function addElement(e) {
        updateData([...newList.map(elem => ({...elem})),{...tempValue}])
      }
    

    return (
        <form>
        <input 
          type='text' 
          placeholder = 'First Name'>
        </input>

        <input 
        type='text' 
        placeholder = 'Last Name'>
        </input>

        <input 
        type='text'         
        placeholder = 'Position'>
        </input>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick = {()=>addElement()}>    
          Add User
        </button>
      </form>
    )
}
  

export default Header;