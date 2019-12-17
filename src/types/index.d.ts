export interface Version {
  name: string;
  version: string;
}

export interface GlobalState {
  loggedIn: boolean;
  services: Array<Version>;
}
