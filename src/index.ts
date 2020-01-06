import { HomeAssistant, IHAEvent } from 'tsnode-homeassistant';
import { map } from 'rxjs/operators';
import { IButtonEventData } from './data';
import { LivingRoom } from './room/living.room';
import { CONFIG } from './config';

const ha = new HomeAssistant(CONFIG);

const livingRoom = new LivingRoom(ha);

ha
  .events
  .select('deconz_event')
  .pipe(
    map(($event: IHAEvent<IButtonEventData>) => $event.data)
  )
  .subscribe(data => {

    livingRoom.handleButtonEvent(data);

  });

ha.states.onChange.subscribe(state => console.log(state));
