# Unit Conversion Feature Testing Guide

## Test Scenarios

### 1. Simple Mode Calculation
**Steps:**
1. Go to main page and click "Add Food"
2. Search for "Boiled rice (Uble chawal)" (117 cal per 100g)
3. Select the food item
4. Stay on "Simple" tab
5. Enter "2.5" in the serving size input
6. Verify calculation shows 292.5 calories (117 × 2.5)

**Expected Results:**
- Simple tab is active by default
- Input accepts decimal values
- Calculation: 117 × 2.5 = 292.5 calories (rounded to 293)
- Add Food button shows calculated calories
- Food entry shows "2.5 100g" as serving size

### 2. Advanced Mode - Weight Conversion
**Steps:**
1. Select "Boiled rice (Uble chawal)" (117 cal per 100g)
2. Switch to "Advanced" tab
3. Enter amount: 250
4. Select unit: "grams (g)"
5. Verify calculation shows 292.5 calories

**Expected Results:**
- Advanced calculator interface appears
- Amount input accepts 250
- Unit dropdown shows weight options
- Calculation: 250g = 2.5 × 100g = 292.5 calories
- Real-time calculation updates as you type
- Add Food button shows 293 calories

### 3. Advanced Mode - Volume Conversion
**Steps:**
1. Search for "Hot tea (Garam Chai)" (16 cal per 100g)
2. Switch to "Advanced" tab
3. Enter amount: 1
4. Select unit: "cups"
5. Verify calculation (1 cup = 236.6ml = 2.366 × 100ml)

**Expected Results:**
- Volume units appear in dropdown
- 1 cup converts to ~237ml
- Calculation: 16 × 2.366 = ~38 calories
- Unit information shows cup conversion details

### 4. Advanced Mode - Count/Piece Conversion
**Steps:**
1. Search for "Chapati/Roti" (202 cal per 100g)
2. Switch to "Advanced" tab
3. Enter amount: 3
4. Select unit: "pieces"
5. Verify calculation shows 606 calories (202 × 3)

**Expected Results:**
- Piece units available in dropdown
- Direct multiplication for count units
- Calculation: 202 × 3 = 606 calories
- No base unit conversion for pieces

### 5. Unit Validation and Error Handling
**Steps:**
1. Try entering negative amount (-5)
2. Try entering zero amount (0)
3. Try entering very large amount (50000)
4. Try entering non-numeric values

**Expected Results:**
- Error message for negative amounts
- Error message for zero amounts
- Error message for amounts > 10,000
- Input validation prevents non-numeric entry
- Add Food button disabled for invalid inputs

### 6. Quick Amount Buttons
**Steps:**
1. Select any food item
2. Switch to "Advanced" tab
3. Click quick amount buttons: 0.5, 1, 2, 5
4. Verify amount input updates correctly

**Expected Results:**
- Clicking 0.5 sets amount to 0.5
- Clicking 1 sets amount to 1
- Clicking 2 sets amount to 2
- Clicking 5 sets amount to 5
- Calculations update automatically

### 7. Unit Information Display
**Steps:**
1. Select any food item
2. Switch to "Advanced" tab
3. Click "Show Unit Information" button
4. Verify conversion information is displayed

**Expected Results:**
- Unit information panel expands
- Shows common conversions (1 kg = 1000g, etc.)
- Lists available units for the food type
- Educational content about measurements

### 8. Custom Food with Unit Guidance
**Steps:**
1. Click "Add Food" → "Add Custom Food"
2. Fill in name and calories
3. Click the info button next to serving size
4. Verify unit guidance appears

**Expected Results:**
- Info button shows unit helper
- Examples for weight, volume, and count units
- Tips for accurate serving size entry
- Common serving size examples displayed

### 9. Tab Switching Behavior
**Steps:**
1. Select a food item
2. Enter values in Simple mode (e.g., 2.5)
3. Switch to Advanced mode
4. Enter different values
5. Switch back to Simple mode

**Expected Results:**
- Tab switching works smoothly
- Values are preserved when switching tabs
- Calculations update based on active tab
- Add Food button reflects current tab's calculation

### 10. Real-time Calculation Updates
**Steps:**
1. Select food item and switch to Advanced mode
2. Start typing amount slowly (e.g., 2, then 5, then 0)
3. Change unit selection
4. Verify calculations update in real-time

**Expected Results:**
- Calculations update as you type each digit
- Unit changes immediately recalculate calories
- No lag or delay in updates
- Smooth user experience

## Manual Testing Checklist

### Basic Functionality
- [ ] Simple mode multiplier calculation works
- [ ] Advanced mode unit conversion works
- [ ] Tab switching between modes works
- [ ] Real-time calculation updates work
- [ ] Add Food button shows correct calories

### Unit Conversions
- [ ] Weight units convert correctly (g, kg, oz, lb)
- [ ] Volume units convert correctly (ml, l, cups, tbsp, tsp)
- [ ] Count units work correctly (pieces, slices, servings)
- [ ] Conversion factors are accurate
- [ ] Base unit calculations are correct

### Validation & Error Handling
- [ ] Amount validation prevents invalid inputs
- [ ] Error messages are clear and helpful
- [ ] Add Food button disabled for invalid inputs
- [ ] Large amounts are rejected appropriately
- [ ] Decimal inputs are handled correctly

### User Interface
- [ ] Calculator interface is intuitive
- [ ] Unit dropdown is easy to use
- [ ] Quick amount buttons work
- [ ] Unit information is helpful
- [ ] Mobile interface is usable

### Integration
- [ ] Works with all database foods
- [ ] Works with custom foods
- [ ] Food entries show correct serving information
- [ ] Daily log displays accurate data

## Expected Conversion Examples

### Weight Conversions (Base: 100g)
- 250g → 2.5 × base calories
- 1kg → 10 × base calories
- 1oz → 0.283 × base calories
- 1lb → 4.536 × base calories

### Volume Conversions (Base: 100ml)
- 250ml → 2.5 × base calories
- 1l → 10 × base calories
- 1 cup → 2.366 × base calories
- 1 tbsp → 0.148 × base calories
- 1 tsp → 0.049 × base calories

### Count Conversions
- 2 pieces → 2 × base calories
- 3 slices → 3 × base calories
- 1.5 servings → 1.5 × base calories

## Common Test Foods

### Weight-based Foods
- **Boiled rice**: 117 cal per 100g
- **Chapati/Roti**: 202 cal per 100g
- **Paneer curry**: 177 cal per 100g

### Volume-based Foods
- **Hot tea**: 16 cal per 100ml
- **Milk**: Various milk-based items
- **Lassi**: 19-36 cal per 100ml

### Count-based Foods
- **Idli**: 138 cal per piece
- **Samosa**: 577 cal per piece
- **Gulab Jamun**: 586 cal per piece

## Performance Considerations

- Calculations should be instant (< 100ms)
- Unit dropdown should load quickly
- Tab switching should be smooth
- No memory leaks with frequent calculations
- Responsive on mobile devices

## Browser Compatibility

- Works in Chrome, Firefox, Safari, Edge
- Mobile browsers support touch interactions
- Dropdown menus work on all platforms
- Number inputs handle decimal places correctly
