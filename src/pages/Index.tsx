
import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import FoodSearch from '@/components/FoodSearch';
import DailyLog from '@/components/DailyLog';
import CalorieStats from '@/components/CalorieStats';

export interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  serving: string;
  timestamp: Date;
}

const Index = () => {
  const [dailyEntries, setDailyEntries] = useState<FoodEntry[]>([]);
  const [showFoodSearch, setShowFoodSearch] = useState(false);
  const [dailyGoal] = useState(2000); // Default daily calorie goal

  // Load entries from localStorage on component mount
  useEffect(() => {
    const today = new Date().toDateString();
    const savedEntries = localStorage.getItem(`calorie-entries-${today}`);
    if (savedEntries) {
      const entries = JSON.parse(savedEntries).map((entry: any) => ({
        ...entry,
        timestamp: new Date(entry.timestamp)
      }));
      setDailyEntries(entries);
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    const today = new Date().toDateString();
    localStorage.setItem(`calorie-entries-${today}`, JSON.stringify(dailyEntries));
  }, [dailyEntries]);

  const addFoodEntry = (food: Omit<FoodEntry, 'id' | 'timestamp'>) => {
    const newEntry: FoodEntry = {
      ...food,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setDailyEntries(prev => [...prev, newEntry]);
    setShowFoodSearch(false);
    toast({
      title: "Food Added!",
      description: `${food.name} has been added to your daily log.`,
    });
  };

  const removeFoodEntry = (id: string) => {
    setDailyEntries(prev => prev.filter(entry => entry.id !== id));
    toast({
      title: "Food Removed",
      description: "Item has been removed from your daily log.",
    });
  };

  const totalCalories = dailyEntries.reduce((sum, entry) => sum + entry.calories, 0);
  const remainingCalories = dailyGoal - totalCalories;
  const progressPercentage = Math.min((totalCalories / dailyGoal) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Calorie Tracker</h1>
          <p className="text-gray-600">Track your daily nutrition and reach your goals</p>
        </div>

        {/* Stats Cards */}
        <CalorieStats 
          totalCalories={totalCalories}
          dailyGoal={dailyGoal}
          remainingCalories={remainingCalories}
          progressPercentage={progressPercentage}
        />

        {/* Action Buttons */}
        <div className="flex justify-center mb-8">
          <Button 
            onClick={() => setShowFoodSearch(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Food
          </Button>
        </div>

        {/* Daily Progress */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Daily Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Consumed: {totalCalories} cal</span>
                <span>Goal: {dailyGoal} cal</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <div className="text-center">
                {remainingCalories > 0 ? (
                  <p className="text-green-600 font-medium">
                    {remainingCalories} calories remaining
                  </p>
                ) : (
                  <p className="text-red-500 font-medium">
                    {Math.abs(remainingCalories)} calories over goal
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Log */}
        <DailyLog entries={dailyEntries} onRemoveEntry={removeFoodEntry} />

        {/* Food Search Modal */}
        {showFoodSearch && (
          <FoodSearch 
            onAddFood={addFoodEntry}
            onClose={() => setShowFoodSearch(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
