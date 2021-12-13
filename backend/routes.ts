import { getInstanceRouter } from "xpresser";
/**
 * See https://xpresserjs.com/router/
 */
const Route = getInstanceRouter();

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get("/", "App@index").name("index");
Route.get("/compress", "App@compress").name("compress");
