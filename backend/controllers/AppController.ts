import { Controller } from "xpresser/types/http";
import { $ } from "../../xpresser";

const AppController = <Controller.Object>{
    /**
     * Controller name.
     * @type {string}
     */
    name: "AppController",

    /**
     * Index Method for "/"
     * @returns {string}
     */
    index() {
        // Say Hi and check the event's server console logs
        // With arg support
        $.eServer.emit("hi", "arg1", "arg2", "arg3...");

        return "<h1>Refresh this page to say hi to the events server.</h1>";
    },

    compress() {
        const image = $.path.storage("large-img.jpg");

        $.eServer.emit("compress", image);

        return "<h1>Refresh this page to compress the image in storage.</h1>";
    }
};

export = AppController;
