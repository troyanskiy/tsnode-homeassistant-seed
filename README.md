# tsnode-homeassistant seed project

## Setup

1. Clone `git clone https://github.com/troyanskiy/tsnode-homeassistant-seed.git`

2. Go to the project `cd tsnode-homeassistant-seed`

3. Install npm libs `npm i`

4. Create `src/config-secret.ts` and define host, port and the long-lived access token (HA -> Your User -> Long-Lived Access Tokens -> Create)

```
export const HA_HOST = 'homeassistant.local';
export const HA_PORT = 8123;
export const HA_TOKEN = 'token';
```

## Run

`npm start`

## Run in docker

`docker build -t my-node-ha`

`docker run -d my-node-ha`

## Run as addon in Home Assistant

This tutorial assumes that you use standard Home Assistant + Supervisor.

Easiest method is to have SMB addon installed and shares configured to just drag and drop the folder over to your HA installation.

1. Copy this repo over to your HA instance inside folder `/addons`
2. In HA, open Supervisor > Add-On Store
3. Click `Refresh` (in the toolbar on the right)
4. `HA RXJS` should appear under `Local Add-ons`
5. Install `HA RXJS`
6. Run it

Anytime you change something in your logic you have to update the version property in `config.json`, so Home Assistant is able to pickup changes.

More info about installing add-ons can be found [here](https://developers.home-assistant.io/docs/hassio_addon_tutorial/).
