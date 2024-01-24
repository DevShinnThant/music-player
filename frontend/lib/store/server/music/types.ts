export interface SelectMusicOptions {
  value: string;
  label: string;
  url: string;
}

export interface SelectMusic {
  id: number;
  index: number;
  name: string;
  artist: string;
  image: string;
  song: string;
  duration: number;
  listeners: number;
}
