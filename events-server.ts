import { EventsServer } from "@xpresser/events-server";
import { $ } from "./xpresser";

// Initialize new event server
const eventsServer = new EventsServer("SECRET_KEY", $);

/**
 * This is a sample event handler that uses a callback as handler.
 */
eventsServer.on("hi", ({ $, runEvent }, ...args) => {
    $.logSuccess(`Event "hi" was fired with arguments: ${args.join(", ")}`);
    // in others there is a function called runEvent that you can use to run other events
    runEvent("bye");
});

eventsServer.on("bye", ({ $ }) => {
    $.logSuccess(`Event "bye" was fired.`);
});

/**
 * This is a sample event handler that uses an events-server controller as handler.
 * You can create controllers with the commands below
 *
 * @example
 * ts-node events-server.ts cli make:controller <name>
 * // or
 * node events-server.js cli make:controller <name>
 */
eventsServer.on("compress", "ImageEvents@compress");

eventsServer.startListening();
