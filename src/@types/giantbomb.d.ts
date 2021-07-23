interface GetGamesResponse {
  error: string;
  limit: number;
  number_of_page_results: number;
  number_of_total_results: number;
  offset: number;
  results: Array<Game>;
  status_code: number;
  version: string;
}

interface Game {
  aliases: string | null;
  api_detail_url: string;
  date_added: string;
  date_last_updated: string;
  deck: string | null;
  description: string | null;
  expected_release_day: number | null;
  expected_release_month: number | null;
  expected_release_quarter: number | null;
  expected_release_year: number | null;
  guid: string;
  id: number;
  image: {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: string;
  } | null;
  image_tags: Array<{
    api_detail_url: string;
    name: string;
    total: number;
  }> | null;
  name: string;
  number_of_user_reviews: number;
  original_game_rating: number | null;
  original_release_date: string | null;
  platforms: Array<{
    api_detail_url: string;
    id: number;
    name: string;
    site_detail_url: string;
    abbreviation:
      | "ANDR"
      | "GBA"
      | "TGCD"
      | "PC98"
      | "PC"
      | "PS4"
      | "NSW"
      | "PS5"
      | "PS1"
      | "PS3N"
      | "PSPN"
      | "PSNV"
      | "MAC"
      | "X360"
      | "PS3"
      | "XONE"
      | "IPHN"
      | "LIN"
      | "ARC"
      | "BROW"
      | "DS"
      | "LPAD"
      | "GBC"
      | "VITA"
      | "FMT"
      | "SAT"
      | "IPAD"
      | "PS2"
      | "AMI"
      | "DC"
      | "GP32"
      | "PIN"
      | "AMAX"
      | "PSP"
      | "NES"
      | "SMS"
      | "SNES"
      | "CPC"
      | "BBCM"
      | "AST"
      | "XBGS"
      | "WSHP"
      | "DSI";
  }>;
  site_detail_url: string;
}
