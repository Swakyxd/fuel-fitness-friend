
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Target, TrendingUp } from 'lucide-react';

interface CalorieStatsProps {
  totalCalories: number;
  dailyGoal: number;
  remainingCalories: number;
  progressPercentage: number;
}

const CalorieStats = ({ totalCalories, dailyGoal, remainingCalories, progressPercentage }: CalorieStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-center">
            <Activity className="mr-2 h-4 w-4 text-blue-500" />
            Consumed Today
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">{totalCalories}</div>
          <p className="text-sm text-gray-500">calories</p>
        </CardContent>
      </Card>

      <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-center">
            <Target className="mr-2 h-4 w-4 text-green-500" />
            Daily Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">{dailyGoal}</div>
          <p className="text-sm text-gray-500">calories</p>
        </CardContent>
      </Card>

      <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-center">
            <TrendingUp className="mr-2 h-4 w-4 text-purple-500" />
            Remaining
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`text-3xl font-bold ${remainingCalories >= 0 ? 'text-purple-600' : 'text-red-500'}`}>
            {Math.abs(remainingCalories)}
          </div>
          <p className="text-sm text-gray-500">
            {remainingCalories >= 0 ? 'calories left' : 'calories over'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalorieStats;
