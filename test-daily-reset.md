# Daily Reset Functionality Testing Guide

## Test Scenarios

### 1. **Basic Daily Reset Test**
**Objective**: Verify that the system correctly detects and handles day transitions

**Steps**:
1. Add several food entries to today's log
2. Note the total calories and entry count
3. Manually change system date to tomorrow (or wait for midnight)
4. Refresh the application or wait for periodic check
5. Verify reset notification appears
6. Check that today's entries are cleared
7. Verify yesterday's data is saved in history

**Expected Results**:
- ✅ Toast notification: "New Day Started!"
- ✅ Today's food log is empty
- ✅ Yesterday's data appears in Daily Statistics history
- ✅ Weekly stats include yesterday's data

### 2. **Data Preservation Test**
**Objective**: Ensure no data is lost during day transitions

**Steps**:
1. Add multiple food entries with different units (ml, g, pieces)
2. Record exact calories and serving information
3. Trigger day reset (date change or manual test)
4. Check Daily Statistics → Show History
5. Verify yesterday's summary matches recorded data

**Expected Results**:
- ✅ Total calories match exactly
- ✅ Entry count is correct
- ✅ All food entries preserved in summary
- ✅ Timestamps maintained correctly

### 3. **Periodic Check Test**
**Objective**: Verify automatic detection works while app is running

**Steps**:
1. Open application before midnight
2. Add some food entries
3. Keep application open past midnight
4. Wait up to 5 minutes for periodic check
5. Observe automatic reset behavior

**Expected Results**:
- ✅ Reset detected within 5 minutes of midnight
- ✅ Notification appears automatically
- ✅ UI updates to show new day
- ✅ No user action required

### 4. **Multiple Day Tracking Test**
**Objective**: Test system behavior over several days

**Steps**:
1. Day 1: Add food entries, note total calories
2. Day 2: Verify Day 1 data in history, add new entries
3. Day 3: Check both previous days in history
4. Verify weekly statistics calculation
5. Check tracking streak display

**Expected Results**:
- ✅ Each day's data preserved separately
- ✅ Weekly average calculated correctly
- ✅ Highest/lowest days identified correctly
- ✅ Tracking streak shows correct count

### 5. **Edge Case Testing**

#### **5a. App Closed During Day Transition**
**Steps**:
1. Add entries, close app before midnight
2. Open app the next day
3. Verify reset detection on app launch

**Expected Results**:
- ✅ Reset detected on first launch
- ✅ Previous day's data saved correctly

#### **5b. Multiple Day Gap**
**Steps**:
1. Use app on Day 1, add entries
2. Don't use app for several days
3. Open app on Day 5
4. Verify only Day 1 data in history (no empty days)

**Expected Results**:
- ✅ Only days with data appear in history
- ✅ No empty day summaries created
- ✅ Gap in dates handled correctly

#### **5c. System Clock Changes**
**Steps**:
1. Add entries with current date
2. Change system clock backward
3. Verify app handles time inconsistency
4. Change clock forward past midnight
5. Test reset behavior

**Expected Results**:
- ✅ No data corruption from clock changes
- ✅ Reset triggers appropriately
- ✅ Data integrity maintained

## Manual Testing Procedures

### **Simulating Day Change (For Testing)**

#### **Method 1: Browser DevTools**
```javascript
// In browser console, temporarily override date
const originalDate = Date;
Date = class extends originalDate {
  constructor(...args) {
    if (args.length === 0) {
      super();
      // Add 1 day to current time
      this.setDate(this.getDate() + 1);
    } else {
      super(...args);
    }
  }
  
  static now() {
    return new originalDate().getTime() + (24 * 60 * 60 * 1000);
  }
};

// Refresh page to trigger reset check
location.reload();
```

#### **Method 2: localStorage Manipulation**
```javascript
// Set last active date to yesterday
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
localStorage.setItem('last-active-date', yesterday.toISOString().split('T')[0]);

// Refresh to trigger reset
location.reload();
```

### **Verification Checklist**

#### **Before Reset**:
- [ ] Food entries visible in today's log
- [ ] Total calories calculated correctly
- [ ] Daily progress shows current data
- [ ] Last active date matches today

#### **After Reset**:
- [ ] Today's log is empty
- [ ] Total calories reset to 0
- [ ] Progress bar reset to 0%
- [ ] Toast notification appeared
- [ ] Previous day in history section
- [ ] Weekly stats updated
- [ ] Last active date updated

#### **Data Integrity**:
- [ ] No entries lost or duplicated
- [ ] Calorie calculations remain accurate
- [ ] Timestamps preserved correctly
- [ ] Custom foods still available
- [ ] User settings unchanged

## Automated Testing (Future Implementation)

### **Unit Tests**
```typescript
describe('Daily Reset Functionality', () => {
  test('detects new day correctly', () => {
    // Mock yesterday's date
    // Call checkAndResetIfNewDay()
    // Verify returns true
  });
  
  test('preserves data during reset', () => {
    // Add test entries
    // Trigger reset
    // Verify summary created correctly
  });
  
  test('handles multiple day gaps', () => {
    // Set last active date to 3 days ago
    // Trigger reset
    // Verify only saves actual data days
  });
});
```

### **Integration Tests**
```typescript
describe('Daily Tracking Integration', () => {
  test('full day cycle workflow', () => {
    // Add entries throughout day
    // Trigger day transition
    // Verify complete workflow
  });
  
  test('weekly statistics calculation', () => {
    // Create 7 days of test data
    // Verify statistics accuracy
  });
});
```

## Performance Testing

### **Storage Efficiency**
- Test with 30+ days of data
- Verify localStorage usage remains reasonable
- Check load times with large datasets
- Monitor memory usage during operations

### **UI Responsiveness**
- Test with 50+ entries per day
- Verify smooth scrolling in history
- Check calculation performance
- Monitor render times for statistics

## Browser Compatibility

### **Test Browsers**:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### **Test Features**:
- localStorage functionality
- Date handling across timezones
- Periodic timer behavior
- Toast notifications
- UI responsiveness

## Common Issues and Solutions

### **Issue**: Reset not triggering
**Solution**: Check browser's date/time settings, verify localStorage access

### **Issue**: Data appearing duplicated
**Solution**: Clear localStorage and restart, check for multiple timer instances

### **Issue**: Statistics not updating
**Solution**: Verify summary creation, check calculation logic

### **Issue**: Performance degradation
**Solution**: Check localStorage size, implement data cleanup if needed

## Success Criteria

### **Functional Requirements**:
- ✅ Automatic daily reset at midnight
- ✅ Data preservation during transitions
- ✅ Historical data tracking
- ✅ Weekly statistics calculation
- ✅ User notifications for resets

### **Performance Requirements**:
- ✅ Reset detection < 1 second
- ✅ Data loading < 2 seconds
- ✅ UI updates < 500ms
- ✅ Storage usage < 10MB for 1 year

### **User Experience Requirements**:
- ✅ No manual reset required
- ✅ Clear visual feedback
- ✅ Data always accessible
- ✅ Consistent behavior across sessions

The daily reset functionality provides a seamless, automatic experience that maintains data integrity while requiring no user intervention!
