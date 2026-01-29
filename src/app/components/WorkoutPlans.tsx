import { Dumbbell, Zap, Target, Flame, TrendingUp, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

interface Exercise {
  name: string;
  nameAr: string;
  sets: string;
  reps: string;
  rest: string;
  muscles: string;
  musclesAr: string;
  tips: string;
  tipsAr: string;
}

interface WorkoutDay {
  day: string;
  dayAr: string;
  focus: string;
  focusAr: string;
  exercises: Exercise[];
}

const hypertrophyProgram: WorkoutDay[] = [
  {
    day: 'Day 1',
    dayAr: 'اليوم الأول',
    focus: 'Chest & Triceps',
    focusAr: 'صدر وترايسبس',
    exercises: [
      {
        name: 'Barbell Bench Press',
        nameAr: 'ضغط بنش بالبار',
        sets: '4',
        reps: '8-12',
        rest: '90 ثانية',
        muscles: 'Chest (Upper, Middle, Lower)',
        musclesAr: 'صدر (علوي، أوسط، سفلي)',
        tips: 'حافظ على كتفيك للخلف ولأسفل. انزل البار لمنتصف الصدر. استخدم قبضة بعرض أوسع قليلاً من الكتفين.',
        tipsAr: 'Keep shoulders back and down. Lower bar to mid-chest. Use grip slightly wider than shoulders.'
      },
      {
        name: 'Incline Dumbbell Press',
        nameAr: 'ضغط دمبل مائل',
        sets: '4',
        reps: '10-12',
        rest: '75 ثانية',
        muscles: 'Upper Chest, Front Delts',
        musclesAr: 'صدر علوي، كتف أمامي',
        tips: 'زاوية المقعد 30-45 درجة. اخفض الدمبل حتى يصل لمستوى الصدر العلوي. ادفع بقوة للأعلى.',
        tipsAr: 'Bench angle 30-45 degrees. Lower dumbbells to upper chest level. Push up powerfully.'
      },
      {
        name: 'Cable Flyes',
        nameAr: 'فتح كابل',
        sets: '3',
        reps: '12-15',
        rest: '60 ثانية',
        muscles: 'Inner Chest',
        musclesAr: 'صدر داخلي',
        tips: 'حافظ على انحناء طفيف في المرفقين. اضغط عضلات الصدر في نهاية الحركة. تحكم في العودة.',
        tipsAr: 'Keep slight bend in elbows. Squeeze chest at peak. Control the return.'
      },
      {
        name: 'Dips',
        nameAr: 'غطس موازي',
        sets: '3',
        reps: '10-15',
        rest: '60 ثانية',
        muscles: 'Lower Chest, Triceps',
        musclesAr: 'صدر سفلي، ترايسبس',
        tips: 'مِل للأمام قليلاً لتركيز على الصدر. انزل حتى تصل زاوية 90 درجة في المرفق.',
        tipsAr: 'Lean forward slightly for chest focus. Lower until 90-degree elbow angle.'
      },
      {
        name: 'Tricep Pushdowns',
        nameAr: 'ضغط ترايسبس بالكابل',
        sets: '4',
        reps: '12-15',
        rest: '45 ثانية',
        muscles: 'Triceps (All 3 Heads)',
        musclesAr: 'ترايسبس (الرؤوس الثلاثة)',
        tips: 'ثبت المرفقين بجانب الجسم. اضغط للأسفل حتى الامتداد الكامل. تحكم في العودة.',
        tipsAr: 'Keep elbows pinned to sides. Push down to full extension. Control the return.'
      },
      {
        name: 'Overhead Dumbbell Extension',
        nameAr: 'تمديد دمبل فوق الرأس',
        sets: '3',
        reps: '12-15',
        rest: '45 ثانية',
        muscles: 'Triceps Long Head',
        musclesAr: 'الرأس الطويل للترايسبس',
        tips: 'ثبت المرفقين للأعلى. اخفض الدمبل خلف الرأس حتى تشعر بالتمدد. ارفع بتحكم.',
        tipsAr: 'Keep elbows pointing up. Lower dumbbell behind head until stretch. Raise with control.'
      }
    ]
  },
  {
    day: 'Day 2',
    dayAr: 'اليوم الثاني',
    focus: 'Back & Biceps',
    focusAr: 'ظهر وبايسبس',
    exercises: [
      {
        name: 'Deadlifts',
        nameAr: 'الرفعة الميتة',
        sets: '4',
        reps: '6-10',
        rest: '120 ثانية',
        muscles: 'Entire Back, Glutes, Hamstrings',
        musclesAr: 'الظهر بالكامل، المؤخرة، الفخذ الخلفي',
        tips: 'ظهر مستقيم دائماً. ادفع بالأرض بكعبيك. شد الكتفين للخلف في الأعلى.',
        tipsAr: 'Always keep back straight. Push through heels. Pull shoulders back at top.'
      },
      {
        name: 'Pull-Ups / Lat Pulldowns',
        nameAr: 'عقلة / سحب أمامي',
        sets: '4',
        reps: '8-12',
        rest: '90 ثانية',
        muscles: 'Lats, Upper Back',
        musclesAr: 'عضلات الظهر العريضة، الظهر العلوي',
        tips: 'اسحب الصدر للبار. اضغط لوحي الكتف معاً. تحكم في النزول.',
        tipsAr: 'Pull chest to bar. Squeeze shoulder blades together. Control the descent.'
      },
      {
        name: 'Barbell Rows',
        nameAr: 'تجديف بالبار',
        sets: '4',
        reps: '8-12',
        rest: '90 ثانية',
        muscles: 'Mid Back, Lats',
        musclesAr: 'منتصف الظهر، العضلات العريضة',
        tips: 'انحنِ 45 درجة. اسحب البار لأسفل الصدر. اضغط عضلات الظهر في الأعلى.',
        tipsAr: 'Bend 45 degrees. Pull bar to lower chest. Squeeze back muscles at top.'
      },
      {
        name: 'Seated Cable Rows',
        nameAr: 'تجديف جلوس بالكابل',
        sets: '3',
        reps: '10-12',
        rest: '60 ثانية',
        muscles: 'Mid Back, Rhomboids',
        musclesAr: 'منتصف الظهر، المعينية',
        tips: 'ظهر مستقيم. اسحب للمعدة. اضغط لوحي الكتف.',
        tipsAr: 'Straight back. Pull to stomach. Squeeze shoulder blades.'
      },
      {
        name: 'Face Pulls',
        nameAr: 'سحب للوجه',
        sets: '3',
        reps: '15-20',
        rest: '45 ثانية',
        muscles: 'Rear Delts, Upper Back',
        musclesAr: 'كتف خلفي، ظهر علوي',
        tips: 'اسحب للوجه مع تدوير الأيدي للخارج. اضغط الكتف الخلفي.',
        tipsAr: 'Pull to face rotating hands out. Squeeze rear delts.'
      },
      {
        name: 'Barbell Curls',
        nameAr: 'تكوير بالبار',
        sets: '4',
        reps: '10-12',
        rest: '60 ثانية',
        muscles: 'Biceps',
        musclesAr: 'بايسبس',
        tips: 'ثبت المرفقين. لا تتأرجح. اضغط في الأعلى.',
        tipsAr: 'Keep elbows fixed. No swinging. Squeeze at top.'
      },
      {
        name: 'Hammer Curls',
        nameAr: 'تكوير مطرقة',
        sets: '3',
        reps: '12-15',
        rest: '45 ثانية',
        muscles: 'Biceps, Brachialis, Forearms',
        musclesAr: 'بايسبس، عضدية، ساعد',
        tips: 'قبضة محايدة (راحة اليد للداخل). تحكم كامل.',
        tipsAr: 'Neutral grip (palms facing in). Full control.'
      }
    ]
  },
  {
    day: 'Day 3',
    dayAr: 'اليوم الثالث',
    focus: 'Rest or Cardio',
    focusAr: 'راحة أو كارديو',
    exercises: [
      {
        name: 'LISS Cardio',
        nameAr: 'كارديو منخفض الشدة',
        sets: '1',
        reps: '30-45 دقيقة',
        rest: '-',
        muscles: 'Cardiovascular System',
        musclesAr: 'الجهاز القلبي الوعائي',
        tips: 'مشي سريع، دراجة، سباحة. حافظ على معدل قلب 60-70% من الأقصى.',
        tipsAr: 'Brisk walking, cycling, swimming. Keep heart rate 60-70% of max.'
      },
      {
        name: 'Stretching & Mobility',
        nameAr: 'إطالة ومرونة',
        sets: '1',
        reps: '20-30 دقيقة',
        rest: '-',
        muscles: 'Full Body',
        musclesAr: 'الجسم بالكامل',
        tips: 'ركز على المناطق المشدودة. احتفظ بكل إطالة 30 ثانية.',
        tipsAr: 'Focus on tight areas. Hold each stretch 30 seconds.'
      }
    ]
  },
  {
    day: 'Day 4',
    dayAr: 'اليوم الرابع',
    focus: 'Shoulders & Abs',
    focusAr: 'أكتاف وبطن',
    exercises: [
      {
        name: 'Overhead Press',
        nameAr: 'ضغط فوق الرأس',
        sets: '4',
        reps: '8-12',
        rest: '90 ثانية',
        muscles: 'Front & Middle Delts',
        musclesAr: 'كتف أمامي وجانبي',
        tips: 'ادفع البار من أعلى الصدر للأعلى. ثبت الكور.',
        tipsAr: 'Push bar from upper chest overhead. Brace core.'
      },
      {
        name: 'Lateral Raises',
        nameAr: 'رفع جانبي',
        sets: '4',
        reps: '12-15',
        rest: '60 ثانية',
        muscles: 'Middle Delts',
        musclesAr: 'كتف جانبي',
        tips: 'ارفع من الجانب حتى مستوى الكتف. قيادة بالمرفق.',
        tipsAr: 'Raise from sides to shoulder level. Lead with elbow.'
      },
      {
        name: 'Front Raises',
        nameAr: 'رفع أمامي',
        sets: '3',
        reps: '12-15',
        rest: '60 ثانية',
        muscles: 'Front Delts',
        musclesAr: 'كتف أمامي',
        tips: 'ارفع الدمبل للأمام حتى مستوى العين. تحكم في النزول.',
        tipsAr: 'Raise dumbbell forward to eye level. Control descent.'
      },
      {
        name: 'Reverse Flyes',
        nameAr: 'فتح عكسي',
        sets: '4',
        reps: '12-15',
        rest: '60 ثانية',
        muscles: 'Rear Delts',
        musclesAr: 'كتف خلفي',
        tips: 'انحنِ للأمام. ارفع الدمبل للجانبين. اضغط الكتف الخلفي.',
        tipsAr: 'Bend forward. Raise dumbbells to sides. Squeeze rear delts.'
      },
      {
        name: 'Planks',
        nameAr: 'بلانك',
        sets: '4',
        reps: '60 ثانية',
        rest: '45 ثانية',
        muscles: 'Core, Abs',
        musclesAr: 'الكور، البطن',
        tips: 'جسم مستقيم من الرأس للكعب. شد البطن.',
        tipsAr: 'Straight line head to heels. Brace abs.'
      },
      {
        name: 'Cable Crunches',
        nameAr: 'بطن بالكابل',
        sets: '4',
        reps: '15-20',
        rest: '45 ثانية',
        muscles: 'Upper Abs',
        musclesAr: 'بطن علوي',
        tips: 'احنِ من الخصر. اضغط البطن بقوة.',
        tipsAr: 'Curl from waist. Squeeze abs hard.'
      },
      {
        name: 'Leg Raises',
        nameAr: 'رفع الأرجل',
        sets: '3',
        reps: '15-20',
        rest: '45 ثانية',
        muscles: 'Lower Abs',
        musclesAr: 'بطن سفلي',
        tips: 'ارفع الأرجل ببطء. تحكم في النزول.',
        tipsAr: 'Raise legs slowly. Control descent.'
      }
    ]
  },
  {
    day: 'Day 5',
    dayAr: 'اليوم الخامس',
    focus: 'Legs',
    focusAr: 'أرجل',
    exercises: [
      {
        name: 'Squats',
        nameAr: 'سكوات',
        sets: '4',
        reps: '8-12',
        rest: '120 ثانية',
        muscles: 'Quads, Glutes, Hamstrings',
        musclesAr: 'فخذ أمامي، مؤخرة، فخذ خلفي',
        tips: 'انزل حتى الموازاة أو أعمق. ادفع بالكعبين. ظهر مستقيم.',
        tipsAr: 'Descend to parallel or deeper. Push through heels. Straight back.'
      },
      {
        name: 'Romanian Deadlifts',
        nameAr: 'رفعة ميتة رومانية',
        sets: '4',
        reps: '10-12',
        rest: '90 ثانية',
        muscles: 'Hamstrings, Glutes, Lower Back',
        musclesAr: 'فخذ خلفي، مؤخرة، ظهر سفلي',
        tips: 'ظهر مستقيم. ادفع المؤخرة للخلف. اشعر بالتمدد في الفخذ الخلفي.',
        tipsAr: 'Straight back. Push hips back. Feel hamstring stretch.'
      },
      {
        name: 'Leg Press',
        nameAr: 'ليج بريس',
        sets: '4',
        reps: '12-15',
        rest: '90 ثانية',
        muscles: 'Quads, Glutes',
        musclesAr: 'فخذ أمامي، مؤخرة',
        tips: 'قدم في منتصف المنصة. انزل حتى 90 درجة. ادفع بقوة.',
        tipsAr: 'Feet mid-platform. Lower to 90 degrees. Push powerfully.'
      },
      {
        name: 'Leg Curls',
        nameAr: 'تكوير الأرجل',
        sets: '4',
        reps: '12-15',
        rest: '60 ثانية',
        muscles: 'Hamstrings',
        musclesAr: 'فخذ خلفي',
        tips: 'اضغط الفخذ الخلفي في الأعلى. تحكم في النزول.',
        tipsAr: 'Squeeze hamstrings at top. Control descent.'
      },
      {
        name: 'Calf Raises',
        nameAr: 'رفع سمانة',
        sets: '5',
        reps: '15-20',
        rest: '45 ثانية',
        muscles: 'Calves',
        musclesAr: 'سمانة',
        tips: 'تمدد كامل في الأسفل. اضغط في الأعلى. توقف ثانية.',
        tipsAr: 'Full stretch at bottom. Squeeze at top. Pause one second.'
      },
      {
        name: 'Bulgarian Split Squats',
        nameAr: 'سكوات بلغاري',
        sets: '3',
        reps: '10-12 لكل رجل',
        rest: '60 ثانية',
        muscles: 'Quads, Glutes',
        musclesAr: 'فخذ أمامي، مؤخرة',
        tips: 'رجل خلفية على مقعد. انزل للأسفل. ادفع بالرجل الأمامية.',
        tipsAr: 'Back leg on bench. Lower down. Push through front leg.'
      }
    ]
  }
];

const strengthProgram: WorkoutDay[] = [
  {
    day: 'Day 1',
    dayAr: 'اليوم الأول',
    focus: 'Squat Day',
    focusAr: 'يوم السكوات',
    exercises: [
      {
        name: 'Back Squat',
        nameAr: 'سكوات خلفي',
        sets: '5',
        reps: '5',
        rest: '3-5 دقائق',
        muscles: 'Full Lower Body',
        musclesAr: 'الجزء السفلي بالكامل',
        tips: 'وزن ثقيل 85-90% من الأقصى. راحة كاملة بين المجموعات. ركز على القوة.',
        tipsAr: 'Heavy weight 85-90% of max. Full rest between sets. Focus on strength.'
      },
      {
        name: 'Front Squat',
        nameAr: 'سكوات أمامي',
        sets: '3',
        reps: '5',
        rest: '3 دقائق',
        muscles: 'Quads, Core',
        musclesAr: 'فخذ أمامي، كور',
        tips: 'وزن 70-75% من الأقصى. حافظ على وضعية منتصبة.',
        tipsAr: 'Weight 70-75% of max. Maintain upright posture.'
      },
      {
        name: 'Pause Squats',
        nameAr: 'سكوات بالتوقف',
        sets: '3',
        reps: '3',
        rest: '3 دقائق',
        muscles: 'Explosive Power',
        musclesAr: 'القوة الانفجارية',
        tips: 'توقف 2-3 ثواني في الأسفل. انفجر للأعلى.',
        tipsAr: 'Pause 2-3 seconds at bottom. Explode up.'
      }
    ]
  },
  {
    day: 'Day 2',
    dayAr: 'اليوم الثاني',
    focus: 'Bench Press Day',
    focusAr: 'يوم البنش',
    exercises: [
      {
        name: 'Bench Press',
        nameAr: 'ضغط بنش',
        sets: '5',
        reps: '5',
        rest: '3-5 دقائق',
        muscles: 'Chest, Triceps, Shoulders',
        musclesAr: 'صدر، ترايسبس، أكتاف',
        tips: 'وزن ثقيل 85-90% من الأقصى. راحة كاملة. تحكم في النزول.',
        tipsAr: 'Heavy weight 85-90% of max. Full rest. Control descent.'
      },
      {
        name: 'Close Grip Bench',
        nameAr: 'ضغط بنش بقبضة ضيقة',
        sets: '4',
        reps: '5',
        rest: '3 دقائق',
        muscles: 'Triceps, Inner Chest',
        musclesAr: 'ترايسبس، صدر داخلي',
        tips: 'قبضة بعرض الكتفين. ثبت المرفقين.',
        tipsAr: 'Shoulder-width grip. Keep elbows tucked.'
      },
      {
        name: 'Overhead Press',
        nameAr: 'ضغط فوق الرأس',
        sets: '4',
        reps: '5',
        rest: '3 دقائق',
        muscles: 'Shoulders',
        musclesAr: 'أكتاف',
        tips: 'وزن 70-75% من الأقصى. مسار عمودي.',
        tipsAr: 'Weight 70-75% of max. Vertical path.'
      }
    ]
  },
  {
    day: 'Day 3',
    dayAr: 'اليوم الثالث',
    focus: 'Deadlift Day',
    focusAr: 'يوم الديدليفت',
    exercises: [
      {
        name: 'Conventional Deadlift',
        nameAr: 'رفعة ميتة تقليدية',
        sets: '5',
        reps: '5',
        rest: '3-5 دقائق',
        muscles: 'Full Posterior Chain',
        musclesAr: 'السلسلة الخلفية بالكامل',
        tips: 'وزن ثقيل 85-90% من الأقصى. ظهر مستقيم دائماً. ادفع بالأرض.',
        tipsAr: 'Heavy weight 85-90% of max. Always straight back. Push through floor.'
      },
      {
        name: 'Deficit Deadlifts',
        nameAr: 'رفعة ميتة من ارتفاع',
        sets: '3',
        reps: '5',
        rest: '3 دقائق',
        muscles: 'Starting Strength',
        musclesAr: 'قوة البداية',
        tips: 'قف على منصة 2-4 بوصة. وزن 70-75%.',
        tipsAr: 'Stand on 2-4 inch platform. Weight 70-75%.'
      },
      {
        name: 'Barbell Rows',
        nameAr: 'تجديف بالبار',
        sets: '4',
        reps: '5',
        rest: '2 دقيقة',
        muscles: 'Back Thickness',
        musclesAr: 'سُمك الظهر',
        tips: 'وزن 70-80%. انفجار في السحب.',
        tipsAr: 'Weight 70-80%. Explosive pull.'
      }
    ]
  }
];

const speedAgilityProgram: WorkoutDay[] = [
  {
    day: 'Day 1',
    dayAr: 'اليوم الأول',
    focus: 'Sprint Training',
    focusAr: 'تدريب السرعة',
    exercises: [
      {
        name: 'Sprint Intervals',
        nameAr: 'فترات السرعة',
        sets: '8-10',
        reps: '100 متر',
        rest: '2-3 دقائق',
        muscles: 'Fast Twitch Muscle Fibers',
        musclesAr: 'ألياف العضلات السريعة',
        tips: 'جري بأقصى سرعة. راحة كاملة بين التكرارات.',
        tipsAr: 'Run at maximum speed. Full rest between reps.'
      },
      {
        name: 'Box Jumps',
        nameAr: 'القفز على الصندوق',
        sets: '5',
        reps: '5',
        rest: '2 دقيقة',
        muscles: 'Explosive Power',
        musclesAr: 'القوة الانفجارية',
        tips: 'قفز بقوة. هبوط ناعم. ركز على السرعة.',
        tipsAr: 'Jump explosively. Soft landing. Focus on speed.'
      },
      {
        name: 'Broad Jumps',
        nameAr: 'القفز الطويل',
        sets: '5',
        reps: '5',
        rest: '90 ثانية',
        muscles: 'Horizontal Power',
        musclesAr: 'القوة الأفقية',
        tips: 'قفز لأبعد مسافة ممكنة. استخدم الذراعين.',
        tipsAr: 'Jump as far as possible. Use arms.'
      }
    ]
  },
  {
    day: 'Day 2',
    dayAr: 'اليوم الثاني',
    focus: 'Agility & Coordination',
    focusAr: 'الرشاقة والتنسيق',
    exercises: [
      {
        name: 'Ladder Drills',
        nameAr: 'تدريبات السلم',
        sets: '5',
        reps: '6 أنماط مختلفة',
        rest: '60 ثانية',
        muscles: 'Foot Speed, Coordination',
        musclesAr: 'سرعة القدم، التنسيق',
        tips: 'قدم سريعة. حافظ على وضعية منخفضة. انظر للأمام.',
        tipsAr: 'Quick feet. Stay low. Look forward.'
      },
      {
        name: 'Cone Drills',
        nameAr: 'تدريبات المخروط',
        sets: '5',
        reps: '5-10 تكرار',
        rest: '90 ثانية',
        muscles: 'Change of Direction',
        musclesAr: 'تغيير الاتجاه',
        tips: 'قطع حاد. ادفع من القدم الخارجية. توازن.',
        tipsAr: 'Sharp cuts. Push off outside foot. Balance.'
      }
    ]
  }
];

export function WorkoutPlans() {
  return (
    <div className="w-full py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          💪 خطط التمارين التفصيلية
        </h2>
        <p className="text-lg text-gray-400">
          كل التفاصيل الممله اللي محتاجها عشان تبني جسمك بشكل صحيح ومحترف
        </p>
      </div>

      <Tabs defaultValue="hypertrophy" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-zinc-900">
          <TabsTrigger value="hypertrophy" className="data-[state=active]:bg-orange-600">
            <Flame className="w-4 h-4 mr-2" />
            تضخيم
          </TabsTrigger>
          <TabsTrigger value="strength" className="data-[state=active]:bg-red-600">
            <Dumbbell className="w-4 h-4 mr-2" />
            قوة
          </TabsTrigger>
          <TabsTrigger value="speed" className="data-[state=active]:bg-yellow-600">
            <Zap className="w-4 h-4 mr-2" />
            سرعة
          </TabsTrigger>
          <TabsTrigger value="fitness" className="data-[state=active]:bg-green-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            لياقة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hypertrophy" className="space-y-6">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-orange-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Flame className="w-6 h-6 text-orange-500" />
                برنامج التضخيم (Hypertrophy)
              </CardTitle>
              <CardDescription className="text-base">
                مصمم لزيادة حجم العضلات بشكل أقصى. 5 أيام تدريب في الأسبوع. تركيز على 8-15 تكرار.
                راحة متوسطة بين المجموعات (60-90 ثانية).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {hypertrophyProgram.map((day, index) => (
                  <AccordionItem key={index} value={`day-${index}`} className="border-zinc-700">
                    <AccordionTrigger className="hover:text-orange-500">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="bg-orange-600/20 border-orange-600">
                          {day.dayAr}
                        </Badge>
                        <span className="text-lg font-semibold">{day.focusAr}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {day.exercises.map((exercise, exIndex) => (
                          <Card key={exIndex} className="bg-zinc-800/50 border-zinc-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-orange-400">
                                {exercise.nameAr}
                              </CardTitle>
                              <CardDescription>{exercise.name}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Target className="w-4 h-4 text-orange-500" />
                                  <span className="text-gray-400">المجموعات:</span>
                                  <span className="font-bold">{exercise.sets}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-orange-500" />
                                  <span className="text-gray-400">التكرارات:</span>
                                  <span className="font-bold">{exercise.reps}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Info className="w-4 h-4 text-orange-500" />
                                  <span className="text-gray-400">الراحة:</span>
                                  <span className="font-bold">{exercise.rest}</span>
                                </div>
                              </div>
                              <div className="pt-2 border-t border-zinc-700">
                                <p className="text-sm text-gray-400 mb-1">
                                  <strong className="text-orange-400">العضلات المستهدفة:</strong>{' '}
                                  {exercise.musclesAr}
                                </p>
                                <p className="text-sm text-gray-300">
                                  <strong className="text-orange-400">نصائح:</strong> {exercise.tips}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strength" className="space-y-6">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-red-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Dumbbell className="w-6 h-6 text-red-500" />
                برنامج القوة (Strength)
              </CardTitle>
              <CardDescription className="text-base">
                مصمم لزيادة القوة القصوى. 3 أيام تدريب في الأسبوع. تركيز على 1-5 تكرارات.
                راحة طويلة بين المجموعات (3-5 دقائق). أوزان ثقيلة جداً 85-95% من الأقصى.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {strengthProgram.map((day, index) => (
                  <AccordionItem key={index} value={`day-${index}`} className="border-zinc-700">
                    <AccordionTrigger className="hover:text-red-500">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="bg-red-600/20 border-red-600">
                          {day.dayAr}
                        </Badge>
                        <span className="text-lg font-semibold">{day.focusAr}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {day.exercises.map((exercise, exIndex) => (
                          <Card key={exIndex} className="bg-zinc-800/50 border-zinc-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-red-400">
                                {exercise.nameAr}
                              </CardTitle>
                              <CardDescription>{exercise.name}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Target className="w-4 h-4 text-red-500" />
                                  <span className="text-gray-400">المجموعات:</span>
                                  <span className="font-bold">{exercise.sets}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-red-500" />
                                  <span className="text-gray-400">التكرارات:</span>
                                  <span className="font-bold">{exercise.reps}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Info className="w-4 h-4 text-red-500" />
                                  <span className="text-gray-400">الراحة:</span>
                                  <span className="font-bold">{exercise.rest}</span>
                                </div>
                              </div>
                              <div className="pt-2 border-t border-zinc-700">
                                <p className="text-sm text-gray-400 mb-1">
                                  <strong className="text-red-400">العضلات المستهدفة:</strong>{' '}
                                  {exercise.musclesAr}
                                </p>
                                <p className="text-sm text-gray-300">
                                  <strong className="text-red-400">نصائح:</strong> {exercise.tips}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="speed" className="space-y-6">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-yellow-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6 text-yellow-500" />
                برنامج السرعة والرشاقة (Speed & Agility)
              </CardTitle>
              <CardDescription className="text-base">
                مصمم لتحسين السرعة والانفجارية والرشاقة. 3-4 أيام في الأسبوع.
                تركيز على القوة الانفجارية وسرعة الحركة. راحة كاملة بين المجموعات.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {speedAgilityProgram.map((day, index) => (
                  <AccordionItem key={index} value={`day-${index}`} className="border-zinc-700">
                    <AccordionTrigger className="hover:text-yellow-500">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="bg-yellow-600/20 border-yellow-600">
                          {day.dayAr}
                        </Badge>
                        <span className="text-lg font-semibold">{day.focusAr}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {day.exercises.map((exercise, exIndex) => (
                          <Card key={exIndex} className="bg-zinc-800/50 border-zinc-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-yellow-400">
                                {exercise.nameAr}
                              </CardTitle>
                              <CardDescription>{exercise.name}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Target className="w-4 h-4 text-yellow-500" />
                                  <span className="text-gray-400">المجموعات:</span>
                                  <span className="font-bold">{exercise.sets}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-yellow-500" />
                                  <span className="text-gray-400">التكرارات:</span>
                                  <span className="font-bold">{exercise.reps}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Info className="w-4 h-4 text-yellow-500" />
                                  <span className="text-gray-400">الراحة:</span>
                                  <span className="font-bold">{exercise.rest}</span>
                                </div>
                              </div>
                              <div className="pt-2 border-t border-zinc-700">
                                <p className="text-sm text-gray-400 mb-1">
                                  <strong className="text-yellow-400">الهدف:</strong>{' '}
                                  {exercise.musclesAr}
                                </p>
                                <p className="text-sm text-gray-300">
                                  <strong className="text-yellow-400">نصائح:</strong> {exercise.tips}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fitness" className="space-y-6">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-green-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-green-500" />
                برنامج اللياقة العامة (General Fitness)
              </CardTitle>
              <CardDescription className="text-base">
                برنامج متوازن لتحسين اللياقة البدنية العامة والصحة. 4-5 أيام في الأسبوع.
                مزيج من تمارين القوة والكارديو والمرونة.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">اليوم 1 و 4: القوة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• تمارين مركبة: سكوات، بنش، ديدليفت، عقلة</p>
                    <p>• 3-4 مجموعات × 10-12 تكرار</p>
                    <p>• راحة: 60-90 ثانية</p>
                    <p>• تمارين البطن في النهاية</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">اليوم 2 و 5: كارديو</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• HIIT: 20-30 دقيقة</p>
                    <p>• 30 ثانية مجهود عالي / 60 ثانية راحة نشطة</p>
                    <p>• أو كارديو متوسط الشدة 45 دقيقة</p>
                    <p>• تمارين إطالة بعد الانتهاء</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">اليوم 3: دائرة تدريبية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• 5-6 تمارين في دائرة</p>
                    <p>• 45 ثانية تمرين / 15 ثانية راحة</p>
                    <p>• 3-4 دورات كاملة</p>
                    <p>• مزيج من القوة والكارديو</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">اليوم 6: نشاط خفيف</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• يوجا أو بيلاتس</p>
                    <p>• مشي أو سباحة خفيفة</p>
                    <p>• إطالة عميقة</p>
                    <p>• استرخاء وتعافي</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-green-600/10 border border-green-600 rounded-lg">
                <h4 className="font-bold text-green-400 mb-2">نصائح مهمة للياقة العامة:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>✅ استمع لجسمك ولا تفرط في التدريب</li>
                  <li>✅ نوّع في التمارين لتجنب الملل</li>
                  <li>✅ حافظ على الاتساق - الانتظام أهم من الشدة</li>
                  <li>✅ اشرب ماء كثير قبل وأثناء وبعد التمرين</li>
                  <li>✅ نم جيداً - 7-9 ساعات يومياً</li>
                  <li>✅ تتبع تقدمك واحتفل بالإنجازات الصغيرة</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
