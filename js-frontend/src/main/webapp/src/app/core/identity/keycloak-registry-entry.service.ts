import * as Keycloak from 'keycloak-js';
import {
  KeycloakError, KeycloakInitOptions, KeycloakInstance, KeycloakLoginOptions, KeycloakProfile
} from 'keycloak-js';

export class KeycloakRegistryEntry
{
  public readonly configJson: string;

  public readonly initOptions: KeycloakInitOptions | any;

  public readonly loginOptions: KeycloakLoginOptions;

  public readonly logoutOptions: { redirectUri: string };

  public readonly signupOptions: KeycloakLoginOptions;

  private keycloakInst: Keycloak.KeycloakInstance;

  public constructor(
    public readonly qualifiedName: string,
    public readonly appBaseUrl: string,
    public readonly keycloakConfigUrl?: string,
    public readonly clientRootUrl?: string)
  {
    this.initOptions = {
      adapter: 'default',
      flow: 'standard',
      responseMode: 'fragment',
      checkLoginIframe: true,
      checkLoginIframeInterval: 5
    };

    const sessionRoot = clientRootUrl ? clientRootUrl : (appBaseUrl + '/' + qualifiedName);

    this.loginOptions = {
      redirectUri: sessionRoot + '/session/auth'
    };

    this.signupOptions = {
      action: 'register',
      redirectUri: sessionRoot + '/session/auth'
    };

    this.logoutOptions = {
      redirectUri: sessionRoot + '/session/logout'
    };

    this.configJson = keycloakConfigUrl ? keycloakConfigUrl : (sessionRoot + '/assets/keycloak.json');
  }

  toInstance(): KeycloakInstance
  {
    if (!this.keycloakInst) {
      this.keycloakInst = Keycloak(this.configJson);
    }

    return this.keycloakInst;
  }

  bootstrap(): void
  {
    this.toInstance()
      .init(this.initOptions);
  }

  login(onReturnKey?: string): void
  {
    this.toInstance()
      .login({
        ...this.loginOptions,
        redirectUri: onReturnKey
          ? this.loginOptions.redirectUri + '/' + onReturnKey
          : this.loginOptions.redirectUri
      });
  }

  logout(onReturnKey?: string): void
  {
    this.toInstance()
      .logout({
        ...this.logoutOptions,
        redirectUri: onReturnKey
          ? this.logoutOptions.redirectUri + '/' + onReturnKey
          : this.logoutOptions.redirectUri
      });
  }

  signup(onReturnKey?: string): void
  {
    this.toInstance()
      .login({
        ...this.signupOptions,
        redirectUri: onReturnKey
          ? this.signupOptions.redirectUri + '/' + onReturnKey
          : this.signupOptions.redirectUri
      });
  }

  refreshToken(minSecLeft = 50): Promise<boolean>
  {
    return new Promise((resolve, reject) => {
      return this.toInstance()
        .updateToken(minSecLeft)
        .success(resolve)
        .error(reject);
    });
  }

  loadUserProfile(): Promise<KeycloakProfile>
  {
    return new Promise((resolve, reject) => {
      this.toInstance()
        .loadUserProfile()
        .success(resolve)
        .error(reject);
    });
  }


  clearSession(): void
  {
    this.toInstance()
      .clearToken();
  }

  //
  // Delegate methods for setting required Keycloak callbacks plugins in order to gain access to its
  // features within an Angular app.
  //

  /**
   * Called when the adapter is initialized.
   */
  set onReady(func: (authenticated?: boolean) => void)
  {
    this.toInstance().onReady = func;
  }

  /**
   * Called when a user is successfully authenticated.
   */
  set onAuthSuccess(func: () => void)
  {
    this.toInstance().onAuthSuccess = func;
  }

  /**
   * Called if there was an error during authentication.
   */
  set onAuthError(func: (errorData: KeycloakError) => void)
  {
    this.toInstance().onAuthError = func;
  }

  /**
   * Called when the token is refreshed.
   */
  set onAuthRefreshSuccess(func: () => void)
  {
    this.toInstance().onAuthRefreshSuccess = func;
  }

  /**
   * Called if there was an error while trying to refresh the token.
   */
  set onAuthRefreshError(func: () => void)
  {
    this.toInstance().onAuthRefreshError = func;
  }

  /**
   * Called if the user is logged out (will only be called if the session
   * status iframe is enabled, or in Cordova mode).
   */
  set onAuthLogout(func: () => void)
  {
    this.toInstance().onAuthLogout = func;
  }

  /**
   * Called when the access token is expired. If a refresh token is available
   * the token can be refreshed with Keycloak#updateToken, or in cases where
   * it's not (ie. with implicit flow) you can redirect to login screen to
   * obtain a new access token.
   */
  set onTokenExpired(func: () => void)
  {
    this.toInstance().onTokenExpired = func;
  }
}
