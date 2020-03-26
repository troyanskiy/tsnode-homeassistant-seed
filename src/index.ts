import { tap } from 'rxjs/operators';
import { HomeAssistant } from 'tsnode-homeassistant';
import { CONFIG } from './config';

const ha = new HomeAssistant(CONFIG);

ha.connectionStatus$.pipe(tap(console.log)).subscribe();
