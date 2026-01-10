import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FormValidator1 from './FormValidator1';
import FormValidator2 from './FormValidator2';

const App = () => {
    const [selectedValidator, setSelectedValidator] = useState('');

    const handleValidatorChange = (e) => {
        setSelectedValidator(e.target.value);
    };

    return (
        <div>
            <select id="validator-select" value={selectedValidator} onChange={handleValidatorChange}>
                <option value="">Select Validator</option>
                <option value="validator1">Form Validator 1</option>
                <option value="validator2">Form Validator 2</option>
            </select>
            <div id="form-container">
                {selectedValidator === 'validator1' && <FormValidator1 />}
                {selectedValidator === 'validator2' && <FormValidator2 />}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('form-container'));