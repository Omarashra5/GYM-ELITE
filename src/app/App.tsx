import { useState, useRef } from 'react';
import { Dumbbell, Menu, X, Flame, Apple, Music2, TrendingUp, Lightbulb, Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { HeroSection } from '@/app/components/HeroSection';
import { WorkoutPlans } from '@/app/components/WorkoutPlans';
import { NutritionPlans } from '@/app/components/NutritionPlans';
import { MusicPlayer } from '@/app/components/MusicPlayer';
import { ProgressTracker } from '@/app/components/ProgressTracker';
import { FitnessTips } from '@/app/components/FitnessTips';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const heroRef = useRef<HTMLDivElement>(null);
  const workoutsRef = useRef<HTMLDivElement>(null);
  const nutritionRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: heroRef,
      workouts: workoutsRef,
      nutrition: nutritionRef,
      music: musicRef,
      progress: progressRef,
      tips: tipsRef
    };

    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'workouts', label: 'التمارين', icon: Dumbbell },
    { id: 'nutrition', label: 'التغذية', icon: Apple },
    { id: 'music', label: 'الموسيقى', icon: Music2 },
    { id: 'progress', label: 'التقدم', icon: TrendingUp },
    { id: 'tips', label: 'نصائح', icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                GYM ELITE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'text-orange-500 bg-orange-500/10'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-800">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-start gap-2 w-full ${
                      activeSection === item.id
                        ? 'text-orange-500 bg-orange-500/10'
                        : 'text-gray-400'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Content Sections */}
      <div className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} id="home">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        {/* Workouts Section */}
        <section ref={workoutsRef} id="workouts" className="py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
          <div className="container mx-auto px-4">
            <WorkoutPlans />
          </div>
        </section>

        {/* Nutrition Section */}
        <section ref={nutritionRef} id="nutrition" className="py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
          <div className="container mx-auto px-4">
            <NutritionPlans />
          </div>
        </section>

        {/* Music Section */}
        <section ref={musicRef} id="music" className="py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
          <div className="container mx-auto px-4">
            <MusicPlayer />
          </div>
        </section>

        {/* Progress Tracker Section */}
        <section ref={progressRef} id="progress" className="py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
          <div className="container mx-auto px-4">
            <ProgressTracker />
          </div>
        </section>

        {/* Tips Section */}
        <section ref={tipsRef} id="tips" className="py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
          <div className="container mx-auto px-4">
            <FitnessTips />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Dumbbell className="w-6 h-6 text-orange-500" />
                  <span className="text-xl font-bold">GYM ELITE</span>
                </div>
                <p className="text-sm text-gray-400">
                  دليلك الشامل لعالم الفتنس. كل ما تحتاجه لبناء جسم قوي وصحي.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-orange-400">التمارين</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• برنامج التضخيم</li>
                  <li>• برنامج القوة</li>
                  <li>• برنامج السرعة</li>
                  <li>• برنامج اللياقة</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-green-400">التغذية</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• نظام التضخيم</li>
                  <li>• نظام التنشيف</li>
                  <li>• نظام القوة</li>
                  <li>• حاسبة السعرات</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-purple-400">الموارد</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• موسيقى التحفيز</li>
                  <li>• تتبع التقدم</li>
                  <li>• نصائح وإرشادات</li>
                  <li>• أفضل الممارسات</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © 2026 GYM ELITE - جميع الحقوق محفوظة
              </p>
              <p className="text-xs text-gray-500 mt-2">
                تحذير: استشر طبيباً قبل البدء بأي برنامج تمارين أو نظام غذائي
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Flame className="w-4 h-4 text-orange-500" />
                <p className="text-sm text-orange-400 font-semibold">
                  No Pain, No Gain 💪
                </p>
                <Flame className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/50"
        size="icon"
      >
        <Home className="w-5 h-5" />
      </Button>
    </div>
  );
}
