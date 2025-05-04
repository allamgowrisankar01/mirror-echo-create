
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="w-full max-w-md px-8 py-6 bg-[#181818] rounded-lg shadow-xl">
      <div className="flex flex-col items-center">
        {/* Album cover */}
        <div className="w-64 h-64 mb-6 bg-gray-800 rounded-md overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Album cover" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Song info */}
        <div className="w-full text-center mb-6">
          <h2 className="text-white text-xl font-semibold truncate">Nothing Else Matters</h2>
          <p className="text-gray-400 text-sm">Metallica</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-full mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max={duration || 0} 
            value={currentTime} 
            onChange={handleProgressChange}
            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer progress-bar"
            style={{
              backgroundSize: `${(currentTime / duration) * 100}% 100%`
            }}
          />
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between w-full mb-6">
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <SkipBack size={24} />
          </button>
          <button 
            className="bg-white rounded-full p-2 focus:outline-none hover:bg-opacity-80"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={24} className="text-black" /> : <Play size={24} className="text-black" />}
          </button>
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <SkipForward size={24} />
          </button>
        </div>
        
        {/* Volume control */}
        <div className="flex items-center w-full">
          <Volume2 size={20} className="text-gray-400 mr-2" />
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer volume-bar"
            style={{
              backgroundSize: `${volume * 100}% 100%`
            }}
          />
        </div>
      </div>
      
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        src=""
      />
    </div>
  );
};

export default MusicPlayer;
