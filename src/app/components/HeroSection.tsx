import { Dumbbell, Flame, Zap, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function HeroSection({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZml0bmVzc3xlbnwxfHx8fDE3NjkwMTEyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-red-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-3"
            >
              <Dumbbell className="w-12 h-12 text-orange-500" />
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                GYM ELITE
              </h1>
              <Flame className="w-12 h-12 text-red-500 animate-pulse" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              مرحباً بك في عالم القوة والتحول
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              دليلك الشامل الكامل لكل شيء في عالم الفتنس 💪
              <br />
              تمارين مفصلة | أنظمة غذائية احترافية | موسيقى تحفيزية
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {[
              { icon: Dumbbell, label: 'برامج تمارين', value: '4+', color: 'text-orange-500' },
              { icon: Target, label: 'تمارين مفصلة', value: '100+', color: 'text-red-500' },
              { icon: Flame, label: 'أنظمة غذائية', value: '3+', color: 'text-yellow-500' },
              { icon: Award, label: 'أغاني تحفيزية', value: '20+', color: 'text-purple-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 hover:border-orange-600 transition-all"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('workouts')}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-6 rounded-full shadow-lg shadow-orange-600/50"
            >
              <Dumbbell className="w-5 h-5 mr-2" />
              ابدأ التمرين الآن
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection('nutrition')}
              variant="outline"
              className="border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white text-lg px-8 py-6 rounded-full"
            >
              <Flame className="w-5 h-5 mr-2" />
              خطط التغذية
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection('music')}
              variant="outline"
              className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white text-lg px-8 py-6 rounded-full"
            >
              <Zap className="w-5 h-5 mr-2" />
              موسيقى التحفيز
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <p className="text-sm">اسحب لأسفل للمزيد</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <TrendingUp className="w-6 h-6 rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}
