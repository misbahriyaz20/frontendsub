
import React, { useState } from 'react';
import CustomerList from './components/list';     
import CustomerDetails from './components/details'; 
import styles from './App.module.css'; 
import { Customer } from './types/customer'; 

const mockCustomers: Customer[] = [
  { id: 1, name: 'Customer 01', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
  { id: 2, name: 'Customer 02', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
  { id: 3, name: 'Customer 03', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  { id: 4, name: 'Customer 04', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  { id: 5, name: 'Customer 05', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  { id: 6, name: 'Customer 06', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  { id: 7, name: 'Customer 07', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  { id: 8, name: 'Customer 08', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  { id: 9, name: 'Customer 09', desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
  
];

function App() {
  
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  
  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className={styles.app}>
     
      <header className={styles.fullWidthHeader}>
        <h1>Customers</h1>
      </header>
  
      {}
      <div className={styles.content}>
        {}
        <div className={styles.sidebarContainer}>
          {}
          <aside className={styles.sidebar}>
            <CustomerList customers={mockCustomers} onSelectCustomer={handleSelectCustomer} />
          </aside>
        </div>
  
        {}
        <main className={styles.mainContent}>
          <CustomerDetails customer={selectedCustomer} />
        </main>
      </div>
    </div>
  );
  
}

export default App;
