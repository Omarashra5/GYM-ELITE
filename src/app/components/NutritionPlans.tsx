import { Apple, Beef, Salad, Coffee, Cookie, UtensilsCrossed, Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { useState } from 'react';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';

interface Meal {
  name: string;
  nameAr: string;
  time: string;
  foods: string[];
  foodsAr: string[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  tips: string;
}

const bulkingMeals: Meal[] = [
  {
    name: 'Breakfast',
    nameAr: 'الفطور',
    time: '7:00 AM',
    foods: [
      '4 whole eggs',
      '2 egg whites',
      '100g oats',
      '1 banana',
      '1 tbsp peanut butter',
      '1 glass milk'
    ],
    foodsAr: [
      '4 بيضات كاملة',
      '2 بياض بيض',
      '100 جم شوفان',
      'موزة واحدة',
      'ملعقة زبدة فول سوداني',
      'كوب حليب'
    ],
    calories: 850,
    protein: 55,
    carbs: 95,
    fats: 28,
    tips: 'الفطور أهم وجبة! يبدأ عملية البناء بعد ساعات الصيام. البروتين والكارب مهمين جداً.'
  },
  {
    name: 'Mid-Morning Snack',
    nameAr: 'سناك الصباح',
    time: '10:00 AM',
    foods: [
      '1 scoop whey protein',
      '1 apple',
      '30g almonds'
    ],
    foodsAr: [
      'سكوب واي بروتين',
      'تفاحة',
      '30 جم لوز'
    ],
    calories: 380,
    protein: 35,
    carbs: 35,
    fats: 12,
    tips: 'وجبة خفيفة للحفاظ على معدل الأيض وتوفير طاقة مستمرة.'
  },
  {
    name: 'Lunch',
    nameAr: 'الغداء',
    time: '1:00 PM',
    foods: [
      '250g chicken breast',
      '200g white rice',
      '150g mixed vegetables',
      '1 tbsp olive oil',
      'Green salad'
    ],
    foodsAr: [
      '250 جم صدر دجاج',
      '200 جم أرز أبيض',
      '150 جم خضار مشكل',
      'ملعقة زيت زيتون',
      'سلطة خضراء'
    ],
    calories: 750,
    protein: 65,
    carbs: 85,
    fats: 12,
    tips: 'وجبة رئيسية غنية بالبروتين والكارب للنمو والطاقة.'
  },
  {
    name: 'Pre-Workout',
    nameAr: 'قبل التمرين',
    time: '4:00 PM',
    foods: [
      '150g sweet potato',
      '1 scoop whey protein',
      '1 banana',
      'Coffee (optional)'
    ],
    foodsAr: [
      '150 جم بطاطا حلوة',
      'سكوب واي بروتين',
      'موزة',
      'قهوة (اختياري)'
    ],
    calories: 450,
    protein: 30,
    carbs: 70,
    fats: 4,
    tips: 'كارب سريع ومتوسط الامتصاص + بروتين للطاقة والأداء في الجيم.'
  },
  {
    name: 'Post-Workout',
    nameAr: 'بعد التمرين',
    time: '6:30 PM',
    foods: [
      '2 scoops whey protein',
      '1 banana',
      '50g dextrose/maltodextrin',
      '5g creatine'
    ],
    foodsAr: [
      '2 سكوب واي بروتين',
      'موزة',
      '50 جم دكستروز/مالتودكسترين',
      '5 جم كرياتين'
    ],
    calories: 420,
    protein: 50,
    carbs: 65,
    fats: 2,
    tips: 'نافذة البروتين! أهم وجبة لإصلاح وبناء العضلات. كارب سريع لتعويض الجليكوجين.'
  },
  {
    name: 'Dinner',
    nameAr: 'العشاء',
    time: '8:00 PM',
    foods: [
      '200g lean beef',
      '200g pasta',
      'Mixed vegetables',
      'Green salad',
      '1 tbsp olive oil'
    ],
    foodsAr: [
      '200 جم لحم بقري قليل الدهن',
      '200 جم مكرونة',
      'خضار مشكل',
      'سلطة خضراء',
      'ملعقة زيت زيتون'
    ],
    calories: 800,
    protein: 60,
    carbs: 90,
    fats: 18,
    tips: 'وجبة غنية ومتوازنة. اللحم الأحمر غني بالحديد والزنك المهمين للتستوستيرون.'
  },
  {
    name: 'Before Bed',
    nameAr: 'قبل النوم',
    time: '11:00 PM',
    foods: [
      '200g cottage cheese',
      '2 tbsp peanut butter',
      '1 scoop casein protein'
    ],
    foodsAr: [
      '200 جم جبن قريش',
      'ملعقتين زبدة فول سوداني',
      'سكوب كازين بروتين'
    ],
    calories: 480,
    protein: 50,
    carbs: 20,
    fats: 22,
    tips: 'بروتين بطيء الامتصاص يغذي العضلات طوال الليل أثناء النوم والتعافي.'
  }
];

const cuttingMeals: Meal[] = [
  {
    name: 'Breakfast',
    nameAr: 'الفطور',
    time: '7:00 AM',
    foods: [
      '3 whole eggs',
      '3 egg whites',
      '50g oats',
      'Berries',
      'Green tea'
    ],
    foodsAr: [
      '3 بيضات كاملة',
      '3 بياض بيض',
      '50 جم شوفان',
      'توت',
      'شاي أخضر'
    ],
    calories: 450,
    protein: 40,
    carbs: 40,
    fats: 15,
    tips: 'فطور متوازن، بروتين عالي للحفاظ على العضلات، كارب معتدل.'
  },
  {
    name: 'Mid-Morning',
    nameAr: 'سناك الصباح',
    time: '10:00 AM',
    foods: [
      '1 scoop whey protein',
      '1 apple',
      '10 almonds'
    ],
    foodsAr: [
      'سكوب واي بروتين',
      'تفاحة',
      '10 لوزات'
    ],
    calories: 280,
    protein: 28,
    carbs: 25,
    fats: 8,
    tips: 'وجبة خفيفة للحفاظ على الأيض. بروتين عالي، كارب منخفض.'
  },
  {
    name: 'Lunch',
    nameAr: 'الغداء',
    time: '1:00 PM',
    foods: [
      '200g chicken breast',
      '100g brown rice',
      'Large mixed salad',
      'Vegetables'
    ],
    foodsAr: [
      '200 جم صدر دجاج',
      '100 جم أرز بني',
      'سلطة كبيرة',
      'خضار'
    ],
    calories: 450,
    protein: 50,
    carbs: 45,
    fats: 6,
    tips: 'وجبة رئيسية قليلة السعرات، عالية البروتين. الكارب المعقد يعطي طاقة مستدامة.'
  },
  {
    name: 'Pre-Workout',
    nameAr: 'قبل التمرين',
    time: '4:00 PM',
    foods: [
      '100g sweet potato',
      '1 scoop whey',
      'Black coffee',
      '5g BCAAs'
    ],
    foodsAr: [
      '100 جم بطاطا حلوة',
      'سكوب واي',
      'قهوة سوداء',
      '5 جم BCAAs'
    ],
    calories: 300,
    protein: 28,
    carbs: 40,
    fats: 2,
    tips: 'كارب كافي للطاقة في التمرين. BCAAs للحفاظ على العضلات أثناء التخسيس.'
  },
  {
    name: 'Post-Workout',
    nameAr: 'بعد التمرين',
    time: '6:30 PM',
    foods: [
      '1.5 scoops whey',
      '1 banana',
      '5g creatine'
    ],
    foodsAr: [
      '1.5 سكوب واي',
      'موزة',
      '5 جم كرياتين'
    ],
    calories: 300,
    protein: 38,
    carbs: 35,
    fats: 2,
    tips: 'بروتين عالي للتعافي. كارب معتدل لتعويض الجليكوجين بدون فائض.'
  },
  {
    name: 'Dinner',
    nameAr: 'العشاء',
    time: '8:00 PM',
    foods: [
      '200g white fish or lean meat',
      'Large green salad',
      'Steamed vegetables',
      'Small portion quinoa'
    ],
    foodsAr: [
      '200 جم سمك أبيض أو لحم قليل الدهن',
      'سلطة خضراء كبيرة',
      'خضار مطبوخ على البخار',
      'حصة صغيرة كينوا'
    ],
    calories: 380,
    protein: 45,
    carbs: 30,
    fats: 8,
    tips: 'عشاء خفيف. الخضار تملأ المعدة بسعرات قليلة. بروتين عالي للتعافي الليلي.'
  },
  {
    name: 'Before Bed',
    nameAr: 'قبل النوم',
    time: '11:00 PM',
    foods: [
      '150g cottage cheese',
      '1 scoop casein'
    ],
    foodsAr: [
      '150 جم جبن قريش',
      'سكوب كازين'
    ],
    calories: 250,
    protein: 40,
    carbs: 10,
    fats: 8,
    tips: 'بروتين بطيء فقط. بدون كارب أو دهون كثيرة قبل النوم في فترة التنشيف.'
  }
];

const strengthMeals: Meal[] = [
  {
    name: 'Breakfast',
    nameAr: 'الفطور',
    time: '7:00 AM',
    foods: [
      '5 whole eggs',
      '100g oats',
      '2 tbsp peanut butter',
      'Banana',
      'Orange juice'
    ],
    foodsAr: [
      '5 بيضات كاملة',
      '100 جم شوفان',
      'ملعقتين زبدة فول سوداني',
      'موز',
      'عصير برتقال'
    ],
    calories: 950,
    protein: 50,
    carbs: 110,
    fats: 32,
    tips: 'فطور ضخم! الرياضيون الأقوياء يحتاجون سعرات عالية للأداء والتعافي.'
  },
  {
    name: 'Lunch',
    nameAr: 'الغداء',
    time: '12:00 PM',
    foods: [
      '300g red meat',
      '250g rice',
      'Vegetables',
      'Avocado'
    ],
    foodsAr: [
      '300 جم لحم أحمر',
      '250 جم أرز',
      'خضار',
      'أفوكادو'
    ],
    calories: 1000,
    protein: 70,
    carbs: 100,
    fats: 28,
    tips: 'اللحم الأحمر غني بالكرياتين الطبيعي، الحديد، B12، والزنك - كلها مهمة للقوة.'
  },
  {
    name: 'Pre-Workout',
    nameAr: 'قبل التمرين',
    time: '4:00 PM',
    foods: [
      '200g rice',
      '150g chicken',
      'Energy drink/coffee',
      '5g creatine'
    ],
    foodsAr: [
      '200 جم أرز',
      '150 جم دجاج',
      'مشروب طاقة/قهوة',
      '5 جم كرياتين'
    ],
    calories: 650,
    protein: 45,
    carbs: 95,
    fats: 6,
    tips: 'كارب عالي للطاقة في رفع الأوزان الثقيلة. الكرياتين يزيد القوة والأداء.'
  },
  {
    name: 'Post-Workout',
    nameAr: 'بعد التمرين',
    time: '7:00 PM',
    foods: [
      '2 scoops whey',
      'Large banana',
      '80g dextrose',
      '5g creatine',
      '5g glutamine'
    ],
    foodsAr: [
      '2 سكوب واي',
      'موز كبير',
      '80 جم دكستروز',
      '5 جم كرياتين',
      '5 جم جلوتامين'
    ],
    calories: 520,
    protein: 50,
    carbs: 90,
    fats: 2,
    tips: 'استرداد سريع! كارب عالي لتعويض الجليكوجين. المكملات تساعد في التعافي.'
  },
  {
    name: 'Dinner',
    nameAr: 'العشاء',
    time: '9:00 PM',
    foods: [
      '250g salmon',
      '200g pasta',
      'Olive oil',
      'Vegetables'
    ],
    foodsAr: [
      '250 جم سلمون',
      '200 جم مكرونة',
      'زيت زيتون',
      'خضار'
    ],
    calories: 850,
    protein: 60,
    carbs: 85,
    fats: 25,
    tips: 'السلمون غني بأوميجا 3 للمفاصل والالتهابات. مهم للرياضيين الذين يرفعون أوزان ثقيلة.'
  }
];

export function NutritionPlans() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('moderate');
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateTDEE = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a) return;

    // حساب BMR باستخدام معادلة Mifflin-St Jeor
    let bmr;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // معامل النشاط
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const calculatedTdee = Math.round(bmr * activityMultipliers[activity]);
    setTdee(calculatedTdee);
  };

  return (
    <div className="w-full py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
          🍗 الأنظمة الغذائية المفصلة
        </h2>
        <p className="text-lg text-gray-400">
          كل تفاصيل التغذية اللي محتاجها لكل هدف - تضخيم، تنشيف، قوة
        </p>
      </div>

      {/* حاسبة السعرات */}
      <Card className="mb-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border-green-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="w-6 h-6 text-green-500" />
            حاسبة السعرات الحرارية (TDEE Calculator)
          </CardTitle>
          <CardDescription>
            احسب احتياجك اليومي من السعرات عشان تعرف كم تاكل بالظبط
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="weight">الوزن (كجم)</Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">الطول (سم)</Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="175"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">العمر</Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">الجنس</Label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
              >
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="activity">مستوى النشاط</Label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md mt-2"
            >
              <option value="sedentary">قليل الحركة (مكتبي)</option>
              <option value="light">نشاط خفيف (1-3 أيام/أسبوع)</option>
              <option value="moderate">نشاط متوسط (3-5 أيام/أسبوع)</option>
              <option value="active">نشاط عالي (6-7 أيام/أسبوع)</option>
              <option value="veryActive">نشاط عالي جداً (رياضي محترف)</option>
            </select>
          </div>
          <Button onClick={calculateTDEE} className="w-full bg-green-600 hover:bg-green-700">
            <Calculator className="w-4 h-4 mr-2" />
            احسب احتياجك من السعرات
          </Button>

          {tdee && (
            <div className="mt-6 p-6 bg-green-600/10 border border-green-600 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">نتائج الحساب:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-zinc-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">للتضخيم (Bulking)</p>
                  <p className="text-2xl font-bold text-orange-400">{tdee + 300}-{tdee + 500}</p>
                  <p className="text-xs text-gray-500">سعر حراري/يوم</p>
                </div>
                <div className="p-4 bg-zinc-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">للحفاظ (Maintenance)</p>
                  <p className="text-2xl font-bold text-green-400">{tdee}</p>
                  <p className="text-xs text-gray-500">سعر حراري/يوم</p>
                </div>
                <div className="p-4 bg-zinc-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">للتنشيف (Cutting)</p>
                  <p className="text-2xl font-bold text-blue-400">{tdee - 500}-{tdee - 300}</p>
                  <p className="text-xs text-gray-500">سعر حراري/يوم</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-zinc-800 rounded-lg">
                <h4 className="font-bold text-green-400 mb-2">توزيع الماكروز المقترح:</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">البروتين:</p>
                    <p className="font-bold">{Math.round(parseFloat(weight) * 2.2)}g</p>
                    <p className="text-xs text-gray-500">(2.2g/kg)</p>
                  </div>
                  <div>
                    <p className="text-gray-400">الدهون:</p>
                    <p className="font-bold">{Math.round(parseFloat(weight) * 1)}g</p>
                    <p className="text-xs text-gray-500">(1g/kg)</p>
                  </div>
                  <div>
                    <p className="text-gray-400">الكارب:</p>
                    <p className="font-bold">{Math.round((tdee - (parseFloat(weight) * 2.2 * 4) - (parseFloat(weight) * 1 * 9)) / 4)}g</p>
                    <p className="text-xs text-gray-500">(الباقي)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* خطط الوجبات */}
      <Tabs defaultValue="bulking" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-900">
          <TabsTrigger value="bulking" className="data-[state=active]:bg-orange-600">
            <Beef className="w-4 h-4 mr-2" />
            تضخيم
          </TabsTrigger>
          <TabsTrigger value="cutting" className="data-[state=active]:bg-blue-600">
            <Salad className="w-4 h-4 mr-2" />
            تنشيف
          </TabsTrigger>
          <TabsTrigger value="strength" className="data-[state=active]:bg-red-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            قوة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bulking">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-orange-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Beef className="w-6 h-6 text-orange-500" />
                نظام التضخيم (Bulking Diet)
              </CardTitle>
              <CardDescription className="text-base">
                <strong className="text-orange-400">المجموع اليومي:</strong> ~4,130 سعر حراري | 
                البروتين: 385g | الكارب: 570g | الدهون: 104g
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bulkingMeals.map((meal, index) => (
                <Card key={index} className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-orange-400">{meal.nameAr}</CardTitle>
                        <CardDescription>{meal.time}</CardDescription>
                      </div>
                      <Badge className="bg-orange-600">{meal.calories} سعر</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm text-orange-400 mb-2 flex items-center gap-2">
                          <UtensilsCrossed className="w-4 h-4" />
                          المكونات:
                        </p>
                        <ul className="space-y-1 text-sm">
                          {meal.foodsAr.map((food, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-orange-500">•</span>
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-orange-400 mb-2">الماكروز:</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">بروتين:</span>
                            <span className="font-bold">{meal.protein}g</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">كارب:</span>
                            <span className="font-bold">{meal.carbs}g</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">دهون:</span>
                            <span className="font-bold">{meal.fats}g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-zinc-700">
                      <p className="text-sm text-gray-300">
                        <strong className="text-orange-400">💡 نصيحة:</strong> {meal.tips}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-6 p-6 bg-orange-600/10 border border-orange-600 rounded-lg">
                <h4 className="font-bold text-orange-400 mb-3">نصائح مهمة للتضخيم:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ زيادة 300-500 سعر فوق احتياجك اليومي</li>
                  <li>✅ تناول 2.2 جرام بروتين لكل كيلو من وزنك</li>
                  <li>✅ لا تخف من الكارب - ضروري للطاقة والنمو</li>
                  <li>✅ 7-8 وجبات صغيرة أفضل من 3 وجبات كبيرة</li>
                  <li>✅ اشرب 4-5 لتر ماء يومياً</li>
                  <li>✅ الصبر! التضخيم النظيف يأخذ وقت</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cutting">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Salad className="w-6 h-6 text-blue-500" />
                نظام التنشيف (Cutting Diet)
              </CardTitle>
              <CardDescription className="text-base">
                <strong className="text-blue-400">المجموع اليومي:</strong> ~2,410 سعر حراري | 
                البروتين: 269g | الكارب: 225g | الدهون: 49g
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cuttingMeals.map((meal, index) => (
                <Card key={index} className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-blue-400">{meal.nameAr}</CardTitle>
                        <CardDescription>{meal.time}</CardDescription>
                      </div>
                      <Badge className="bg-blue-600">{meal.calories} سعر</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm text-blue-400 mb-2 flex items-center gap-2">
                          <UtensilsCrossed className="w-4 h-4" />
                          المكونات:
                        </p>
                        <ul className="space-y-1 text-sm">
                          {meal.foodsAr.map((food, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-blue-500">•</span>
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-blue-400 mb-2">الماكروز:</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">بروتين:</span>
                            <span className="font-bold">{meal.protein}g</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">كارب:</span>
                            <span className="font-bold">{meal.carbs}g</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">دهون:</span>
                            <span className="font-bold">{meal.fats}g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-zinc-700">
                      <p className="text-sm text-gray-300">
                        <strong className="text-blue-400">💡 نصيحة:</strong> {meal.tips}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-6 p-6 bg-blue-600/10 border border-blue-600 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-3">نصائح مهمة للتنشيف:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ عجز 300-500 سعر تحت احتياجك اليومي</li>
                  <li>✅ بروتين عالي جداً (2.5g/kg) للحفاظ على العضلات</li>
                  <li>✅ قلل الكارب والدهون، لكن لا تلغيهم تماماً</li>
                  <li>✅ كارديو HIIT 3-4 مرات أسبوعياً</li>
                  <li>✅ وجبات متعددة صغيرة تحافظ على الأيض</li>
                  <li>✅ شاي أخضر وقهوة تساعد في حرق الدهون</li>
                  <li>✅ لا تنشف بسرعة - 0.5-1 كجم أسبوعياً كافي</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strength">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-red-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-red-500" />
                نظام القوة (Strength Diet)
              </CardTitle>
              <CardDescription className="text-base">
                <strong className="text-red-400">المجموع اليومي:</strong> ~3,970 سعر حراري | 
                البروتين: 275g | الكارب: 480g | الدهون: 93g
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {strengthMeals.map((meal, index) => (
                <Card key={index} className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-red-400">{meal.nameAr}</CardTitle>
                        <CardDescription>{meal.time}</CardDescription>
                      </div>
                      <Badge className="bg-red-600">{meal.calories} سعر</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm text-red-400 mb-2 flex items-center gap-2">
                          <UtensilsCrossed className="w-4 h-4" />
                          المكونات:
                        </p>
                        <ul className="space-y-1 text-sm">
                          {meal.foodsAr.map((food, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-red-500">•</span>
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-red-400 mb-2">الماكروز:</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">بروتين:</span>
                            <span className="font-bold">{meal.protein}g</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">كارب:</span>
                            <span className="font-bold">{meal.carbs}g</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">دهون:</span>
                            <span className="font-bold">{meal.fats}g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-zinc-700">
                      <p className="text-sm text-gray-300">
                        <strong className="text-red-400">💡 نصيحة:</strong> {meal.tips}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-6 p-6 bg-red-600/10 border border-red-600 rounded-lg">
                <h4 className="font-bold text-red-400 mb-3">نصائح مهمة لبناء القوة:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ سعرات عالية للطاقة والتعافي من الأوزان الثقيلة</li>
                  <li>✅ اللحوم الحمراء غنية بالكرياتين الطبيعي</li>
                  <li>✅ كارب عالي قبل وبعد التمرين</li>
                  <li>✅ الكرياتين أهم مكمل للقوة (5g يومياً)</li>
                  <li>✅ أوميجا 3 للمفاصل (من السمك)</li>
                  <li>✅ نوم 8-9 ساعات للتعافي العصبي</li>
                  <li>✅ لا تقلل السعرات - القوة تحتاج وقود!</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
