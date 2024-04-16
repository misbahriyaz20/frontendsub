
import React from 'react';
import styles from '../styles/list.module.css';

type Customer = {
  id: number;
  name: string;
  desc: string;
};

type CustomerListProps = {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
};

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer }) => {
  return (
    <div className={styles.customerList}>
      {customers.map((customer) => (
        <div key={customer.id} onClick={() => onSelectCustomer(customer)} className={styles.customerCard}>
          <h3>{customer.name}</h3>
          <p>{customer.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
