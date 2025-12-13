import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

const BudgetProgress = ({ expenses, budgets, setBudget }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Food');
    const [newLimit, setNewLimit] = useState('');

    const standardCategories = ['Food', 'Shopping', 'Transport', 'Utilities', 'Entertainment'];
    // Add 'Total Monthly' at the start so it appears first
    const categories = ['Total Monthly', ...standardCategories, 'Other'];

    const handleSave = () => {
        if(!newLimit) return;
        setBudget(selectedCategory, newLimit);
        setShowModal(false);
        setNewLimit('');
    };

    return (
        <div className="custom-card h-100">
            {/* Header with Title on Left and Small Button on Right */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0" style={{ color: 'var(--headline-color)', fontSize: '1.25rem', fontWeight: '600' }}>Budget Goals</h4>
                <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => setShowModal(true)}
                    style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}
                >
                    <FaCog className="me-1" /> Set Limits
                </Button>
            </div>

            <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '5px' }}>
                {categories.map(cat => {
                    let spent = 0;

                    if (cat === 'Total Monthly') {
                        // Sum up ALL expenses regardless of category
                        spent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
                    } else if (cat === 'Other') {
                        // For 'Other', sum up everything that ISN'T a standard category
                        spent = expenses
                            .filter(e => !standardCategories.includes(e.category))
                            .reduce((acc, curr) => acc + curr.amount, 0);
                    } else {
                        // Standard calculation
                        spent = expenses
                            .filter(e => e.category === cat)
                            .reduce((acc, curr) => acc + curr.amount, 0);
                    }
                    
                    const budgetObj = budgets.find(b => b.category === cat);
                    const limit = budgetObj ? budgetObj.limit : 0;
                    
                    const percent = limit > 0 ? (spent / limit) * 100 : 0;

                    // Determine color based on percentage
                    let barColor = '#2cb67d'; // Green (Safe)
                    if (percent > 75) barColor = '#feca57'; // Yellow (Warning)
                    if (percent > 100) barColor = '#ff6b6b'; // Red (Over budget)

                    // Always show Total Monthly, even if 0, so users know they can set it
                    if (cat !== 'Total Monthly' && limit === 0 && spent === 0) return null;

                    return (
                        <div key={cat} className="mb-4">
                            {/* Flex container to separate Category and Amount */}
                            <div className="d-flex justify-content-between align-items-end mb-2" style={{ fontSize: '1.1rem' }}>
                                <span style={{ 
                                    fontWeight: cat === 'Total Monthly' ? '700' : '500', 
                                    color: cat === 'Total Monthly' ? 'var(--primary-color)' : 'var(--headline-color)' 
                                }}>
                                    {cat}
                                </span>
                                <span>
                                    <span style={{ fontWeight: '600' }}>₹{spent}</span> 
                                    <span className="text-muted ms-1" style={{ fontSize: '0.95rem' }}>/ ₹{limit > 0 ? limit : '∞'}</span>
                                </span>
                            </div>
                            
                            {/* Custom Progress Bar - Increased Height */}
                            <div style={{ height: '12px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', width: '100%', overflow: 'hidden' }}>
                                <div style={{
                                    height: '100%',
                                    width: `${percent > 100 ? 100 : percent}%`,
                                    backgroundColor: barColor,
                                    borderRadius: '6px',
                                    transition: 'width 0.5s ease-in-out'
                                }} />
                            </div>
                            {/* Add a separator line after Total Monthly for visual separation */}
                            {cat === 'Total Monthly' && (
                                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '1.5rem 0 1rem 0' }} />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered contentClassName="bg-dark text-white">
                <Modal.Header closeButton closeVariant="white" className="border-secondary">
                    <Modal.Title>Set Budget Limit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select 
                            value={selectedCategory} 
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-dark text-white border-secondary"
                            style={{ fontSize: '1rem' }}
                        >
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Monthly Limit (₹)</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={newLimit} 
                            onChange={(e) => setNewLimit(e.target.value)}
                            className="bg-dark text-white border-secondary"
                            placeholder="e.g. 5000"
                            style={{ fontSize: '1rem' }}
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className="border-secondary">
                            <Button variant="outline-light" onClick={() => setShowModal(false)}>Close</Button>
                            <Button className="btn-gradient" onClick={handleSave}>Save Budget</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
    );
};

export default BudgetProgress;