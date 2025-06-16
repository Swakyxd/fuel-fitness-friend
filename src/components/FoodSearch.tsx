
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { foodDatabase } from '@/utils/foodDatabase';

interface FoodSearchProps {
  onAddFood: (food: { name: string; calories: number; serving: string }) => void;
  onClose: () => void;
}

const FoodSearch = ({ onAddFood, onClose }: FoodSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState<any>(null);
  const [servingSize, setServingSize] = useState('1');

  const filteredFoods = foodDatabase.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFood = () => {
    if (selectedFood && servingSize) {
      const multiplier = parseFloat(servingSize) || 1;
      onAddFood({
        name: `${selectedFood.name} (${servingSize} ${selectedFood.serving})`,
        calories: Math.round(selectedFood.calories * multiplier),
        serving: `${servingSize} ${selectedFood.serving}`
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Add Food</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Food List */}
          <div className="max-h-60 overflow-y-auto space-y-2">
            {filteredFoods.map((food) => (
              <div
                key={food.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedFood?.id === food.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedFood(food)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{food.name}</h3>
                    <p className="text-sm text-gray-500">
                      {food.calories} cal per {food.serving}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{food.calories}</div>
                    <div className="text-xs text-gray-500">calories</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Serving Size Input */}
          {selectedFood && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Selected: {selectedFood.name}</h3>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="1"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                  className="w-20"
                  min="0.1"
                  step="0.1"
                />
                <span className="text-sm text-gray-600">{selectedFood.serving}</span>
                <span className="text-sm text-gray-400">=</span>
                <span className="font-bold text-blue-600">
                  {Math.round(selectedFood.calories * (parseFloat(servingSize) || 1))} cal
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddFood}
              disabled={!selectedFood}
              className="bg-green-600 hover:bg-green-700"
            >
              Add Food
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodSearch;
