export interface StrapiAuthenticationData {
  identifier: string;
  password: string;
}

export interface StrapiRegistrationData {
  username: string;
  email: string;
  password: string;
}

export interface StrapiAuthenticationResponse {
  user: Record<string, unknown>;
  jwt: string;
}
