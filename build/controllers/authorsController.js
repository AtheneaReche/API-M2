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
exports.updateAuthors = exports.deleteAuthors = exports.createAuthors = exports.getAuthorsById = exports.getAuthors = void 0;
var db_1 = require("../../database/db");
//Get Method (all of them)
var getAuthors = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rows, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.execute('SELECT * FROM authors')];
            case 1:
                rows = (_a.sent())[0];
                res.json(rows);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send('Error fetching authors ' + err_1);
                return [3 /*break*/, 3];
            case 3:
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); };
exports.getAuthors = getAuthors;
//Get Method by Id
var getAuthorsById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, author, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.default.execute('SELECT * FROM authors WHERE id = ?', [id])];
            case 1:
                author = _a.sent();
                res.json(author);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).send('Error fetching authors ' + err_2);
                return [3 /*break*/, 3];
            case 3:
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); };
exports.getAuthorsById = getAuthorsById;
//Create Method
var createAuthors = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, authorPicture, biography, birthdate, deceaseDate, result, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, authorPicture = _a.authorPicture, biography = _a.biography, birthdate = _a.birthdate, deceaseDate = _a.deceaseDate;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.default.execute("\n            INSERT INTO authors (\n                name, \n                author_picture, \n                biography, \n                birthdate, \n                decease_date \n                ) \n            VALUES (?,?,?,?,?)", [
                        name,
                        authorPicture || null,
                        biography || null,
                        birthdate || null,
                        deceaseDate || null
                    ])];
            case 2:
                result = (_b.sent())[0];
                console.log('Added author', result);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                console.error('Error executing query: ' + err_3);
                return [3 /*break*/, 4];
            case 4:
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); };
exports.createAuthors = createAuthors;
//Delete Method by id
var deleteAuthors = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.default.execute('DELETE FROM authors WHERE id = ?', [id])];
            case 2:
                result = (_a.sent())[0];
                console.log('Deleted author', result);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error('Error executing query: ' + err_4);
                return [3 /*break*/, 4];
            case 4:
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteAuthors = deleteAuthors;
//Put Method by id
var updateAuthors = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, authorPicture, biography, birthdate, deceaseDate, result, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, name = _a.name, authorPicture = _a.authorPicture, biography = _a.biography, birthdate = _a.birthdate, deceaseDate = _a.deceaseDate;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.default.execute("\n            UPDATE authors SET \n                name = ?, \n                author_picture = ?, \n                biography = ?, \n                birthdate = ?, \n                decease_date = ?, \n            WHERE id = ?", [
                        name,
                        authorPicture,
                        biography,
                        birthdate,
                        deceaseDate,
                        id
                    ])];
            case 2:
                result = (_b.sent())[0];
                console.log('Updated author', result);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _b.sent();
                console.error('Error executing query: ' + err_5);
                return [3 /*break*/, 4];
            case 4:
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); };
exports.updateAuthors = updateAuthors;
