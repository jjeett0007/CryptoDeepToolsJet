/*! bigSlide - v0.12.0 - 2016-08-01
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2016 Adam D. Scott; Licensed MIT */
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
