import { TrendingUp, Calendar, Target, Award, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Badge } from '@/app/components/ui/badge';

interface WorkoutLog {
  date: string;
  exercise: string;
  exerciseAr: string;
  weight: number;
  reps: number;
  sets: number;
}

interface BodyMeasurement {
  date: string;
  weight: number;
  bodyFat?: number;
  chest?: number;
  waist?: number;
  arms?: number;
}

export function ProgressTracker() {
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([
    { date: '2026-01-15', exercise: 'Bench Press', exerciseAr: 'ضغط بنش', weight: 80, reps: 8, sets: 4 },
    { date: '2026-01-18', exercise: 'Bench Press', exerciseAr: 'ضغط بنش', weight: 85, reps: 6, sets: 4 },
    { date: '2026-01-21', exercise: 'Bench Press', exerciseAr: 'ضغط بنش', weight: 87.5, reps: 5, sets: 4 },
    { date: '2026-01-15', exercise: 'Squat', exerciseAr: 'سكوات', weight: 100, reps: 8, sets: 4 },
    { date: '2026-01-18', exercise: 'Squat', exerciseAr: 'سكوات', weight: 105, reps: 7, sets: 4 },
    { date: '2026-01-21', exercise: 'Squat', exerciseAr: 'سكوات', weight: 110, reps: 6, sets: 4 },
  ]);

  const [measurements, setMeasurements] = useState<BodyMeasurement[]>([
    { date: '2026-01-01', weight: 75, bodyFat: 18, chest: 98, waist: 82, arms: 36 },
    { date: '2026-01-08', weight: 76, bodyFat: 17.5, chest: 99, waist: 81, arms: 36.5 },
    { date: '2026-01-15', weight: 77, bodyFat: 17, chest: 100, waist: 80, arms: 37 },
    { date: '2026-01-21', weight: 78, bodyFat: 16.8, chest: 101, waist: 79.5, arms: 37.5 },
  ]);

  const [newLog, setNewLog] = useState({
    exercise: '',
    exerciseAr: '',
    weight: '',
    reps: '',
    sets: ''
  });

  const [newMeasurement, setNewMeasurement] = useState({
    weight: '',
    bodyFat: '',
    chest: '',
    waist: '',
    arms: ''
  });

  const addWorkoutLog = () => {
    if (newLog.exercise && newLog.weight && newLog.reps && newLog.sets) {
      const log: WorkoutLog = {
        date: new Date().toISOString().split('T')[0],
        exercise: newLog.exercise,
        exerciseAr: newLog.exerciseAr || newLog.exercise,
        weight: parseFloat(newLog.weight),
        reps: parseInt(newLog.reps),
        sets: parseInt(newLog.sets)
      };
      setWorkoutLogs([...workoutLogs, log]);
      setNewLog({ exercise: '', exerciseAr: '', weight: '', reps: '', sets: '' });
    }
  };

  const addMeasurement = () => {
    if (newMeasurement.weight) {
      const measurement: BodyMeasurement = {
        date: new Date().toISOString().split('T')[0],
        weight: parseFloat(newMeasurement.weight),
        bodyFat: newMeasurement.bodyFat ? parseFloat(newMeasurement.bodyFat) : undefined,
        chest: newMeasurement.chest ? parseFloat(newMeasurement.chest) : undefined,
        waist: newMeasurement.waist ? parseFloat(newMeasurement.waist) : undefined,
        arms: newMeasurement.arms ? parseFloat(newMeasurement.arms) : undefined
      };
      setMeasurements([...measurements, measurement]);
      setNewMeasurement({ weight: '', bodyFat: '', chest: '', waist: '', arms: '' });
    }
  };

  // تحضير بيانات الرسم البياني للوزن
  const weightChartData = measurements.map(m => ({
    date: new Date(m.date).toLocaleDateString('ar-EG', { month: 'short', day: 'numeric' }),
    'الوزن (كجم)': m.weight,
    'دهون الجسم (%)': m.bodyFat || null
  }));

  // تحضير بيانات القياسات
  const measurementsChartData = measurements.map(m => ({
    date: new Date(m.date).toLocaleDateString('ar-EG', { month: 'short', day: 'numeric' }),
    'صدر': m.chest || null,
    'خصر': m.waist || null,
    'ذراع': m.arms || null
  }));

  // حساب أفضل الأرقام الشخصية
  const getPersonalRecords = () => {
    const exerciseGroups: { [key: string]: WorkoutLog[] } = {};
    
    workoutLogs.forEach(log => {
      if (!exerciseGroups[log.exercise]) {
        exerciseGroups[log.exercise] = [];
      }
      exerciseGroups[log.exercise].push(log);
    });

    return Object.entries(exerciseGroups).map(([exercise, logs]) => {
      const maxWeight = Math.max(...logs.map(l => l.weight));
      const bestLog = logs.find(l => l.weight === maxWeight);
      return {
        exercise,
        exerciseAr: bestLog?.exerciseAr || exercise,
        maxWeight,
        reps: bestLog?.reps || 0,
        date: bestLog?.date || ''
      };
    });
  };

  const personalRecords = getPersonalRecords();

  return (
    <div className="w-full py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          📊 تتبع التقدم
        </h2>
        <p className="text-lg text-gray-400">
          سجّل تمارينك وقياساتك وشوف تطورك بمرور الوقت
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Records */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              أفضل أرقامك الشخصية (PRs)
            </CardTitle>
            <CardDescription>أقصى وزن رفعته في كل تمرين</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {personalRecords.length > 0 ? (
                personalRecords.map((pr, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg"
                  >
                    <div>
                      <p className="font-bold text-blue-400">{pr.exerciseAr}</p>
                      <p className="text-xs text-gray-500">{pr.exercise}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-400">{pr.maxWeight} kg</p>
                      <p className="text-xs text-gray-400">{pr.reps} تكرار</p>
                      <p className="text-xs text-gray-500">
                        {new Date(pr.date).toLocaleDateString('ar-EG')}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">لا توجد سجلات بعد. ابدأ بإضافة تمارينك!</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Add Workout Log */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-blue-500" />
              سجّل تمرين جديد
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>التمرين (بالعربي)</Label>
                  <Input
                    value={newLog.exerciseAr}
                    onChange={(e) => setNewLog({ ...newLog, exerciseAr: e.target.value })}
                    placeholder="مثال: ضغط بنش"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Exercise (English)</Label>
                  <Input
                    value={newLog.exercise}
                    onChange={(e) => setNewLog({ ...newLog, exercise: e.target.value })}
                    placeholder="e.g., Bench Press"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>الوزن (كجم)</Label>
                  <Input
                    type="number"
                    value={newLog.weight}
                    onChange={(e) => setNewLog({ ...newLog, weight: e.target.value })}
                    placeholder="80"
                  />
                </div>
                <div className="space-y-2">
                  <Label>التكرارات</Label>
                  <Input
                    type="number"
                    value={newLog.reps}
                    onChange={(e) => setNewLog({ ...newLog, reps: e.target.value })}
                    placeholder="8"
                  />
                </div>
                <div className="space-y-2">
                  <Label>المجموعات</Label>
                  <Input
                    type="number"
                    value={newLog.sets}
                    onChange={(e) => setNewLog({ ...newLog, sets: e.target.value })}
                    placeholder="4"
                  />
                </div>
              </div>
              <Button onClick={addWorkoutLog} className="w-full bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                إضافة السجل
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Weight & Body Fat Chart */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              تطور الوزن ونسبة الدهون
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#18181B',
                    border: '1px solid #3F3F46',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="الوزن (كجم)" stroke="#3B82F6" strokeWidth={3} />
                <Line type="monotone" dataKey="دهون الجسم (%)" stroke="#F59E0B" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Body Measurements Chart */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              قياسات الجسم (سم)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={measurementsChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#18181B',
                    border: '1px solid #3F3F46',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="صدر" fill="#EF4444" />
                <Bar dataKey="خصر" fill="#10B981" />
                <Bar dataKey="ذراع" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Add Measurements */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              سجّل قياسات جديدة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label>الوزن (كجم) *</Label>
                <Input
                  type="number"
                  value={newMeasurement.weight}
                  onChange={(e) => setNewMeasurement({ ...newMeasurement, weight: e.target.value })}
                  placeholder="75"
                />
              </div>
              <div className="space-y-2">
                <Label>دهون الجسم (%)</Label>
                <Input
                  type="number"
                  value={newMeasurement.bodyFat}
                  onChange={(e) => setNewMeasurement({ ...newMeasurement, bodyFat: e.target.value })}
                  placeholder="18"
                />
              </div>
              <div className="space-y-2">
                <Label>صدر (سم)</Label>
                <Input
                  type="number"
                  value={newMeasurement.chest}
                  onChange={(e) => setNewMeasurement({ ...newMeasurement, chest: e.target.value })}
                  placeholder="98"
                />
              </div>
              <div className="space-y-2">
                <Label>خصر (سم)</Label>
                <Input
                  type="number"
                  value={newMeasurement.waist}
                  onChange={(e) => setNewMeasurement({ ...newMeasurement, waist: e.target.value })}
                  placeholder="82"
                />
              </div>
              <div className="space-y-2">
                <Label>ذراع (سم)</Label>
                <Input
                  type="number"
                  value={newMeasurement.arms}
                  onChange={(e) => setNewMeasurement({ ...newMeasurement, arms: e.target.value })}
                  placeholder="36"
                />
              </div>
            </div>
            <Button onClick={addMeasurement} className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              إضافة القياسات
            </Button>
          </CardContent>
        </Card>

        {/* Latest Stats */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600 lg:col-span-2">
          <CardHeader>
            <CardTitle>آخر قياساتك</CardTitle>
          </CardHeader>
          <CardContent>
            {measurements.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: 'الوزن', value: measurements[measurements.length - 1].weight, unit: 'kg', color: 'text-blue-400' },
                  { label: 'دهون', value: measurements[measurements.length - 1].bodyFat, unit: '%', color: 'text-orange-400' },
                  { label: 'صدر', value: measurements[measurements.length - 1].chest, unit: 'cm', color: 'text-red-400' },
                  { label: 'خصر', value: measurements[measurements.length - 1].waist, unit: 'cm', color: 'text-green-400' },
                  { label: 'ذراع', value: measurements[measurements.length - 1].arms, unit: 'cm', color: 'text-purple-400' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-zinc-800/50 rounded-lg">
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value || '-'}
                      {stat.value && <span className="text-sm ml-1">{stat.unit}</span>}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-4">لا توجد قياسات بعد</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
