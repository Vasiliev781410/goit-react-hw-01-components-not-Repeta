const TransactionItem = ({item}) =>{    
    return ( 
    <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </tr>      
    );
}   

//

export default TransactionItem;