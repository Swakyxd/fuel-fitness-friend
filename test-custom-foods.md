# Custom Food Feature Testing Guide

## Test Scenarios

### 1. Adding Custom Food via Food Search
**Steps:**
1. Go to main page (http://localhost:8080/)
2. Click "Add Food" button
3. Click "Add Custom Food" button
4. Fill in form:
   - Name: "Homemade Pasta"
   - Calories: 350
   - Serving: "1 cup"
5. Click "Add Food"

**Expected Results:**
- Success message appears
- Food is auto-selected in search
- Can add to daily log with portion adjustment

### 2. Adding Custom Food via Management Page
**Steps:**
1. Go to Custom Foods page (http://localhost:8080/custom-foods)
2. Click "Add Custom Food" button
3. Fill in form:
   - Name: "Grandma's Cookies"
   - Calories: 120
   - Serving: "1 cookie"
4. Click "Add Food"

**Expected Results:**
- Success message appears
- Food appears in management list
- Shows date added and custom badge

### 3. Search Integration
**Steps:**
1. Go to main page and click "Add Food"
2. Search for custom food name (e.g., "pasta")
3. Verify custom food appears with "Custom" badge
4. Select and add to daily log

**Expected Results:**
- Custom foods appear in search results
- Distinguished with "Custom" badge
- Can be selected and added normally

### 4. Delete Custom Food
**Steps:**
1. In Food Search, find a custom food
2. Click the trash icon next to it
3. Confirm deletion

**Expected Results:**
- Confirmation dialog appears
- Food is removed from search results
- Food no longer appears in management page

### 5. Export/Import Custom Foods
**Steps:**
1. Go to Custom Foods page
2. Add a few custom foods
3. Click "Export Foods" button
4. Save the JSON file
5. Delete some custom foods
6. Click "Import Foods" and select the saved file

**Expected Results:**
- Export downloads JSON file with custom foods
- Import restores the foods
- Success message shows number of imported foods

### 6. Form Validation
**Steps:**
1. Try to add custom food with:
   - Empty name
   - Zero calories
   - Empty serving size
   - Duplicate name

**Expected Results:**
- Appropriate error messages for each validation failure
- Form prevents submission until all fields are valid
- Duplicate name detection works

### 7. Data Persistence
**Steps:**
1. Add custom foods
2. Refresh the page
3. Close and reopen browser
4. Check if custom foods are still there

**Expected Results:**
- Custom foods persist across page refreshes
- Custom foods persist across browser sessions
- Data is maintained in localStorage

## Manual Testing Checklist

- [ ] Can add custom food via Food Search modal
- [ ] Can add custom food via Custom Foods page
- [ ] Custom foods appear in search results with badges
- [ ] Can delete custom foods from search interface
- [ ] Can delete custom foods from management page
- [ ] Form validation works correctly
- [ ] Export functionality downloads JSON file
- [ ] Import functionality restores custom foods
- [ ] Custom foods persist across browser sessions
- [ ] Navigation between pages works correctly
- [ ] Custom food count badge updates correctly
- [ ] Date tracking shows when foods were added
- [ ] No duplicate food names allowed
- [ ] Success/error messages display appropriately

## Expected File Contents After Testing

### localStorage (custom-foods key)
```json
[
  {
    "id": 10000,
    "name": "Homemade Pasta",
    "calories": 350,
    "serving": "1 cup",
    "isCustom": true,
    "dateAdded": "2024-01-15T10:30:00.000Z"
  },
  {
    "id": 10001,
    "name": "Grandma's Cookies",
    "calories": 120,
    "serving": "1 cookie",
    "isCustom": true,
    "dateAdded": "2024-01-15T10:31:00.000Z"
  }
]
```

### Exported JSON File
Same structure as localStorage content, formatted for easy reading and backup.

## Performance Considerations

- Custom foods are loaded once per component mount
- Search performance remains fast with combined food list
- localStorage operations are synchronous and fast
- Export/import handles large datasets efficiently

## Browser Compatibility

- Works in all modern browsers that support localStorage
- File download/upload works in Chrome, Firefox, Safari, Edge
- No external dependencies required for core functionality
