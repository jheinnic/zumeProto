import {KeycloakInstance} from 'keycloak-js';
import {InjectionToken} from '@angular/core';

/**
 * A non-public interface implemented by services in this package that are granted authority to handle
 * the KeycloakInstance adapter object.  The motivation is to provide a code path for components that
 * need to handle the access token in order to perform their function without leaking any access methods
 * to the public API that would expose the token.
 *
 * The only implementor of this API at present is the KeycloakHttpInterceptor, which needs the access
 * token in order to inject it into the Authorization header of any requests to the backend API that
 * pass through it.
 */
export interface KeycloakInternalHelper {
  injectKeycloakAdapter( adapter: KeycloakInstance ): void;
}

export const KEYCLOAK_INTERNAL_HELPERS =
  new InjectionToken<KeycloakInternalHelper>('KEYCLOAK_INTERNAL_HELPERS');

