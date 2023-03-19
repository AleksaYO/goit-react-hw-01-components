import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export function Transactions(transactions) {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr className={css['tr-title']}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionsItem array={transactions} />
      </tbody>
    </table>
  );
}

function TransactionsItem({ array: { transactions } }) {
  return transactions.map(({ id, type, amount, currency }) => {
    return (
      <tr className={css['tr-item']} key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
