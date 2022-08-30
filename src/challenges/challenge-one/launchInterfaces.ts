export interface Launch {
  name: string;
  id: string;
  status: Status;
  url: string;
  image: string;
  window_end: string;
  window_start: string;
  slug: string;
  failreason: null | string;
  hashtag: null | string;
  holdreason: null | string;
  infographic: null | string;
  last_updated: string;
  launch_service_provider: LaunchServiceProvider;
  mission: LaunchMission;
  net: string;
  pad: LaunchPad;
  probability: null | number;
  program: [];
  rocket: Rocket;
  webcast_live: boolean;
}

export interface Status {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface LaunchServiceProvider {
  id: number;
  name: string;
  type: string;
  url: string;
}
export interface LaunchMission {
  description: string;
  id: number;
  launch_designator: null | string;
  name: string;
  orbit: Orbit;
  type: string;
}

export interface Orbit {
  abbrev: string;
  id: number;
  name: string;
}

export interface LaunchPad {
  agency_id: null | number;
  id: number;
  info_url: null | string;
  latitude: string;
  location: LaunchLocation;
  longitude: string;
  map_image: string;
  map_url: string;
  name: string;
  total_launch_count: number;
  url: string;
  wiki_url: string;
}

export interface LaunchLocation {
  country_code: string;
  id: number;
  map_image: string;
  name: string;
  total_landing_count: number;
  total_launch_count: number;
  url: string;
}

export interface Rocket {
  id: number;
  configuration: RocketConfiguration;
}

export interface RocketConfiguration {
  family: string;
  full_name: string;
  id: number;
  name: string;
  url: string;
  variant: string;
}
