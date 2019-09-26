"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("./commands"));
function dispatch(command) {
    const handler = commands_1.default[command] || commands_1.default['noop'];
}
exports.default = dispatch;
