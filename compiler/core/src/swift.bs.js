// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                   = require("bs-platform/lib/js/list.js");
var Block                  = require("bs-platform/lib/js/block.js");
var Pervasives             = require("bs-platform/lib/js/pervasives.js");
var Json_decode            = require("bs-json/src/Json_decode.js");
var LodashCamelcase        = require("lodash.camelcase");
var Color$LonaCompilerCore = require("./color.bs.js");

function layerName(layerName$1) {
  return LodashCamelcase(layerName$1) + "View";
}

var Format = /* module */[/* layerName */layerName];

function join(sep, nodes) {
  if (nodes) {
    return List.fold_left((function (acc, node) {
                  return Pervasives.$at(acc, /* :: */[
                              sep,
                              /* :: */[
                                node,
                                /* [] */0
                              ]
                            ]);
                }), /* [] */0, nodes);
  } else {
    return /* [] */0;
  }
}

function joinGroups(sep, groups) {
  var nonEmpty = List.filter((function (x) {
            return +(List.length(x) > 0);
          }))(groups);
  if (nonEmpty) {
    return List.fold_left((function (acc, nodes) {
                  return Pervasives.$at(acc, Pervasives.$at(/* :: */[
                                  sep,
                                  /* [] */0
                                ], nodes));
                }), nonEmpty[0], nonEmpty[1]);
  } else {
    return /* [] */0;
  }
}

function lonaValue(colors, value) {
  var match = value[/* ltype */0];
  if (match.tag) {
    var alias = match[0];
    if (alias === "Color") {
      var rawValue = Json_decode.string(value[/* data */1]);
      var match$1 = Color$LonaCompilerCore.find(colors, rawValue);
      if (match$1) {
        return /* MemberExpression */Block.__(1, [/* :: */[
                    /* SwiftIdentifier */Block.__(4, ["Colors"]),
                    /* :: */[
                      /* SwiftIdentifier */Block.__(4, [match$1[0][/* id */0]]),
                      /* [] */0
                    ]
                  ]]);
      } else {
        return /* LiteralExpression */Block.__(0, [/* Color */Block.__(4, [rawValue])]);
      }
    } else {
      return /* SwiftIdentifier */Block.__(4, ["UnknownNamedTypeAlias" + alias]);
    }
  } else {
    var typeName = match[0];
    switch (typeName) {
      case "Boolean" : 
          return /* LiteralExpression */Block.__(0, [/* Boolean */Block.__(0, [Json_decode.bool(value[/* data */1])])]);
      case "Number" : 
          return /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [Json_decode.$$float(value[/* data */1])])]);
      case "String" : 
          return /* LiteralExpression */Block.__(0, [/* String */Block.__(3, [Json_decode.string(value[/* data */1])])]);
      default:
        return /* SwiftIdentifier */Block.__(4, ["UnknownReferenceType: " + typeName]);
    }
  }
}

var Document = /* module */[
  /* join */join,
  /* joinGroups */joinGroups,
  /* lonaValue */lonaValue
];

exports.Format   = Format;
exports.Document = Document;
/* lodash.camelcase Not a pure module */
