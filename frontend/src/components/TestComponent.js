// import { Link } from 'react-router-dom'; 
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import IngredientUploadComponent from './IngredientUploadComponent';
const TestComponent = () => {
    return (
        <Routes>
        <Route path="/ingredientlist" element={<IngredientUploadComponent />} />
    
        </Routes>
    );
};

export default TestComponent; 