import {ApolloLink} from 'apollo-link';
import {KeycloakInternalHelper} from './keycloak-internal-helper.interface';
import * as Keycloak from 'keycloak-js';

export class KeycloakApolloLink extends ApolloLink implements KeycloakInternalHelper {
  private keycloak: Keycloak.KeycloakInstance;

  constructor()
  {
    super((operation, forward) => {
      if (!!this.getToken()) {
        operation.setContext({
          headers: {
            Authorization: 'bearer ' + this.getToken()
          }
        });
      } else {
        operation.setContext({
          headers: {
            Authorization: 'Basic bmVvNGo6cG9ydGZvbGlv'
          }
        });
      }

      return forward(operation)
    });
  }

  public injectKeycloakAdapter(keycloak: Keycloak.KeycloakInstance): void
  {
    this.keycloak = keycloak;
  }

  private getToken() {
    return this.keycloak ? this.keycloak.token : undefined;
  }
}
