import { Button, ButtonLeftEvent, IButtonEventData, Light, Switch } from '../data';
import { HomeAssistant, HADomain } from 'tsnode-homeassistant';

export class LivingRoom {

  constructor(private ha: HomeAssistant) {

  }


  handleButtonEvent(data: IButtonEventData) {

    switch (data.unique_id) {
      case Button.LivingRound:
        this.handleRoundButtonEvent(data);
        break;

      case Button.LivingWall:
        this.handleWallButtonEvent(data);
        break;
    }

  }

  private handleRoundButtonEvent(data: IButtonEventData) {

    switch (data.event) {
      case ButtonLeftEvent.NormalRelease:
        this.toggleTableLight();
        break;

      case ButtonLeftEvent.DoublePress:
        this.toggleTVLight();
        break;

      case ButtonLeftEvent.TriplePress:
        this.toggleFloorLamp();
        break;

      case ButtonLeftEvent.QuadPress:
        this.toggleTableLight(false);
        this.toggleTVLight(false);
        this.toggleFloorLamp(true);
        break;

      case ButtonLeftEvent.Hold:
        this.toggleTableLight(false);
        this.toggleTVLight(false);
        this.toggleFloorLamp(false);
        break;
    }

  }

  private handleWallButtonEvent(data: IButtonEventData) {

  }

  private toggleTableLight(force?: boolean) {
    this.ha.service.toggle(
      HADomain.Switch,
      Switch.LivingTable,
      force
    );
  }

  private toggleTVLight(force?: boolean) {
    this.ha.service.toggle(
      HADomain.Light,
      [
        Light.LivingTV1,
        Light.LivingTV2,
        Light.LivingTV3,
      ],
      force
    );
  }

  private toggleFloorLamp(force?: boolean) {
    this.ha.service.toggle(
      HADomain.Switch,
      Switch.LivingFloor,
      force
    );
  }


}
