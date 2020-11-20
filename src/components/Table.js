import React from 'react'

const data = [
    {id: "1", firstName: "Иван", lastName:"Иванов", position:'Менеджер'},
    {id: "2", firstName: "Пётр", lastName:"Петров", position:'Сисадмин'},
    {id: "3", firstName: "Сара", lastName:"Конор", position:'Бухгалтер'},
    {id: "4", firstName: "Фёдор", lastName:"Федоров", position:'Архитектор'},
    {id: "5", firstName: "Алексей", lastName:"Алексеев", position:'Оператор'},
    {id: "6", firstName: "Марина", lastName:"Маринина", position:'Менеджер'},
    {id: "7", firstName: "Михаил", lastName:"Михайлов", position:'Директор'},
    {id: "8", firstName: "Валентина", lastName:"Иванова", position:'Художник'}

];
function ListTable(props) {
    var listItems = [];
    data.forEach(element => {
        listItems.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.position}</td>
            </tr>
        );
    });
  return (listItems)
}
return (
    <div className='table'>
    <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <ListTable/>
    </tbody>
</div>
    
)
// export default props =>(
//     <table className='table'>
//     <thead>
//         <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Position</th>
//             <th>Action</th>
//         </tr>
//     </thead>
//     <tbody>
//         {props.data.map(item =>(
//             <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.firstName}</td>
//                 <td>{item.lastName}</td>
//                 <td>{item.position}</td>
//             </tr>
//         ))}
//     </tbody>
// </table>
// );
// const Table = (props) => (
//     <table className='table'>
//         <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Position</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>{data.id}</td>
//                 <td>{data.firstName}</td>
//                 <td>{data.lastName}</td>
//                 <td>{data.position}</td>
//             </tr>
//         </tbody>
//     </table>
// )

export default Table;