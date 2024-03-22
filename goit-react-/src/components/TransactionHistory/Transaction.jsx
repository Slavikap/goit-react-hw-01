import {TransactionWrapper, TransactionTab, TransactionTabHead, TransactionTabRow, TransactionTabHeader, TransactionTabBody, TransactionItemRow } from "./Transaction.styled";

export default function Transaction({transactions}) {
    return (
      <TransactionWrapper>
      <TransactionTab>
        <TransactionTabHead>
          <TransactionTabRow>
            <TransactionTabHeader>Type</TransactionTabHeader>
            <TransactionTabHeader>Amount</TransactionTabHeader>
            <TransactionTabHeader>Currency</TransactionTabHeader>
          </TransactionTabRow>
        </TransactionTabHead>
        <TransactionTabBody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TransactionItemRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionItemRow>
          ))}
        </TransactionTabBody>
      </TransactionTab>
      </TransactionWrapper>
    );
  }