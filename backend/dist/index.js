"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = require("./middleware");
const router_1 = __importDefault(require("./routes/router"));
const connection_1 = __importDefault(require("./db/connection"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const host = (_a = process.env.HOST) !== null && _a !== void 0 ? _a : 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.send({ message: 'Hello API' });
});
app.use('/api/v1/', router_1.default); //get's the route declared above
app.use(middleware_1.notFound);
app.use(middleware_1.errorHandlerMiddleware);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.default)(process.env.MONGO_URI);
        console.log('[ ready ] backend connected');
        app.listen(port, host);
    }
    catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}))();
