export interface KeycloakConfigInfo {
  'auth-server-url': string
  'confidential-port': string
  'public-client': string
  realm: string
  resource: string
  'ssl-required': string
}

export default interface EnvInfo {
  keycloakConfig: KeycloakConfigInfo
}
