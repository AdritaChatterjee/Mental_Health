import React, { useState } from 'react';
import './Dropdown.css';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="container">
      <h2>Choice Your <br />Medical Condition</h2>
      <div class="form-group">
        <label for="verticalRadios">Vertical Radio Buttons:</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 1" /> Option 1
          </label>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 2" /> Option 2
          </label>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 3" /> Option 3
          </label>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 4" /> Option 4
          </label>
          <label class="radio-label">
            <input type="radio" name="verticalRadios" value="Option 5" /> Option 5
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="horizontalRadios">Horizontal Radio Buttons:</label>
        <div class="radio-group horizontal">
          <label class="radio-label">
            <input type="radio" name="horizontalRadios" value="Option A" /> Option A
          </label>
          <label class="radio-label">
            <input type="radio" name="horizontalRadios" value="Option B" /> Option B
          </label>
          <label class="radio-label">
            <input type="radio" name="horizontalRadios" value="Option C" /> Option C
          </label>
        </div>
      </div>
      <button class="btn-continue">Continue</button>
    </div>
  );
}

export default DropdownButton;
