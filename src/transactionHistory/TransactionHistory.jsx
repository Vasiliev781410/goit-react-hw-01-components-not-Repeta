import TransactionItem from "./TransactionItem.jsx";

const TransactionHistory = ({items,}) =>(
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>   
            {items.map(transaction => (<TransactionItem key={transaction.id} item={transaction}/>))}
        </tbody>
    </table>   
  );                     

export default TransactionHistory;
  