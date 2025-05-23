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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var db_1 = require("../../database/db");
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, email, role, connection, hashedPassword, result, userId, collectionResult, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, password = _a.password, email = _a.email, role = _a.role;
                return [4 /*yield*/, db_1.default.getConnection()];
            case 1:
                connection = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 8, 10, 11]);
                return [4 /*yield*/, connection.beginTransaction()];
            case 3:
                _b.sent();
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
            case 4:
                hashedPassword = _b.sent();
                return [4 /*yield*/, connection.execute('INSERT INTO users (name, password, email, role) VALUES (?, ?, ?, ?)', [name, hashedPassword, email, role || 'user'])];
            case 5:
                result = (_b.sent())[0];
                userId = result.insertId;
                return [4 /*yield*/, connection.execute('INSERT INTO books_collections (user, name) VALUES (?, ?)', [userId, 'Favourites'])];
            case 6:
                collectionResult = (_b.sent())[0];
                return [4 /*yield*/, connection.commit()];
            case 7:
                _b.sent();
                res.status(201).json({ message: 'User registered' });
                return [3 /*break*/, 11];
            case 8:
                err_1 = _b.sent();
                return [4 /*yield*/, connection.rollback()];
            case 9:
                _b.sent();
                console.error(err_1);
                res.status(500).json({ message: 'Error registering user' });
                return [3 /*break*/, 11];
            case 10:
                connection.release();
                return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, rows, user, isValid, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, db_1.default.execute('SELECT * FROM users WHERE name = ?', [name])];
            case 2:
                rows = (_b.sent())[0];
                user = rows[0];
                if (!user)
                    return [2 /*return*/, res.status(400).json({ message: 'Invalid credentials' })];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 3:
                isValid = _b.sent();
                if (!isValid)
                    return [2 /*return*/, res.status(400).json({ message: 'Invalid credentials' })];
                token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
                res.json({ token: token });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                console.error(err_2);
                res.status(500).json({ message: 'Login error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
