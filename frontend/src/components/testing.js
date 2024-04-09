import React, { useState, useEffect } from 'react';

function testing() {
    const [ingredients, setIngredients] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Function to fetch ingredient list data from backend
    const fetchIngredients = async () => {
        // Make a request to the backend API endpoint to fetch ingredient list data
        const response = await fetch('/api/ingredients');
        const data = await response.json();
        setIngredients(data);
    };

    // Fetch initial ingredient list data when component mounts
    useEffect(() => {
        fetchIngredients();
    }, []);

    // Function to handle form submission for submitting new label
    const handleSubmitNewLabel = async (newLabel) => {
        // Make a request to the backend API endpoint to update the label in S3 bucket
        await fetch('/api/updateLabel', {
            method: 'POST',
            body: JSON.stringify({ newLabel }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Close the modal after submitting
        setShowModal(false);

        // Fetch updated ingredient list data
        fetchIngredients();
    };

    return (
        <div>
            {/* Ingredient list UI */}
            {ingredients.map((ingredient, index) => (
                <div key={index}>{ingredient.label}</div>
            ))}

            {/* Modal for submitting new label */}
            {showModal && (
                <div className="modal">
                    {/* Form for submitting new label */}
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const newLabel = e.target.elements.newLabel.value;
                        handleSubmitNewLabel(newLabel);
                    }}>
                        <input type="text" name="newLabel" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}

            {/* Button to open modal */}
            <button onClick={() => setShowModal(true)}>Add Label</button>
        </div>
    );
}

export default testing;