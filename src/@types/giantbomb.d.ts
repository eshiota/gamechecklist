declare namespace GiantBomb {
  interface Response<T> {
    error: string;
    limit: number;
    number_of_page_results: number;
    number_of_total_results: number;
    offset: number;
    results: T;
    status_code: number;
    version: string;
  }

  interface Image {
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
  }

  interface ImageTag {
    api_detail_url: string;
    name: string;
    total: number;
  }

  interface Company {
    api_detail_url: string;
    id: number;
    name: string;
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
    image: Image | null;
    image_tags: Array<ImageTag> | null;
    name: string;
    number_of_user_reviews: number;
    original_game_rating: number | null;
    original_release_date: string | null;
    platforms: Array<
      Pick<Platform, "api_detail_url" | "id" | "name" | "site_detail_url">
    >;
    site_detail_url: string;
  }

  interface Platform {
    abbreviation:
      | "3DO"
      | "ACRN"
      | "AMAX"
      | "BNA"
      | "AVIS"
      | "ALXA"
      | "FIRE"
      | "LUNA"
      | "AMI"
      | "CD32"
      | "CPC"
      | "PCW"
      | "ANDR"
      | "MP1K"
      | "APL2"
      | "A2GS"
      | "APTV"
      | "AQUA"
      | "ARC"
      | "A2K1"
      | "2600"
      | "5200"
      | "7800"
      | "A800"
      | "LYNX"
      | "AST"
      | "AVCS"
      | "BAST"
      | "PDIA"
      | "RX78"
      | "BBCM"
      | "BROW"
      | "LOOP"
      | "PV1K"
      | "PV2K"
      | "CDI"
      | "CHNF"
      | "CVIS"
      | "C128"
      | "C16"
      | "C64"
      | "CDTV"
      | "CBM"
      | "DM"
      | "DGBL"
      | "DRAG"
      | "DC"
      | "DSI"
      | "ESAG"
      | "CASV"
      | "EPOC"
      | "EVER"
      | "FDS"
      | "FMT"
      | "FM7"
      | "TF1"
      | "TVB"
      | "GMT"
      | "GB"
      | "GBA"
      | "GBC"
      | "GG"
      | "HGM"
      | "GWAV"
      | "GCOM"
      | "GCN"
      | "GP32"
      | "GEN"
      | "GIZ"
      | "STAD"
      | "HS1"
      | "HSCN"
      | "INTV"
      | "AMIC"
      | "VC4K"
      | "IPAD"
      | "IPHN"
      | "IPOD"
      | "JAG"
      | "JCD"
      | "DIDJ"
      | "LPAD"
      | "LEAP"
      | "LEXP"
      | "LIN"
      | "ABC"
      | "MAC"
      | "ML1"
      | "DUCK"
      | "VIS"
      | "MBEE"
      | "MVIS"
      | "MSX"
      | "NGE"
      | "6001"
      | "PC88"
      | "PC98"
      | "NEO"
      | "NGCD"
      | "NGP"
      | "NGPC"
      | "N3DS"
      | "3DS"
      | "3DSE"
      | "N64"
      | "64DD"
      | "DS"
      | "NES"
      | "NSW"
      | "NUON"
      | "OQST"
      | "ODYS"
      | "ODY2"
      | "ORIC"
      | "OUYA"
      | "PC"
      | "PCFX"
      | "PIN"
      | "LACT"
      | "PIPN"
      | "PLTO"
      | "PLDT"
      | "PS1"
      | "PS2"
      | "PS3"
      | "PS4"
      | "PS5"
      | "PS3N"
      | "PSPN"
      | "PSNV"
      | "PSP"
      | "VITA"
      | "PMIN"
      | "RZON"
      | "RCA2"
      | "HALC"
      | "COUP"
      | "BS-X"
      | "SAT"
      | "32X"
      | "SCD"
      | "SMS"
      | "PICO"
      | "SG1K"
      | "MZ"
      | "X1"
      | "X68K"
      | "SMAK"
      | "SMC7"
      | "M5"
      | "STRM"
      | "ACAN"
      | "SCV"
      | "SNES"
      | "SGFX"
      | "TI99"
      | "GK1"
      | "GK3"
      | "TUT"
      | "TRS8"
      | "COCO"
      | "TG16"
      | "TGCD"
      | "VSML"
      | "VECT"
      | "VC20"
      | "VMIV"
      | "VBOY"
      | "VSOC"
      | "SVIS"
      | "Wii"
      | "WSHP"
      | "WiiU"
      | "WP"
      | "WSW"
      | "WSC"
      | "XAVX"
      | "XBOX"
      | "X360"
      | "XBGS"
      | "XONE"
      | "XSX"
      | "ZBO"
      | "ZOD"
      | "SPEC";
    api_detail_url: string;
    company: Company;
    date_added: string;
    date_last_updated: string;
    deck: string | null;
    description: string | null;
    guid: string;
    id: number;
    image: Image | null;
    image_tags: Array<ImageTag> | null;
    install_base: number | null;
    name: string;
    online_support: boolean;
    original_price: string;
    release_date: string;
    site_detail_url: string;
  }

  type GetGamesResponse = Response<Array<Game>>;
  type GetPlatformsResponse = Response<Array<Platform>>;
}
