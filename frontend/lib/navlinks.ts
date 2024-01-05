import {
  Category,
  DiscountShape,
  Folder2,
  Heart,
  Home2,
  Icon,
  MusicPlaylist,
  MusicSquare,
  Profile2User,
  SearchNormal,
  Setting,
  User,
} from "iconsax-react";

export interface Navlink {
  icon: Icon;
  name: string;

  link: string;
}

export const navlinks: Navlink[] = [
  {
    icon: Home2,
    name: "Home",
    link: "/",
  },
  {
    icon: Category,
    name: "Generes",
    link: "/generes",
  },
  {
    icon: User,
    name: "Artists",
    link: "/artists",
  },
  {
    icon: MusicPlaylist,
    name: "Albums",
    link: "/albums",
  },
  {
    icon: Heart,
    name: "Favourites",
    link: "/favourites",
  },

  {
    icon: MusicSquare,
    name: "Recent Plays",
    link: "/recent-plays",
  },
];
