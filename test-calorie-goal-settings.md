# Calorie Goal Settings Testing Guide

## Test Scenarios

### 1. Quick Goal Setting via Stats Card
**Steps:**
1. Go to main page (http://localhost:8080/)
2. Click on the "Daily Goal" card (middle card in stats section)
3. Modal should open with current goal pre-filled
4. Change goal to 1800 and click "Save"
5. Close modal and verify stats update

**Expected Results:**
- Modal opens with calorie goal settings
- Current goal (2000) is pre-filled in input
- Success message appears after saving
- Stats cards update to show new goal (1800)
- Progress bar recalculates based on new goal
- "Remaining calories" updates accordingly

### 2. Full Settings Page Access
**Steps:**
1. Go to main page
2. Click "Settings" button in top-right corner
3. Should navigate to `/settings` page
4. Verify all settings components are visible

**Expected Results:**
- Navigation to settings page works
- Calorie goal settings section is visible
- Current goal is displayed correctly
- Recommended goals section is available
- Data management options are present

### 3. Recommended Goals Selection
**Steps:**
1. Go to settings page
2. Click "Show Recommendations" button
3. Click on "Weight Loss (Women)" option (1200 calories)
4. Verify input field updates to 1200
5. Click "Save" to apply

**Expected Results:**
- Recommendations expand when clicked
- 8 different goal options are shown
- Clicking a recommendation updates the input field
- Goal description is helpful and clear
- Save button becomes enabled when value changes

### 4. Goal Validation
**Steps:**
1. Try to set goal to 500 (too low)
2. Try to set goal to 15000 (too high)
3. Try to set goal to 1500.5 (decimal)
4. Try to set goal to empty/zero

**Expected Results:**
- Error message for goal below 800 calories
- Error message for goal above 10,000 calories
- Error message for non-whole numbers
- Error message for empty/invalid input
- Save button remains disabled for invalid inputs

### 5. Settings Export/Import
**Steps:**
1. Set goal to 2200 calories
2. Click "Export Settings" button
3. Save the downloaded JSON file
4. Change goal to 1900 calories
5. Click "Import Settings" and select the saved file
6. Verify goal returns to 2200

**Expected Results:**
- Export downloads a JSON file with current settings
- File contains correct goal value and timestamp
- Import successfully restores previous settings
- Success message confirms import
- Goal updates to imported value

### 6. Reset to Default
**Steps:**
1. Set goal to any non-default value (e.g., 1500)
2. Click "Reset to Default" button
3. Confirm the reset action
4. Verify goal returns to 2000

**Expected Results:**
- Confirmation dialog appears
- Goal resets to 2000 calories
- Success message confirms reset
- All other settings return to defaults

### 7. Data Persistence
**Steps:**
1. Set goal to 2300 calories
2. Refresh the page
3. Close and reopen browser
4. Check if goal is still 2300

**Expected Results:**
- Goal persists across page refreshes
- Goal persists across browser sessions
- Settings are maintained in localStorage

### 8. Real-time Updates
**Steps:**
1. Add some food entries to reach ~1000 calories consumed
2. Set goal to 1500 calories
3. Verify progress bar and remaining calories update
4. Change goal to 2500 calories
5. Verify calculations update again

**Expected Results:**
- Progress percentage recalculates immediately
- Remaining calories update correctly
- Progress bar color changes appropriately
- All stats cards reflect new goal

### 9. Mobile Responsiveness
**Steps:**
1. Open application on mobile device or resize browser
2. Test goal setting functionality
3. Verify all buttons and inputs are accessible

**Expected Results:**
- Settings interface is mobile-friendly
- All buttons are easily clickable
- Text is readable on small screens
- Modal dialogs fit properly

### 10. Navigation and Back Button
**Steps:**
1. Go to settings page
2. Change goal but don't save
3. Click back arrow to return to main page
4. Go to settings again and verify unsaved changes are lost

**Expected Results:**
- Back navigation works correctly
- Unsaved changes are not persisted
- Warning about unsaved changes is shown
- Settings page loads with current saved values

## Manual Testing Checklist

### Basic Functionality
- [ ] Can set custom calorie goal via stats card click
- [ ] Can access full settings page via navigation
- [ ] Can select from recommended goals
- [ ] Goal validation prevents invalid values
- [ ] Settings persist across browser sessions

### Data Management
- [ ] Export downloads valid JSON file
- [ ] Import restores settings correctly
- [ ] Reset returns to default values
- [ ] Error handling for invalid import files

### User Experience
- [ ] Success/error messages display appropriately
- [ ] Real-time updates work across all components
- [ ] Mobile interface is usable
- [ ] Navigation between pages works smoothly
- [ ] Loading states are handled properly

### Integration
- [ ] Progress calculations update with new goals
- [ ] Food logging works with custom goals
- [ ] Stats cards reflect current goal
- [ ] Daily summaries use correct goal

## Expected localStorage Content

### Settings Key: 'user-settings'
```json
{
  "dailyCalorieGoal": 2000,
  "lastUpdated": "2024-01-15T10:30:00.000Z"
}
```

### After Setting Custom Goal (e.g., 1800)
```json
{
  "dailyCalorieGoal": 1800,
  "lastUpdated": "2024-01-15T11:45:00.000Z"
}
```

## Common Issues to Test

### Edge Cases
- Very low goals (800-1000 calories)
- Very high goals (5000+ calories)
- Rapid goal changes
- Network interruptions during save

### Browser Compatibility
- localStorage availability
- File download/upload functionality
- Modal dialog behavior
- Responsive design breakpoints

### Performance
- Large number of food entries with goal changes
- Frequent goal updates
- Export/import of settings
- Page load times with stored settings

## Success Criteria

✅ **All basic functionality works without errors**
✅ **Data persistence is reliable**
✅ **User interface is intuitive and responsive**
✅ **Validation prevents unsafe goal values**
✅ **Export/import maintains data integrity**
✅ **Real-time updates work across all components**
✅ **Mobile experience is fully functional**
