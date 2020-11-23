import React,{useState} from 'react'

let data = [
    {id: "1", firstName: "Иван", lastName:"Иванов", position:'Менеджер'},
    {id: "2", firstName: "Пётр", lastName:"Петров", position:'Сисадмин'},
    {id: "3", firstName: "Сара", lastName:"Конор", position:'Бухгалтер'},
    {id: "4", firstName: "Фёдор", lastName:"Федоров", position:'Архитектор'},
    {id: "5", firstName: "Алексей", lastName:"Алексеев", position:'Оператор'},
    {id: "6", firstName: "Марина", lastName:"Маринина", position:'Менеджер'},
    {id: "7", firstName: "Михаил", lastName:"Михайлов", position:'Директор'},
    {id: "8", firstName: "Валентина", lastName:"Иванова", position:'Художник'}
  ];




 
  

  function Table(props) {

      const [newList,updateData] = useState(data);

      function addElement(element){
        updateData([...newList, element])
      }
      
      function deleteElement(e){
        e.preventDefault();
        updateData((tempState)=>{
          let listItems = [];
          tempState.forEach(element => {
            if(element.id !==e.target.attributes[2].value){
              listItems.push(element)
            }
          })
          return listItems
        })
      }

      var listItems = [];
      // console.log(newList)
      newList.forEach(element => {
          listItems.push(
              <tr key={element.id}>
                  <td><input type="text" readOnly value={element.id} /></td>
                  <td><input type="text" readOnly value={element.firstName} /></td>
                  <td><input type="text" readOnly value={element.lastName} /></td>
                  <td><input type="text" readOnly value={element.position} /></td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      number={element.id}
                      onClick={deleteElement}>
                      Delete
                    </button>
                    <button
                    type="button"
                    className="btn btn-outline-success"                    
                    >                                        
                    Edit
                    </button>
                  </td>
              </tr>
          );
      });
    return (listItems)
  }
export default Table;