const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Webpack configuration for generating bundle.js in static folder of stemcity 'room'
//Also this should transpile the room editor to corresponding directory of room templates directory

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "{%static 'room/bundle_room_editor.js' %}",
                path: path.resolve(__dirname, "../../static/room"),
                filename: "bundle_room_editor.js"
            },
            module:{
                //Loaders added for css,js and jsx to be parsed.
                rules:[
                    {
                        loader: 'babel-loader',
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.mjs$/,
                        include: /node_modules/,
                        type: 'javascript/auto',
                    },
                ]
            },
            plugins: [
                //Html plugin is given a template jinja file to replicate bundle(into corresponding )
                new HtmlWebpackPlugin({
                    template: "../../base/templates/base.html",
                    filename: '../../room/templates/hotspot_room.html'
                }),
            ]
        }
};