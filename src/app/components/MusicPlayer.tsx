import { Play, Pause, SkipForward, SkipBack, Volume2, Music2, Repeat, Shuffle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Slider } from '@/app/components/ui/slider';
import { Badge } from '@/app/components/ui/badge';
import { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@/app/components/ui/scroll-area';

interface Song {
  id: number;
  title: string;
  titleAr: string;
  artist: string;
  artistAr: string;
  genre: string;
  genreAr: string;
  bpm: number;
  youtubeId: string;
  motivation: string;
}

const workoutPlaylist: Song[] = [
  {
    id: 1,
    title: 'Eye of the Tiger',
    titleAr: 'عين النمر',
    artist: 'Survivor',
    artistAr: 'سيرفايفر',
    genre: 'Rock',
    genreAr: 'روك',
    bpm: 109,
    youtubeId: 'btPJPFnesV4',
    motivation: 'الكلاسيكية الأسطورية للتحفيز!'
  },
  {
    id: 2,
    title: 'Till I Collapse',
    titleAr: 'حتى أنهار',
    artist: 'Eminem ft. Nate Dogg',
    artistAr: 'إمينيم',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 171,
    youtubeId: 'ytQ5CYE1VZw',
    motivation: 'للقوة والعزيمة القصوى!'
  },
  {
    id: 3,
    title: 'Lose Yourself',
    titleAr: 'اخسر نفسك',
    artist: 'Eminem',
    artistAr: 'إمينيم',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 171,
    youtubeId: '_Yhyp-_hX2s',
    motivation: 'لحظتك! امسك كل شيء!'
  },
  {
    id: 4,
    title: 'Remember the Name',
    titleAr: 'تذكر الاسم',
    artist: 'Fort Minor',
    artistAr: 'فورت مينور',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 100,
    youtubeId: 'VDvr08sCPOc',
    motivation: '10% حظ، 20% مهارة، 15% قوة إرادة!'
  },
  {
    id: 5,
    title: 'Stronger',
    titleAr: 'أقوى',
    artist: 'Kanye West',
    artistAr: 'كانييه ويست',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 104,
    youtubeId: 'PsO6ZnUZI0g',
    motivation: 'اللي ما يقتلك يقويك!'
  },
  {
    id: 6,
    title: "Can't Be Touched",
    titleAr: 'لا يمكن لمسي',
    artist: 'Roy Jones Jr.',
    artistAr: 'روي جونز',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 95,
    youtubeId: 'GoCOg8ZzUfg',
    motivation: 'للشعور بأنك لا يُقهر!'
  },
  {
    id: 7,
    title: 'Thunderstruck',
    titleAr: 'ضربة الرعد',
    artist: 'AC/DC',
    artistAr: 'إيه سي دي سي',
    genre: 'Rock',
    genreAr: 'روك',
    bpm: 133,
    youtubeId: 'v2AC41dglnM',
    motivation: 'طاقة كهربائية نقية!'
  },
  {
    id: 8,
    title: 'Enter Sandman',
    titleAr: 'دخول رجل الرمال',
    artist: 'Metallica',
    artistAr: 'ميتاليكا',
    genre: 'Metal',
    genreAr: 'ميتال',
    bpm: 123,
    youtubeId: 'CD-E-LDc384',
    motivation: 'ميتال ثقيل للتمارين الثقيلة!'
  },
  {
    id: 9,
    title: 'The Beast',
    titleAr: 'الوحش',
    artist: 'Tech N9ne',
    artistAr: 'تيك ناين',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 155,
    youtubeId: 'aR-KAldshAE',
    motivation: 'أطلق الوحش بداخلك!'
  },
  {
    id: 10,
    title: 'Headstrong',
    titleAr: 'عنيد',
    artist: 'Trapt',
    artistAr: 'ترابت',
    genre: 'Rock',
    genreAr: 'روك',
    bpm: 95,
    youtubeId: 'HTvu1SKPx4w',
    motivation: 'للعناد والإصرار!'
  },
  {
    id: 11,
    title: 'Pump It',
    titleAr: 'انفخها',
    artist: 'Black Eyed Peas',
    artistAr: 'بلاك آيد بيز',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 145,
    youtubeId: 'ZaI2IlHwmgQ',
    motivation: 'طاقة عالية للكارديو!'
  },
  {
    id: 12,
    title: 'In the End',
    titleAr: 'في النهاية',
    artist: 'Linkin Park',
    artistAr: 'لينكين بارك',
    genre: 'Rock',
    genreAr: 'روك',
    bpm: 105,
    youtubeId: 'eVTXPUF4Oz4',
    motivation: 'للتحفيز العاطفي والقوة!'
  },
  {
    id: 13,
    title: 'Power',
    titleAr: 'قوة',
    artist: 'Kanye West',
    artistAr: 'كانييه ويست',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 130,
    youtubeId: 'L53gjP-TtGE',
    motivation: 'شعور بالقوة المطلقة!'
  },
  {
    id: 14,
    title: 'Bodies',
    titleAr: 'أجساد',
    artist: 'Drowning Pool',
    artistAr: 'دراونينج بول',
    genre: 'Metal',
    genreAr: 'ميتال',
    bpm: 125,
    youtubeId: '04F4xlWSFh0',
    motivation: 'طاقة عدوانية للأوزان الثقيلة!'
  },
  {
    id: 15,
    title: 'Run This Town',
    titleAr: 'نحكم هذه المدينة',
    artist: 'Jay-Z ft. Rihanna',
    artistAr: 'جاي زي وريهانا',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 74,
    youtubeId: 'eDuRoPIOBjE',
    motivation: 'للسيطرة والقيادة!'
  },
  {
    id: 16,
    title: "X Gon' Give It to Ya",
    titleAr: 'اكس سيعطيك إياها',
    artist: 'DMX',
    artistAr: 'دي إم إكس',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 122,
    youtubeId: 'fGx6K90TmCI',
    motivation: 'عدوانية خام ونقية!'
  },
  {
    id: 17,
    title: 'Harder, Better, Faster, Stronger',
    titleAr: 'أصعب، أفضل، أسرع، أقوى',
    artist: 'Daft Punk',
    artistAr: 'دافت بانك',
    genre: 'Electronic',
    genreAr: 'إلكتروني',
    bpm: 123,
    youtubeId: 'gAjR4_CbPpQ',
    motivation: 'للتطور المستمر!'
  },
  {
    id: 18,
    title: 'Radioactive',
    titleAr: 'مشع',
    artist: 'Imagine Dragons',
    artistAr: 'إيماجين دراجونز',
    genre: 'Rock',
    genreAr: 'روك',
    bpm: 136,
    youtubeId: 'ktvTqknDobU',
    motivation: 'استيقظ في عصر جديد!'
  },
  {
    id: 19,
    title: 'HUMBLE.',
    titleAr: 'متواضع',
    artist: 'Kendrick Lamar',
    artistAr: 'كندريك لامار',
    genre: 'Hip Hop',
    genreAr: 'هيب هوب',
    bpm: 150,
    youtubeId: 'tvTRZJ-4EyI',
    motivation: 'ثقة مع تواضع!'
  },
  {
    id: 20,
    title: 'Sabotage',
    titleAr: 'تخريب',
    artist: 'Beastie Boys',
    artistAr: 'بيستي بويز',
    genre: 'Rock',
    genreAr: 'روك',
    bpm: 102,
    youtubeId: 'z5rRZdiu1UE',
    motivation: 'طاقة فوضوية!'
  }
];

export function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(workoutPlaylist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [progress, setProgress] = useState([0]);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const playerRef = useRef<any>(null);

  const playNextSong = () => {
    const currentIndex = workoutPlaylist.findIndex(s => s.id === currentSong.id);
    let nextIndex;
    
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * workoutPlaylist.length);
    } else {
      nextIndex = (currentIndex + 1) % workoutPlaylist.length;
    }
    
    setCurrentSong(workoutPlaylist[nextIndex]);
    setProgress([0]);
  };

  const playPreviousSong = () => {
    const currentIndex = workoutPlaylist.findIndex(s => s.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? workoutPlaylist.length - 1 : currentIndex - 1;
    setCurrentSong(workoutPlaylist[prevIndex]);
    setProgress([0]);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress([0]);
  };

  return (
    <div className="w-full py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          🎵 موسيقى التحفيز
        </h2>
        <p className="text-lg text-gray-400">
          أفضل الأغاني اللي تحفزك وتخليك تكسر في التمرين!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Player */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-purple-600 sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music2 className="w-5 h-5 text-purple-500" />
                الآن يشتغل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Album Art / Video */}
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg flex items-center justify-center border border-purple-600/30 overflow-hidden">
                {currentSong.youtubeId ? (
                  <img
                    src={`https://img.youtube.com/vi/${currentSong.youtubeId}/mqdefault.jpg`}
                    alt={currentSong.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Music2 className="w-24 h-24 text-purple-500/30" />
                )}
              </div>

              {/* Song Info */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-purple-400">{currentSong.titleAr}</h3>
                <p className="text-sm text-gray-400">{currentSong.title}</p>
                <p className="text-sm text-gray-500">{currentSong.artistAr}</p>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" className="bg-purple-600/20 border-purple-600">
                    {currentSong.genreAr}
                  </Badge>
                  <Badge variant="outline" className="bg-pink-600/20 border-pink-600">
                    {currentSong.bpm} BPM
                  </Badge>
                </div>
                <p className="text-xs text-purple-300 italic">{currentSong.motivation}</p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <Slider
                  value={progress}
                  onValueChange={setProgress}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{Math.floor(progress[0] / 100 * 180 / 60)}:{String(Math.floor(progress[0] / 100 * 180 % 60)).padStart(2, '0')}</span>
                  <span>3:00</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={isShuffle ? 'text-purple-400' : 'text-gray-400'}
                >
                  <Shuffle className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={playPreviousSong}
                  className="text-gray-400 hover:text-white"
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="w-12 h-12 bg-purple-600 hover:bg-purple-700"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={playNextSong}
                  className="text-gray-400 hover:text-white"
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={isRepeat ? 'text-purple-400' : 'text-gray-400'}
                >
                  <Repeat className="w-4 h-4" />
                </Button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-gray-400" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-gray-500 w-8">{volume[0]}%</span>
              </div>

              {/* YouTube Link */}
              <Button
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${currentSong.youtubeId}`, '_blank')}
              >
                <Music2 className="w-4 h-4 mr-2" />
                شغّل على YouTube
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Playlist */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-purple-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music2 className="w-5 h-5 text-purple-500" />
                قائمة التشغيل الكاملة
              </CardTitle>
              <CardDescription>
                {workoutPlaylist.length} أغنية - كلها نار ونشاط! 🔥
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-2">
                  {workoutPlaylist.map((song, index) => (
                    <button
                      key={song.id}
                      onClick={() => selectSong(song)}
                      className={`w-full p-4 rounded-lg transition-all ${
                        currentSong.id === song.id
                          ? 'bg-purple-600/30 border border-purple-600'
                          : 'bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 hover:border-purple-600/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-purple-400">{index + 1}</span>
                        </div>
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${song.youtubeId}/default.jpg`}
                            alt={song.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-bold text-white">{song.titleAr}</h4>
                          <p className="text-sm text-gray-400">{song.artistAr}</p>
                          <p className="text-xs text-purple-300 italic mt-1">{song.motivation}</p>
                        </div>
                        <div className="flex-shrink-0 flex flex-col items-end gap-1">
                          <Badge variant="outline" className="bg-purple-600/20 border-purple-600 text-xs">
                            {song.bpm} BPM
                          </Badge>
                          <Badge variant="outline" className="bg-pink-600/20 border-pink-600 text-xs">
                            {song.genreAr}
                          </Badge>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mt-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border-purple-600">
            <CardHeader>
              <CardTitle className="text-purple-400">💡 نصائح للموسيقى في الجيم</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">🎵</span>
                  <span><strong>BPM مهم:</strong> أغاني 120-140 BPM مثالية للتمارين الثقيلة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">🎵</span>
                  <span><strong>للكارديو:</strong> استخدم أغاني سريعة 140+ BPM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">🎵</span>
                  <span><strong>للإحماء:</strong> أغاني أبطأ 100-110 BPM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">🎵</span>
                  <span><strong>PR (Personal Record):</strong> شغّل أغنيتك المفضلة لما تحاول ترفع أقصى وزن</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">🎵</span>
                  <span><strong>نوّع:</strong> غيّر قائمة التشغيل كل أسبوعين عشان ما تزهق</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">🎵</span>
                  <span><strong>الصوت:</strong> لا ترفع الصوت كثير - احمِ سمعك!</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
