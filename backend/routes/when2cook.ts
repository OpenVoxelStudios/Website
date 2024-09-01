import Elysia from "elysia";

const PREFIX = "/when2cook"
export default function (app: Elysia) {
    app.get(PREFIX, () => "API backend for when2cook by OpenVoxel Studios... Yeah!");

    app.get(PREFIX + '/a', () => {

    })
}