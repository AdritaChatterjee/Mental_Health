import React, { useState } from 'react';
import './Dropdown.css';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="container">
      <h2>Choose Your <br />Medical Condition</h2><br></br>
      <div class="form-group">
        
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 1" />  Depression
          </label><br></br>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 2" /> Anxiety
          </label><br></br>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 3" /> Bipolarity
          </label><br></br>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 4" /> Eating Disorders
          </label><br></br>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 5" /> Neurodevelopment Disorders
          </label><br></br>
        </div>
      </div>
      <div class="form-group">
        <label for="horizontalRadios">Choose your age group:</label>
        <div class="radio-group horizontal">
          <label class="radio-label">
            
            <br></br><input type="radio" name="horizontalRadios" value="Option A" /> 1-10
          </label>
          <label class="radio-label">
            <br></br><input type="radio" name="horizontalRadios" value="Option B" /> 11-18
          </label>
          <label class="radio-label">
          <br></br><input type="radio" name="horizontalRadios" value="Option C" /> 18+
          </label>
        </div>
      </div>
      <button class="btn-continue">Continue</button>
    </div>
  );
}

export default DropdownButton;
