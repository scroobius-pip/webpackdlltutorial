/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular/index.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/angular/index.js from dll-reference vendor_lib ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/angular/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/angular/index.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap/dist/js/bootstrap.js from dll-reference vendor_lib ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/bootstrap/dist/js/bootstrap.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/bootstrap/dist/js/bootstrap.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/d3/index.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/d3/index.js from dll-reference vendor_lib ***!
  \**************************************************************************/
/*! exports provided: version, bisect, bisectRight, bisectLeft, bisectCenter, ascending, bisector, count, cross, cumsum, descending, deviation, extent, fsum, Adder, group, groups, index, indexes, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, pairs, permute, quantile, quantileSorted, quickselect, range, least, leastIndex, greatest, greatestIndex, scan, shuffle, shuffler, sum, ticks, tickIncrement, tickStep, transpose, variance, zip, axisTop, axisRight, axisBottom, axisLeft, brush, brushX, brushY, brushSelection, chord, chordTranspose, chordDirected, ribbon, ribbonArrow, color, rgb, hsl, lab, hcl, lch, gray, cubehelix, contours, contourDensity, Delaunay, Voronoi, dispatch, drag, dragDisable, dragEnable, dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue, autoType, easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut, blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg, forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound, geoArea, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform, cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify, interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize, path, polygonArea, polygonCentroid, polygonHull, polygonContains, polygonLength, quadtree, randomUniform, randomInt, randomNormal, randomLogNormal, randomBates, randomIrwinHall, randomExponential, randomPareto, randomBernoulli, randomGeometric, randomBinomial, randomGamma, randomBeta, randomWeibull, randomCauchy, randomLogistic, randomPoisson, randomLcg, scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleRadial, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat, schemeCategory10, schemeAccent, schemeDark2, schemePaired, schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3, schemeTableau10, interpolateBrBG, schemeBrBG, interpolatePRGn, schemePRGn, interpolatePiYG, schemePiYG, interpolatePuOr, schemePuOr, interpolateRdBu, schemeRdBu, interpolateRdGy, schemeRdGy, interpolateRdYlBu, schemeRdYlBu, interpolateRdYlGn, schemeRdYlGn, interpolateSpectral, schemeSpectral, interpolateBuGn, schemeBuGn, interpolateBuPu, schemeBuPu, interpolateGnBu, schemeGnBu, interpolateOrRd, schemeOrRd, interpolatePuBuGn, schemePuBuGn, interpolatePuBu, schemePuBu, interpolatePuRd, schemePuRd, interpolateRdPu, schemeRdPu, interpolateYlGnBu, schemeYlGnBu, interpolateYlGn, schemeYlGn, interpolateYlOrBr, schemeYlOrBr, interpolateYlOrRd, schemeYlOrRd, interpolateBlues, schemeBlues, interpolateGreens, schemeGreens, interpolateGreys, schemeGreys, interpolatePurples, schemePurples, interpolateReds, schemeReds, interpolateOranges, schemeOranges, interpolateCividis, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateSinebow, interpolateTurbo, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, create, creator, local, matcher, namespace, namespaces, pointer, pointers, select, selectAll, selection, selector, selectorAll, style, window, arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse, timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears, timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse, now, timer, timerFlush, timeout, interval, transition, active, interrupt, zoom, zoomTransform, zoomIdentity */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/d3/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/d3/index.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/highcharts/highcharts.js from dll-reference vendor_lib ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/highcharts/highcharts.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/highcharts/highcharts.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_lib ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/jquery/dist/jquery.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/jquery/dist/jquery.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/lodash/lodash.js from dll-reference vendor_lib ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/lodash/lodash.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/lodash/lodash.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendor_lib ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/react/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react/index.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/vue/dist/vue.runtime.esm.js from dll-reference vendor_lib ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_lib */ \"dll-reference vendor_lib\"))(\"./node_modules/vue/dist/vue.runtime.esm.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/vue/dist/vue.runtime.esm.js_from_dll-reference_vendor_lib?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createApp; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ \"./node_modules/highcharts/highcharts.js\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createApp() {\r\n  // vendor()\r\n  const el = document.createElement(\"div\")\r\n\r\n  el.setAttribute(\"id\", \"app\")\r\n\r\n  document.body.appendChild(el)\r\n  console.log(\"hello\")\r\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    el: \"#app\",\r\n    render: h => h(\"h1\", \"Hello world\")\r\n  })\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  createApp()\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "dll-reference vendor_lib":
/*!*****************************!*\
  !*** external "vendor_lib" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_lib;\n\n//# sourceURL=webpack:///external_%22vendor_lib%22?");

/***/ })

/******/ });