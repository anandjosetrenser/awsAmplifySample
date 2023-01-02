/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Keycloak, { KeycloakInstance } from 'keycloak-js'

import EnvInfo, { KeycloakConfigInfo } from './interface'

// import EnvInfo, { KeyclKeycloakInstanceoakConfigInfo, } from "./interface";

class InitializeApp {
  public kc: KeycloakInstance | undefined

  public isSecure: boolean = false

  public keyCloakUrl: string = ''

  public initApp(): Promise<any> {
    return new Promise<any>((resolve) => {
      fetch('/tcab/env.json')
        .then((data) => data.json())
        .then((envConfig: EnvInfo) => {
          if (
            envConfig.keycloakConfig !== null &&
            Object.keys(envConfig.keycloakConfig).length !== 0
          ) {
            this.checkAuthenticated(envConfig.keycloakConfig)
              .then(() => {
                resolve('')
              })
              .catch(() => {
                resolve('')
              })
          } else {
            resolve('')
          }
        })
        .catch(() => {
          resolve('')
        })
    })
  }

  public checkAuthenticated(keycloakConfig: KeycloakConfigInfo): Promise<any> {
    return new Promise<any>((resolve) => {
      this.keyCloakUrl = keycloakConfig['auth-server-url']
      this.kc = new Keycloak({
        url: `${keycloakConfig['auth-server-url']}`,
        realm: keycloakConfig.realm,
        clientId: keycloakConfig.resource,
      })
      this.kc
        .init({
          onLoad: 'login-required',
          silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
        })
        .then((authenticated) => {
          if (authenticated) {
            this.kc!.loadUserProfile()
              .then(() => {
                this.isSecure = true
                resolve('')
              })
              .catch(() => {})
          } else {
            this.doLogout()
          }
        })
        .catch(() => {
          this.doLogout()
        })
    })
  }

  public getToken() {
    return new Promise<string>((resolve, reject) => {
      if (this.kc === undefined) {
        reject()
      } else if (this.kc.token === undefined) {
        this.doLogout()
      }
      if (this.kc!.isTokenExpired(5)) {
        if (this.kc!.token) {
          this.kc!.updateToken(5)
            .then(() => {
              resolve(<string>this.kc!.token)
            })
            .catch(() => {
              reject()
            })
        } else {
          reject()
        }
      } else {
        resolve(<string>this.kc!.token)
      }
    })
  }

  doLogout = () => {
    this.kc!.logout()
      .then(() => {})
      .catch(() => {})
  }
}

const envInfo = new InitializeApp()
export default envInfo
