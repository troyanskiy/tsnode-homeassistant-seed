import { IHAConfig } from 'tsnode-homeassistant';
import { HA_HOST, HA_PORT, HA_TOKEN } from './config-secret';

export const CONFIG: IHAConfig = {
  // Create a config-secret.ts folder in the same directory
  // and export the following three constants
  host: HA_HOST,
  port: HA_PORT,
  token: HA_TOKEN,
};
