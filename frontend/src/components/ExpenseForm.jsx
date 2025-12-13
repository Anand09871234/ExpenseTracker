import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ExpenseForm = ({ addExpense, updateExpense, expenseToEdit, setExpenseToEdit }) => {
    // State for form fields
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(''); // For the dropdown selection
    const [customCategory, setCustomCategory] = useState(''); // For the 'Other' text input
    const [isRecurring, setIsRecurring] = useState(false);

    // Predefined categories for the dropdown menu
    const categories = ['Food', 'Shopping', 'Transport', 'Utilities', 'Entertainment', 'Other'];

    // Effect to populate form when editing an expense
    useEffect(() => {
        if (expenseToEdit) {
            setDescription(expenseToEdit.description);
            setAmount(expenseToEdit.amount);
            setIsRecurring(expenseToEdit.isRecurring || false);

            // Check if the expense's category is a standard one or custom
            if (categories.includes(expenseToEdit.category)) {
                setCategory(expenseToEdit.category);
                setCustomCategory(''); // Clear custom field
                
            } else {
                setCategory('Other');
                setCustomCategory(expenseToEdit.category);
            }
        } else {
            // Clear the form when not editing
            setDescription('');
            setAmount('');
            setCategory('');
            setCustomCategory('');
            setIsRecurring(false);
        }
    }, [expenseToEdit]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Determine the final category based on the user's selection
        const finalCategory = category === 'Other' ? customCategory : category;

        // Validation to ensure no fields are empty
        if (!description || !amount || !finalCategory) return;

        const expenseData = { description, amount: +amount, category: finalCategory };
        
        if (expenseToEdit) {
            updateExpense(expenseToEdit._id, expenseData);
        } else {
            addExpense(expenseData);
        }

        // Reset all form fields after submission
        setDescription('');
        setAmount('');
        setCategory('');
        setCustomCategory('');
        setExpenseToEdit(null);
        setIsRecurring(false);
    };

    return (
        <div className="custom-card">
            <h4 className="mb-3" style={{ color: 'var(--headline-color)' }}>{expenseToEdit ? 'Edit Expense' : 'Add New Expense'}</h4>
            <Form onSubmit={handleSubmit}>
                {/* New single row for all primary input fields */}
                <Row className="g-3 align-items-end">
                    {/* Description field - now wider */}
                    <Col md={5}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                placeholder="e.g., Dinner with friends" 
                                required 
                            />
                        </Form.Group>
                    </Col>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
        type="checkbox" 
        label="Recurring Expense (Subscription/Bill)" 
        checked={isRecurring}
        onChange={(e) => setIsRecurring(e.target.checked)}
        style={{ color: 'var(--text-color)' }}
    />
</Form.Group>
                    {/* Amount field */}
                    <Col md={2}>
                        <Form.Group>
                            <Form.Label>Amount (₹)</Form.Label>
                            <Form.Control 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                                placeholder="e.g., 1500" 
                                required 
                            />
                        </Form.Group>
                    </Col>
                    {/* Category Dropdown */}
                    <Col md={2}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select 
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select...</option>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {/* Conditionally rendered 'Other' Category Text Input */}
                    {category === 'Other' && (
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Custom Category</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={customCategory} 
                                    onChange={(e) => setCustomCategory(e.target.value)} 
                                    placeholder="Enter category name" 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                            
                    )}
                </Row>
                <div className="mt-4">
                    <Button className="btn-gradient" type="submit">{expenseToEdit ? 'Update Expense' : 'Add Expense'}</Button>
                    {expenseToEdit && <Button variant="secondary" className="ms-2" onClick={() => setExpenseToEdit(null)}>Cancel</Button>}
                </div>
            </Form>
        </div>
    );
};

export default ExpenseForm;