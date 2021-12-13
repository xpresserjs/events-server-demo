# Xpresser Events Server Demo

## Installation

- Clone this repository to your local machine.
- Install all dependencies using `yarn` or `npm`.
- Run `npm run ts-dev` to run the Xpresser server.
- Run `npm run ts-events-server` to start the Events Server.

## Calling Events

- The index page `/` of the server will send a `hi` event called in `AppController@index` and defined
  in `events-server.ts` file.
- The `/compress` page will send a `compress` event called in `AppController@compress` and defined
  in `ImageEventsController@compress` file.

## Control Panel

The control panel a simple web interface to see all failed events and retry them.

Url: [http://localhost:3000/__es__](http://localhost:3000/__es__)

Running `xjs routes` will show all the routes registered in the application. You will notice routes with `__es__`
prefix... These are the events server routes.

The control panel can be turned off by setting `eventsServer.controlPanel.enabled = false` in `config/xpresser.ts` file.
Turning off the control panel will also unregister the routes from your application.