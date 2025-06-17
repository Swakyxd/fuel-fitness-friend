# Indian Food Nutrition Database Integration

## Overview
Successfully integrated comprehensive Indian food nutrition data from `Indian_Food_Nutrition_Processed.csv` into the calorie tracker application.

## Database Details
- **Total Food Items**: 499 Indian dishes and beverages
- **Data Source**: Indian_Food_Nutrition_Processed.csv
- **Serving Size**: Standardized to 100g for consistency
- **Calories**: Rounded to nearest whole number for user-friendly display

## Categories Included

### Beverages (20+ items)
- Traditional teas and coffees
- Milkshakes and lassi
- Fruit drinks and coolers
- Hot and cold beverages

### Breakfast Items (15+ items)
- Porridges (daliya, upma, poha)
- Egg preparations
- Pancakes and cheelas

### Breads & Rotis (25+ items)
- Chapati, roti, paratha varieties
- Poori, naan, bhatura
- Stuffed breads

### South Indian (10+ items)
- Idli, dosa, uttapam
- Regional specialties

### Rice Dishes (20+ items)
- Plain and flavored rice
- Biryani and pulao varieties
- Regional rice preparations

### Dal & Lentils (25+ items)
- Various dal preparations
- Curry varieties
- Sprouted preparations

### Vegetables (50+ items)
- Dry and gravy vegetables
- Stuffed vegetables
- Regional preparations
- Paneer dishes

### Non-Vegetarian (25+ items)
- Chicken, mutton, fish curries
- Kebabs and tikkas
- Regional meat dishes

### Snacks & Fried Items (40+ items)
- Pakoras, samosas, cutlets
- Traditional snacks
- Street food items

### Sweets & Desserts (50+ items)
- Traditional sweets (burfi, ladoo)
- Halwas and kheer
- Ice creams and puddings
- Cakes and pastries

### Salads & Raitas (15+ items)
- Traditional raitas
- Mixed salads
- Curd-based preparations

### Soups (25+ items)
- Traditional and continental soups
- Clear and cream soups

### Chutneys & Condiments (10+ items)
- Traditional chutneys
- Accompaniments

## Technical Implementation

### File Structure
```
src/utils/foodDatabase.ts - Main food database
scripts/csv-to-food-database.js - Conversion script
```

### Data Format
Each food item contains:
- `id`: Unique identifier
- `name`: Food name (with Hindi/regional names in parentheses)
- `calories`: Calorie content per 100g
- `serving`: Standardized to "100g"

### Search Functionality
The existing search functionality in `FoodSearch.tsx` automatically works with the new database:
- Case-insensitive search
- Partial name matching
- Real-time filtering

## Usage Instructions

1. **Adding Food**: Click "Add Food" button in the app
2. **Search**: Type any Indian food name (English or Hindi)
3. **Select**: Choose from filtered results
4. **Portion**: Adjust serving size as needed
5. **Add**: Food gets added to daily log with calculated calories

## Examples of Searchable Items

- "chai" → Hot tea (Garam Chai)
- "dosa" → Masala dosa, Semolina dosa
- "biryani" → Mutton biryani, Vegetable biryani
- "paneer" → Various paneer dishes
- "dal" → Multiple dal varieties
- "samosa" → Potato samosa, other varieties

## Benefits

1. **Comprehensive Coverage**: 499+ Indian food items
2. **Accurate Nutrition**: Based on processed nutrition data
3. **User-Friendly**: Hindi names included for easy recognition
4. **Standardized**: Consistent 100g serving size for easy calculation
5. **Searchable**: Easy to find specific dishes

## Custom Food Feature

### Overview
Added comprehensive custom food management functionality that allows users to:
- Add foods not available in the database
- Manage their custom food collection
- Export/import custom foods for backup and sharing

### Features

#### 1. **Add Custom Foods**
- **Location**: Available in Food Search modal and Custom Foods page
- **Validation**: Ensures accurate data entry with form validation
- **Duplicate Prevention**: Checks for existing food names
- **Auto-Integration**: Custom foods automatically appear in search results

#### 2. **Custom Food Management Page**
- **Access**: Click "Custom Foods" button on main page
- **Full Management**: View, add, edit, and delete custom foods
- **Statistics**: Shows count of custom foods
- **Date Tracking**: Displays when each custom food was added

#### 3. **Search Integration**
- **Unified Search**: Custom foods appear alongside database foods
- **Visual Distinction**: Custom foods have "Custom" badges
- **Delete Option**: Quick delete button for custom foods in search
- **Real-time Updates**: Search results update immediately after adding/removing

#### 4. **Data Persistence**
- **Local Storage**: Custom foods saved in browser's local storage
- **Automatic Backup**: Data persists across browser sessions
- **Export Feature**: Download custom foods as JSON file
- **Import Feature**: Upload and restore custom foods from JSON

#### 5. **User Experience**
- **Form Validation**: Real-time validation with helpful error messages
- **Success Feedback**: Clear confirmation when foods are added
- **Intuitive Interface**: Easy-to-use forms and management interface
- **Tips and Guidance**: Built-in help text for accurate data entry

### Technical Implementation

#### File Structure
```
src/utils/customFoodManager.ts - Core custom food logic
src/components/CustomFoodForm.tsx - Add custom food form
src/components/CustomFoodManager.tsx - Management interface
src/pages/CustomFoods.tsx - Dedicated custom foods page
src/utils/foodDatabase.ts - Updated to include custom foods
```

#### Data Flow
1. **Adding**: CustomFoodForm → customFoodManager → localStorage
2. **Retrieving**: getAllFoods() → combines base + custom foods
3. **Searching**: FoodSearch uses combined food list
4. **Managing**: CustomFoodManager provides full CRUD operations

#### Storage Format
```json
{
  "id": 10001,
  "name": "Homemade Pizza",
  "calories": 280,
  "serving": "1 slice",
  "isCustom": true,
  "dateAdded": "2024-01-15T10:30:00.000Z"
}
```

### Usage Guide

#### Adding Custom Foods
1. **From Food Search**:
   - Click "Add Food" → "Add Custom Food"
   - Fill in food details and submit
   - Food immediately available for selection

2. **From Custom Foods Page**:
   - Click "Custom Foods" → "Add Custom Food"
   - Complete form and save
   - View in management interface

#### Managing Custom Foods
1. **Access Management**: Click "Custom Foods" on main page
2. **View All**: See complete list with details and dates
3. **Delete**: Click trash icon to remove custom foods
4. **Export**: Download backup of all custom foods
5. **Import**: Upload previously exported custom foods

#### Best Practices
- **Accurate Calories**: Use nutrition labels or reliable sources
- **Specific Serving Sizes**: Be precise (e.g., "1 medium slice" vs "1 slice")
- **Descriptive Names**: Use clear, identifiable names
- **Regular Backups**: Export custom foods periodically

### Benefits

1. **Personalization**: Add family recipes and local foods
2. **Completeness**: Fill gaps in the existing database
3. **Accuracy**: Use exact nutrition information you trust
4. **Portability**: Export/import for backup and sharing
5. **Integration**: Seamless experience with existing features

## Daily Calorie Goal Settings

### Overview
Added comprehensive daily calorie goal management functionality that allows users to:
- Set personalized daily calorie targets
- Choose from recommended goals based on common profiles
- Validate goals for health and safety
- Export/import settings for backup and sharing

### Features

#### 1. **Interactive Goal Setting**
- **Quick Edit**: Click on the "Daily Goal" card on main page for instant editing
- **Dedicated Settings Page**: Full settings interface at `/settings`
- **Real-time Validation**: Ensures goals are within healthy ranges (800-10,000 calories)
- **Instant Updates**: Changes reflect immediately across the application

#### 2. **Recommended Goals**
- **Pre-defined Options**: 8 common calorie goal profiles
- **Gender-specific**: Separate recommendations for men and women
- **Activity-based**: Options for sedentary, moderate, and athletic lifestyles
- **Goal-oriented**: Weight loss, maintenance, and weight gain options

#### 3. **Settings Management**
- **Persistent Storage**: Goals saved in browser's localStorage
- **Export/Import**: Backup and restore settings via JSON files
- **Reset Option**: Return to default 2000-calorie goal
- **Last Updated Tracking**: Shows when settings were last modified

#### 4. **User Interface**
- **Visual Feedback**: Success/error messages for all actions
- **Progress Tracking**: Updated progress bars and remaining calories
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Proper labels and keyboard navigation

### Technical Implementation

#### File Structure
```
src/utils/settingsManager.ts - Core settings management logic
src/components/CalorieGoalSettings.tsx - Goal setting interface
src/components/CalorieStats.tsx - Updated with clickable goal card
src/pages/Settings.tsx - Dedicated settings page
src/pages/Index.tsx - Updated with goal management integration
```

#### Data Flow
1. **Loading**: getUserSettings() → loads from localStorage
2. **Updating**: updateDailyCalorieGoal() → saves to localStorage
3. **Validation**: validateCalorieGoal() → ensures safe ranges
4. **Display**: Real-time updates across all components

#### Storage Format
```json
{
  "dailyCalorieGoal": 2000,
  "lastUpdated": "2024-01-15T10:30:00.000Z"
}
```

### Usage Guide

#### Setting Your Goal
1. **Quick Method**:
   - Click on "Daily Goal" card on main page
   - Enter new goal and click "Save"
   - Goal updates immediately

2. **Full Settings**:
   - Click "Settings" button on main page
   - Use comprehensive settings interface
   - Choose from recommended goals or enter custom value

#### Recommended Goals
- **Weight Loss (Women)**: 1,200 calories
- **Weight Loss (Men)**: 1,500 calories
- **Maintenance (Women)**: 2,000 calories
- **Maintenance (Men)**: 2,500 calories
- **Weight Gain (Women)**: 2,300 calories
- **Weight Gain (Men)**: 3,000 calories
- **Athletic (Women)**: 2,800 calories
- **Athletic (Men)**: 3,500 calories

#### Data Management
1. **Export Settings**: Download backup of your preferences
2. **Import Settings**: Restore from previously exported file
3. **Reset**: Return all settings to default values

### Validation Rules

#### Safety Limits
- **Minimum**: 800 calories (very low calorie diets need medical supervision)
- **Maximum**: 10,000 calories (prevents unrealistic goals)
- **Format**: Whole numbers only (no decimals)
- **Required**: Goal cannot be empty or zero

#### Health Considerations
- Goals below 1,200 calories show additional warnings
- Recommendations include activity level considerations
- Tips provided for healthy goal setting
- Encourages consultation with healthcare providers

### Benefits

1. **Personalization**: Tailored goals based on individual needs
2. **Flexibility**: Easy to adjust as circumstances change
3. **Guidance**: Recommended goals for common scenarios
4. **Safety**: Validation prevents unhealthy extremes
5. **Persistence**: Goals saved and restored automatically

### Integration with Existing Features

#### Progress Tracking
- **Real-time Updates**: Progress bars reflect new goals immediately
- **Remaining Calories**: Calculations update with goal changes
- **Visual Indicators**: Color-coded progress (green/red for over/under)

#### Food Logging
- **Consistent Experience**: All calorie calculations use current goal
- **Daily Summaries**: Show progress toward personalized target
- **Historical Data**: Previous days maintain their original goals

## Unit Conversion & Custom Amount Feature

### Overview
Added comprehensive unit conversion functionality that allows users to:
- Input custom amounts in various units (grams, milliliters, cups, etc.)
- Automatically convert to calories based on nutritional density
- Choose between simple and advanced calculation methods
- Get accurate portion tracking with real-world measurements

### Features

#### 1. **Dual Calculation Modes**
- **Simple Mode**: Traditional multiplier-based calculation
- **Advanced Mode**: Unit conversion with precise measurements
- **Tab Interface**: Easy switching between calculation methods
- **Real-time Updates**: Instant calorie calculations as you type

#### 2. **Comprehensive Unit Support**
- **Weight Units**: grams (g), kilograms (kg), ounces (oz), pounds (lb)
- **Volume Units**: milliliters (ml), liters (l), cups, tablespoons (tbsp), teaspoons (tsp), fluid ounces
- **Count Units**: pieces, slices, servings
- **Smart Suggestions**: Automatically suggests appropriate units based on food type

#### 3. **Advanced Calculator Interface**
- **Unit Selection**: Dropdown with all available units
- **Amount Input**: Precise decimal input with validation
- **Real-time Conversion**: Instant calorie calculation
- **Quick Amounts**: Preset buttons for common amounts (0.5, 1, 2, 5)
- **Unit Information**: Educational content about conversions

#### 4. **Enhanced Custom Food Creation**
- **Unit Helper**: Built-in guide for common serving sizes
- **Examples**: Weight, volume, and count examples
- **Best Practices**: Tips for accurate portion tracking
- **Validation**: Ensures proper serving size format

### Technical Implementation

#### File Structure
```
src/utils/unitConverter.ts - Core conversion logic and unit definitions
src/components/ServingSizeCalculator.tsx - Advanced calculator interface
src/components/FoodSearch.tsx - Updated with dual calculation modes
src/components/CustomFoodForm.tsx - Enhanced with unit guidance
```

#### Unit Conversion System
```typescript
// Weight units (base: 100g)
{ value: 'g', label: 'grams (g)', type: 'weight', baseMultiplier: 0.01 }
{ value: 'kg', label: 'kilograms (kg)', type: 'weight', baseMultiplier: 10 }

// Volume units (base: 100ml)
{ value: 'ml', label: 'milliliters (ml)', type: 'volume', baseMultiplier: 0.01 }
{ value: 'cup', label: 'cups', type: 'volume', baseMultiplier: 2.36588 }

// Count units (base: 1 piece)
{ value: 'piece', label: 'pieces', type: 'piece', baseMultiplier: 1 }
```

#### Conversion Logic
1. **Input Validation**: Ensures amount is positive and reasonable
2. **Unit Detection**: Identifies unit type (weight/volume/count)
3. **Base Conversion**: Converts to base units (100g/100ml/1 piece)
4. **Calorie Calculation**: Multiplies by food's calorie density
5. **Result Formatting**: Displays user-friendly conversion result

### Usage Guide

#### Simple Mode (Traditional)
1. Select a food item
2. Stay on "Simple" tab
3. Enter multiplier (e.g., 2 for double portion)
4. Calories calculated as: `food_calories × multiplier`

#### Advanced Mode (Unit Conversion)
1. Select a food item
2. Switch to "Advanced" tab
3. Enter amount (e.g., 250)
4. Select unit (e.g., grams)
5. Calories calculated based on actual weight/volume

#### Example Conversions
- **250g of rice** → Converts to 2.5 × 100g servings → Accurate calorie calculation
- **1 cup of milk** → Converts to ~237ml → Precise volume-based calories
- **2 slices of bread** → Direct count multiplication → Piece-based calculation

### Supported Units

#### Weight Units
- **Grams (g)**: 1g = 0.01 × 100g base
- **Kilograms (kg)**: 1kg = 10 × 100g base
- **Ounces (oz)**: 1oz = 0.283 × 100g base
- **Pounds (lb)**: 1lb = 4.536 × 100g base

#### Volume Units
- **Milliliters (ml)**: 1ml = 0.01 × 100ml base
- **Liters (l)**: 1l = 10 × 100ml base
- **Cups**: 1 cup = 2.366 × 100ml base (236.6ml)
- **Tablespoons (tbsp)**: 1 tbsp = 0.148 × 100ml base (14.8ml)
- **Teaspoons (tsp)**: 1 tsp = 0.049 × 100ml base (4.9ml)
- **Fluid Ounces**: 1 fl oz = 0.296 × 100ml base (29.6ml)

#### Count Units
- **Pieces**: Direct multiplication
- **Slices**: Direct multiplication
- **Servings**: Direct multiplication

### Validation & Safety

#### Amount Validation
- **Minimum**: 0.1 (prevents zero/negative amounts)
- **Maximum**: 10,000 (prevents unrealistic amounts)
- **Format**: Decimal numbers allowed
- **Real-time**: Validation as user types

#### Unit Compatibility
- **Type Checking**: Ensures units match food type when possible
- **Smart Suggestions**: Recommends appropriate units based on food description
- **Error Handling**: Graceful handling of invalid conversions

### Benefits

1. **Accuracy**: Precise calorie calculations based on actual measurements
2. **Flexibility**: Support for various measurement systems and preferences
3. **Education**: Learn about unit conversions and portion sizes
4. **Real-world**: Use kitchen scales, measuring cups, and common portions
5. **International**: Support for both metric and imperial units

### Integration with Existing Features

#### Food Database
- **Seamless Integration**: Works with all 499+ Indian foods and custom foods
- **Automatic Detection**: Suggests appropriate units based on food serving descriptions
- **Consistent Experience**: Same interface for database and custom foods

#### Daily Logging
- **Detailed Entries**: Food logs show exact amounts and units used
- **Accurate Tracking**: Precise calorie calculations for better goal tracking
- **Historical Data**: Maintains conversion details for review

## Future Enhancements

- Add more nutritional information (protein, carbs, fats) for custom foods
- Include regional variations
- Add food images for custom foods
- Implement favorites system
- Add meal planning features
- Cloud sync for custom foods and settings across devices
- Community sharing of custom foods
- Weekly/monthly calorie goal trends and analytics
- Integration with fitness trackers for activity-based goal adjustments
- Macro nutrient goal setting (protein, carbs, fats percentages)
- Recipe calculator with ingredient-based conversions
- Barcode scanning for packaged foods
- Voice input for hands-free logging
- Smart portion size recommendations based on goals

## Data Source Attribution
- **Base Database**: Indian_Food_Nutrition_Processed.csv containing comprehensive nutrition information for Indian cuisine
- **Custom Foods**: User-generated content stored locally with export/import capabilities
- **Settings**: User preferences stored locally with backup/restore functionality
- **Unit Conversions**: Standard metric and imperial conversion factors
