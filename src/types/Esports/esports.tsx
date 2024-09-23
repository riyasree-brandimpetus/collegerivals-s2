// interfaces/Data.ts

// Interface for the images array
interface Images {
  monthly_qualifiers_img: string[];
  monthly_finals_img: string[];
}

// Interface for Online data
interface Online extends Images {
  monthly_qualifiers: string;
  monthly_finals: string;
  each_monthly_finals: string;
}

// Interface for Offline data
interface Offline extends Images {
  colleges: string;
  monthly_qualifiers: string;
  college_playoffs: string;
  total_player: string;
  college_finals_player: string;
}

// Main interface for the game data
export interface GameData {
  Online: Online;
  offline: Offline;
}

// Interface for the entire JSON structure, in case there are multiple games
export interface Data {
  [key: string]: GameData;
}
