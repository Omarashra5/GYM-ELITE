import { Lightbulb, Droplets, Moon, Apple, Flame, Heart, Brain, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function FitnessTips() {
  return (
    <div className="w-full py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
          💡 نصائح وإرشادات ذهبية
        </h2>
        <p className="text-lg text-gray-400">
          كل المعلومات والنصائح اللي محتاجها عشان تنجح في رحلتك
        </p>
      </div>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-zinc-900">
          <TabsTrigger value="basics" className="data-[state=active]:bg-yellow-600">
            <Lightbulb className="w-4 h-4 mr-2" />
            أساسيات
          </TabsTrigger>
          <TabsTrigger value="recovery" className="data-[state=active]:bg-blue-600">
            <Moon className="w-4 h-4 mr-2" />
            التعافي
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="data-[state=active]:bg-green-600">
            <Apple className="w-4 h-4 mr-2" />
            التغذية
          </TabsTrigger>
          <TabsTrigger value="mindset" className="data-[state=active]:bg-purple-600">
            <Brain className="w-4 h-4 mr-2" />
            العقلية
          </TabsTrigger>
        </TabsList>

        {/* Basics Tab */}
        <TabsContent value="basics">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-yellow-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400">
                  <Flame className="w-5 h-5" />
                  أساسيات التمرين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="progressive-overload">
                    <AccordionTrigger className="text-yellow-400">
                      التحميل التدريجي (Progressive Overload)
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <p>المبدأ الأهم في بناء العضلات والقوة!</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>زوّد الوزن كل أسبوع أو أسبوعين (حتى لو 2.5 كجم)</li>
                        <li>أو زوّد التكرارات (من 8 لـ 10 لـ 12)</li>
                        <li>أو قلل وقت الراحة</li>
                        <li>أو زوّد المجموعات</li>
                        <li>العضلة لازم تتحدى عشان تكبر!</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="form">
                    <AccordionTrigger className="text-yellow-400">
                      الأداء الصحيح (Proper Form)
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <p>الأداء أهم من الوزن!</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>الأداء السيء = إصابات محتملة</li>
                        <li>ركز على العضلة المستهدفة</li>
                        <li>حركة كاملة (Full Range of Motion)</li>
                        <li>تحكم في النزول، انفجار في الصعود</li>
                        <li>لو ما تقدر تحافظ على الأداء، قلل الوزن</li>
                        <li>استعين بمدرب في البداية</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="compound">
                    <AccordionTrigger className="text-yellow-400">
                      التمارين المركبة (Compound Exercises)
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <p>أساس أي برنامج قوي!</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li><strong>السكوات:</strong> ملك تمارين الرجل</li>
                        <li><strong>الديدليفت:</strong> تمرين الجسم بالكامل</li>
                        <li><strong>البنش:</strong> أساس الصدر والقوة العلوية</li>
                        <li><strong>العقلة:</strong> أفضل تمرين للظهر</li>
                        <li><strong>الضغط فوق الرأس:</strong> للأكتاف القوية</li>
                        <li>التمارين المركبة تشتغل عضلات كثيرة = هرمونات أكثر = نمو أسرع</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="warmup">
                    <AccordionTrigger className="text-yellow-400">
                      الإحماء والإطالة
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <p>لا تهمل الإحماء أبداً!</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>5-10 دقائق كارديو خفيف</li>
                        <li>إطالة ديناميكية قبل التمرين</li>
                        <li>مجموعات إحماء بأوزان خفيفة</li>
                        <li>إطالة ثابتة بعد التمرين</li>
                        <li>الإحماء يمنع الإصابات ويحسن الأداء</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-yellow-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400">
                  <Shield className="w-5 h-5" />
                  تجنب الأخطاء الشائعة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-red-600/10 border border-red-600 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-2">❌ الإفراط في التدريب</h4>
                    <p className="text-sm text-gray-300">
                      أكثر ليس دائماً أفضل! العضلة تنمو في الراحة، ليس في الجيم. تدريب كل عضلة مرتين أسبوعياً كافي.
                    </p>
                  </div>

                  <div className="p-4 bg-red-600/10 border border-red-600 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-2">❌ تجاهل الرجل</h4>
                    <p className="text-sm text-gray-300">
                      "Leg day is the best day!" - يوم الرجل يزيد التستوستيرون وهرمون النمو في كل الجسم.
                    </p>
                  </div>

                  <div className="p-4 bg-red-600/10 border border-red-600 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-2">❌ مقارنة نفسك بالآخرين</h4>
                    <p className="text-sm text-gray-300">
                      كل واحد عنده جينات وظروف مختلفة. قارن نفسك بنفسك بس. ركز على تقدمك الشخصي.
                    </p>
                  </div>

                  <div className="p-4 bg-red-600/10 border border-red-600 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-2">❌ عدم تتبع التقدم</h4>
                    <p className="text-sm text-gray-300">
                      سجل تمارينك! كيف تعرف إنك تتطور لو ما تسجل؟ استخدم دفتر أو تطبيق.
                    </p>
                  </div>

                  <div className="p-4 bg-red-600/10 border border-red-600 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-2">❌ الأوزان الثقيلة بدون استعداد</h4>
                    <p className="text-sm text-gray-300">
                      "Ego lifting" يسبب إصابات. ابدأ خفيف، وتطور تدريجياً. الصبر مفتاح النجاح.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Recovery Tab */}
        <TabsContent value="recovery">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Moon className="w-5 h-5" />
                  أهمية النوم
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-600/10 border border-blue-600 rounded-lg">
                  <h4 className="font-bold text-blue-400 mb-2">النوم = النمو</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>✅ 7-9 ساعات نوم يومياً (الأمثل 8 ساعات)</li>
                    <li>✅ 90% من هرمون النمو يُفرز أثناء النوم العميق</li>
                    <li>✅ التستوستيرون يرتفع أثناء النوم</li>
                    <li>✅ الجهاز العصبي يتعافى</li>
                    <li>✅ العضلات تُصلح وتُبنى</li>
                    <li>✅ قلة النوم = كورتيزول عالي = فقدان عضلات</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-600/10 border border-blue-600 rounded-lg">
                  <h4 className="font-bold text-blue-400 mb-2">نصائح للنوم الأفضل:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• نم واستيقظ في نفس الوقت يومياً</li>
                    <li>• غرفة باردة (18-20 درجة مئوية)</li>
                    <li>• غرفة مظلمة تماماً</li>
                    <li>• لا شاشات قبل النوم بساعة</li>
                    <li>• مكملات: الماغنسيوم، ZMA، الميلاتونين</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Heart className="w-5 h-5" />
                  استراتيجيات التعافي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Accordion type="single" collapsible>
                  <AccordionItem value="rest-days">
                    <AccordionTrigger className="text-blue-400">أيام الراحة</AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <ul className="space-y-1 list-disc list-inside text-sm">
                        <li>على الأقل 1-2 يوم راحة كاملة أسبوعياً</li>
                        <li>الراحة النشطة (مشي، يوجا، سباحة خفيفة)</li>
                        <li>لو تشعر بتعب شديد، خذ يوم راحة إضافي</li>
                        <li>استمع لجسمك - ألم العضلات طبيعي، ألم المفاصل خطير</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hydration">
                    <AccordionTrigger className="text-blue-400">الترطيب (الماء)</AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <ul className="space-y-1 list-disc list-inside text-sm">
                        <li>3-5 لتر ماء يومياً (أكثر في التمرين)</li>
                        <li>الجفاف يقلل القوة والأداء</li>
                        <li>شرب ماء قبل، أثناء، وبعد التمرين</li>
                        <li>لون البول: فاتح = جيد، غامق = اشرب أكثر</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="massage">
                    <AccordionTrigger className="text-blue-400">التدليك والفوم رولر</AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <ul className="space-y-1 list-disc list-inside text-sm">
                        <li>الفوم رولر يقلل التصلب العضلي</li>
                        <li>10-15 دقيقة بعد التمرين</li>
                        <li>التدليك يحسن الدورة الدموية</li>
                        <li>يسرّع التعافي ويمنع الإصابات</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="supplements">
                    <AccordionTrigger className="text-blue-400">مكملات التعافي</AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-2">
                      <ul className="space-y-1 list-disc list-inside text-sm">
                        <li><strong>BCAAs:</strong> للتعافي العضلي</li>
                        <li><strong>Glutamine:</strong> للجهاز المناعي والأمعاء</li>
                        <li><strong>Omega-3:</strong> ضد الالتهابات</li>
                        <li><strong>Vitamin D:</strong> للعظام والمناعة</li>
                        <li><strong>ZMA:</strong> للنوم والتستوستيرون</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-blue-600 md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Droplets className="w-5 h-5" />
                  جدول الترطيب المثالي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-blue-600/10 border border-blue-600 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">عند الاستيقاظ</p>
                    <p className="text-2xl font-bold text-blue-400">500 ml</p>
                    <p className="text-xs text-gray-500 mt-1">لتعويض الجفاف الليلي</p>
                  </div>
                  <div className="p-4 bg-blue-600/10 border border-blue-600 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">قبل التمرين</p>
                    <p className="text-2xl font-bold text-blue-400">500 ml</p>
                    <p className="text-xs text-gray-500 mt-1">قبل 30 دقيقة</p>
                  </div>
                  <div className="p-4 bg-blue-600/10 border border-blue-600 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">أثناء التمرين</p>
                    <p className="text-2xl font-bold text-blue-400">750 ml</p>
                    <p className="text-xs text-gray-500 mt-1">رشفات منتظمة</p>
                  </div>
                  <div className="p-4 bg-blue-600/10 border border-blue-600 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">بعد التمرين</p>
                    <p className="text-2xl font-bold text-blue-400">1000 ml</p>
                    <p className="text-xs text-gray-500 mt-1">خلال ساعة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Nutrition Tab */}
        <TabsContent value="nutrition">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-green-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Apple className="w-5 h-5" />
                نصائح التغذية الذهبية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-600/10 border border-green-600 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-3">🥩 البروتين - ملك المغذيات</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• 2.2 جرام لكل كيلو من وزنك (للتضخيم والقوة)</li>
                      <li>• 2.5 جرام لكل كيلو (للتنشيف)</li>
                      <li>• وزّع على 5-7 وجبات (30-40g كل وجبة)</li>
                      <li>• مصادر: دجاج، لحم، سمك، بيض، واي بروتين</li>
                      <li>• البروتين يشبع ويحافظ على العضلات</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-600/10 border border-green-600 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-3">🍚 الكارب - الوقود</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• الكارب ليس عدوك!</li>
                      <li>• ضروري للطاقة والأداء</li>
                      <li>• مصادر نظيفة: أرز، شوفان، بطاطا، فواكه</li>
                      <li>• أكثر الكارب قبل وبعد التمرين</li>
                      <li>• قلل في الليل إذا كنت تنشف</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-600/10 border border-green-600 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-3">🥑 الدهون الصحية</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• ضرورية للهرمونات (خصوصاً التستوستيرون)</li>
                      <li>• 1 جرام لكل كيلو من وزنك</li>
                      <li>• مصادر: مكسرات، أفوكادو، زيت زيتون، سلمون</li>
                      <li>• لا تخف من الدهون - لكن بكميات معقولة</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-600/10 border border-green-600 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-3">⏰ توقيت الوجبات مهم</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>قبل التمرين (1-2 ساعة):</strong> كارب + بروتين معتدل</li>
                      <li>• <strong>بعد التمرين (خلال 30 دقيقة):</strong> بروتين سريع + كارب سريع</li>
                      <li>• <strong>قبل النوم:</strong> بروتين بطيء (كازين، جبن قريش)</li>
                      <li>• نافذة البروتين حقيقية - استغلها!</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-600/10 border border-green-600 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-3">💊 أهم المكملات</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>1️⃣ <strong>Whey Protein:</strong> أساسي وسريع الامتصاص</li>
                      <li>2️⃣ <strong>Creatine:</strong> أفضل مكمل للقوة (5g يومياً)</li>
                      <li>3️⃣ <strong>Pre-Workout:</strong> للطاقة والتركيز</li>
                      <li>4️⃣ <strong>BCAAs:</strong> للتعافي</li>
                      <li>5️⃣ <strong>Multi-Vitamin:</strong> لتغطية النقص</li>
                      <li>⚠️ المكملات تكمّل، لا تعوّض الطعام الحقيقي!</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-600/10 border border-orange-600 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-3">🍕 Cheat Meal</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• مرة في الأسبوع مقبولة</li>
                      <li>• تعيد شحن الجليكوجين</li>
                      <li>• تحفزك نفسياً</li>
                      <li>• لكن لا تتجنن - وجبة واحدة، مش يوم كامل!</li>
                      <li>• استمتع بدون ندم، وارجع للخطة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mindset Tab */}
        <TabsContent value="mindset">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-purple-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Brain className="w-5 h-5" />
                العقلية الفائزة
              </CardTitle>
              <CardDescription>النجاح يبدأ من العقل قبل العضلات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-purple-600/10 border border-purple-600 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">🎯 حدد أهدافك بوضوح</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• هدف محدد وقابل للقياس</li>
                    <li>• "أريد أن أكون قوياً" ❌</li>
                    <li>• "أريد رفع 100 كجم بنش خلال 6 أشهر" ✅</li>
                    <li>• اكتب أهدافك وراجعها أسبوعياً</li>
                    <li>• قسم الهدف الكبير لأهداف صغيرة</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-600/10 border border-purple-600 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">💪 الانضباط &gt; التحفيز</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• التحفيز مؤقت، الانضباط دائم</li>
                    <li>• روح الجيم حتى لو مش "متحفز"</li>
                    <li>• اجعله عادة، مش اختيار</li>
                    <li>• الأيام الصعبة تبني الشخصية</li>
                    <li>• "Discipline is doing what needs to be done, even when you don't want to do it"</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-600/10 border border-purple-600 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">📈 تقبّل الرحلة</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• التحول يأخذ وقت (شهور، سنوات)</li>
                    <li>• لا توجد نتائج سريعة حقيقية</li>
                    <li>• كل أسبوع من ال��تساق = استثمار</li>
                    <li>• استمتع بالعملية، مش بس النتيجة</li>
                    <li>• الجيم أسلوب حياة، مش مشروع مؤقت</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-600/10 border border-purple-600 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">🏆 احتفل بالإنجازات الصغيرة</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• زودت 2.5 كجم؟ إنجاز!</li>
                    <li>• عملت مجموعة زيادة? رائع!</li>
                    <li>• روحت الجيم 5 مرات؟ ممتاز!</li>
                    <li>• كل خطوة صغيرة مهمة</li>
                    <li>• صوّر نفسك شهرياً لترى التقدم</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600 rounded-lg">
                <h3 className="text-2xl font-bold text-center text-purple-400 mb-4">
                  💬 اقتباسات محفزة
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { quote: "The pain you feel today will be the strength you feel tomorrow", author: "Arnold Schwarzenegger" },
                    { quote: "Success isn't always about greatness. It's about consistency.", author: "Dwayne Johnson" },
                    { quote: "The only bad workout is the one that didn't happen", author: "Unknown" },
                    { quote: "Your body can stand almost anything. It's your mind you have to convince", author: "Unknown" },
                    { quote: "Don't wish for it. Work for it", author: "Unknown" },
                    { quote: "The hardest lift is lifting your butt off the couch", author: "Unknown" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-zinc-800/50 rounded-lg">
                      <p className="text-sm italic text-purple-300 mb-2">"{item.quote}"</p>
                      <p className="text-xs text-gray-500 text-right">- {item.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}