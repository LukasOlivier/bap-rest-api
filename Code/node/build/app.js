"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import express, cors, helmet and morgan
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
// Create Express server
var app = (0, express_1.default)(); // New express instance
var port = 3000; // Port number
// Express configuration
app.use((0, cors_1.default)()); // Enable CORS
app.use((0, helmet_1.default)()); // Enable Helmet
app.use((0, morgan_1.default)('dev')); // Enable Morgan
app.use(express_1.default.json()); // Enable JSON body parsing
// Use routes
app.use('/', routes_1.default);
// Start Express server
app.listen(port, function () {
    // Callback function when server is successfully started
    console.log("Server started at http://localhost:".concat(port));
});
// Export Express app
exports.default = app;