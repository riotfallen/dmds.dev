const path = require("path");

module.exports = {
    name: "Dimas's Personal Page",
    short_name: "Short Name",
    description: "App Description",
    background_color: "black",
    theme_color: "white",
    start_url: '/index.html',
    crossorigin: "anonymous",
    icon: [
        {
            src: path.resolve("./src/assets/images/icons/icon.png"),
            sizes: [96, 128, 192, 256, 384, 512]
        }
    ]
}