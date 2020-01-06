export enum Button {
  LivingRound = '00:15:8d:00:02:69:23:02',
  LivingWall = '00:15:8d:00:01:3e:23:03',
  KitchenWall = '00:15:8d:00:01:3f:23:04',
  SofyaWall = '00:15:8d:00:01:3e:23:01'
}

export enum Light {
  LivingTV1 = 'light.salon_tv_1',
  LivingTV2 = 'light.salon_tv_2',
  LivingTV3 = 'light.salon_tv_3'
}

export enum Switch {
  LivingTable = 'switch.swiid_cbcc_domotique_sas_swiidinter_switch',
  LivingFloor = 'switch.smart_plug_1'
}

export enum ButtonLeftEvent {
  NormalPress = 1000,
  Hold = 1001,
  NormalRelease = 1002,
  LongRelease = 1003,
  DoublePress = 1004,
  TriplePress = 1005,
  QuadPress = 1006,
  ManyPress = 1010,
}

export enum ButtonRightEvent {
  NormalPress = 2000,
  Hold = 2001,
  NormalRelease = 2002,
  LongRelease = 2003,
  DoublePress = 2004,
  TriplePress = 2005,
  QuadPress = 2006,
  ManyPress = 2010,
}

export enum ButtonBothEvent {
  NormalPress = 3000,
  Hold = 3001,
  NormalRelease = 3002,
  LongRelease = 3003,
  DoublePress = 3004,
  TriplePress = 3005,
  QuadPress = 3006,
  ManyPress = 3010,
}

export interface IButtonEventData {
  id: string;
  unique_id: string;
  event: number
}
