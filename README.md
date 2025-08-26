# Fuel Fitness Friend 🍛💪

A **calorie tracking web app** focused on **Indian cuisine**, designed to help users log meals, track daily calorie goals, and personalize their nutrition journey.

---

## 🌟 Features

### ✅ Indian Food Nutrition Database
- Integrated **499+ Indian foods and beverages** from `Indian_Food_Nutrition_Processed.csv`
- Standardized **100g serving size**
- Rounded calorie counts for readability
- Supports **search by English or Hindi names**
- Categories include beverages, breakfast, breads, South Indian dishes, rice, dals, vegetables, non-veg curries, snacks, sweets, salads, soups, chutneys, and more

### ✅ Custom Foods
- Add foods not available in the database  
- Manage via a dedicated **Custom Foods page** (add, edit, delete, view stats)  
- Foods tagged with **Custom** badge in search results  
- **Export/Import** foods as JSON for backup or sharing  
- Persisted in **localStorage**

### ✅ Daily Calorie Goal Settings
- Set personalized daily calorie targets  
- Choose from **recommended profiles** (weight loss, maintenance, gain, athletic)  
- Real-time validation (safe ranges: **800–10,000 kcal**)  
- Export/Import settings for backup  
- Full settings page + quick-edit on main page  

### ✅ Unit Conversion & Custom Amounts
- Dual modes: **Simple (multiplier)** & **Advanced (unit conversion)**  
- Supports grams, kilograms, ounces, pounds, ml, liters, cups, tbsp, tsp, fl oz, slices, servings, etc.  
- Real-time calorie calculation based on measurement  
- Works seamlessly with both database and custom foods  

---

## 🗂️ File Structure

src/utils/foodDatabase.ts # Main food database
scripts/csv-to-food-database.js # Conversion script

src/utils/customFoodManager.ts # Core custom food logic
src/components/CustomFoodForm.tsx
src/components/CustomFoodManager.tsx
src/pages/CustomFoods.tsx

src/utils/settingsManager.ts # Daily goal settings logic
src/components/CalorieGoalSettings.tsx
src/pages/Settings.tsx

src/utils/unitConverter.ts # Unit conversion system
src/components/ServingSizeCalculator.tsx


---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Swakyxd/fuel-fitness-friend.git
cd fuel-fitness-friend

# Install dependencies
npm install

# Start development server
npm run dev
