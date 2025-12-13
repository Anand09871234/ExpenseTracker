import React, { useState } from 'react';
import { Table, Button, Form, Badge } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ExpenseList = ({ expenses, deleteExpense, setExpenseToEdit }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredExpenses = expenses.filter(exp => 
        exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="custom-card h-100">
            <h4 className="mb-3" style={{ color: 'var(--headline-color)' }}>Transaction History</h4>
            <Form.Control
                type="text"
                placeholder="Search transactions..."
                className="mb-3"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="table-responsive">
                <Table hover className="align-middle">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredExpenses.map(expense => (
                            <tr key={expense._id}>
                                <td>{expense.description}</td>
                                <td>₹{expense.amount.toFixed(2)}</td>
                                <td><Badge bg="secondary" pill>{expense.category}</Badge></td>
                                <td>
    {expense.description} 
    {expense.isRecurring && (
        <Badge bg="info" className="ms-2" pill style={{ fontSize: '0.6rem' }}>
            Recurring 🔄
        </Badge>
    )}
</td>
                                <td className="text-center">
                                    <Button variant="outline-light" size="sm" className="me-2" onClick={() => setExpenseToEdit(expense)}><FaEdit /></Button>
                                    <Button variant="outline-danger" size="sm" onClick={() => deleteExpense(expense._id)}><FaTrash /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ExpenseList;