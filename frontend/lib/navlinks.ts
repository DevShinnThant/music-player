import {
  DiscountShape,
  Folder2,
  Heart,
  Home2,
  Icon,
  MusicSquare,
  Profile2User,
  SearchNormal,
  Setting,
} from "iconsax-react";

export interface Navlink {
  title: string;
  slug: "menu" | "general";
  links: {
    icon: Icon;
    name: string;
    linkIndex: number;
    link: string;
  }[];
}

export const navlinks: Navlink[] = [
  {
    title: "MENU",
    slug: "menu",
    links: [
      {
        icon: Home2,
        name: "Home",
        linkIndex: 0.96,
        link: "/",
      },
      {
        icon: SearchNormal,
        name: "Search",
        linkIndex: 1.96,
        link: "/search",
      },
      {
        icon: Heart,
        name: "Likes",
        linkIndex: 2.96,
        link: "/likes",
      },
      {
        icon: MusicSquare,
        name: "Playlists",
        linkIndex: 3.96,
        link: "/playlists",
      },
      {
        icon: Folder2,
        name: "Albums",
        linkIndex: 5,
        link: "/albums",
      },
      {
        icon: Profile2User,
        name: "Following",
        linkIndex: 6,
        link: "/following",
      },
    ],
  },
  {
    title: "GENERAL",
    slug: "general",
    links: [
      {
        icon: Setting,
        name: "Settings",
        linkIndex: 8.62,
        link: "/settings",
      },
      {
        icon: DiscountShape,
        name: "Subscription",
        linkIndex: 9.62,
        link: "/subscription",
      },
    ],
  },
];
