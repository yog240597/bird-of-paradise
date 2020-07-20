/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION,USER_ID } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };

export function defaultId() {
  return {
    type: USER_ID,
  };
}
