import { EventsController } from "@xpresser/events-server/js/src/Types";
import fs from "fs";
import sharp from "sharp";
import { $ } from "../../xpresser";

/**
 * ImageEventsController
 */

export = <EventsController>{
    /**
     * Example Action
     * @param ctx
     * @param filePath
     */
    async compress(ctx: any, filePath: string) {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // Take Action
        ctx.$.logInfo("Compressing Image...");

        // Path to compressed version
        const compressed = $.path.storage("compressed/large-img.jpg");

        // Compress Image by reducing quality
        // Note: Await does not stop the execution of other incoming events.
        await sharp(filePath).jpeg({ quality: 20 }).toFile(compressed);

        ctx.$.logInfo("Image Compressed!");
    }
};
