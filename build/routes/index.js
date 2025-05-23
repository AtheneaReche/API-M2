"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexController_1 = require("../../app/controllers/indexController");
var publishers_1 = require("../../app/routes/publishers");
var authors_1 = require("../../app/routes/authors");
var books_1 = require("../../app/routes/books");
var auth_1 = require("../../app/routes/auth");
var favorites_1 = require("../../app/routes/favorites");
var books_collections_1 = require("../../app/routes/books-collections");
var reading_1 = require("../../app/routes/reading");
var router = (0, express_1.Router)();
router.get('/', indexController_1.index);
router.use('/publishers', publishers_1.default);
router.use('/authors', authors_1.default);
router.use('/books', books_1.default);
router.use('/auth', auth_1.default);
router.use('/favorites', favorites_1.default);
router.use('/collections', books_collections_1.default);
router.use('/reading', reading_1.default);
exports.default = router;
