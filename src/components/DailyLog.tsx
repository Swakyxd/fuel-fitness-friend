
import { Trash2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FoodEntry } from '@/pages/Index';

interface DailyLogProps {
  entries: FoodEntry[];
  onRemoveEntry: (id: string) => void;
}

const DailyLog = ({ entries, onRemoveEntry }: DailyLogProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-blue-500" />
          Today's Food Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        {entries.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No foods logged today yet.</p>
            <p className="text-sm">Click "Add Food" to get started!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{entry.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{entry.serving}</span>
                    <span>•</span>
                    <span>{formatTime(entry.timestamp)}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{entry.calories}</div>
                    <div className="text-xs text-gray-500">calories</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveEntry(entry.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyLog;
