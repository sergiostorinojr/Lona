// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Set                   = require("bs-platform/lib/js/set.js");
var List                    = require("bs-platform/lib/js/list.js");
var Block                   = require("bs-platform/lib/js/block.js");
var Curry                   = require("bs-platform/lib/js/curry.js");
var Caml_obj                = require("bs-platform/lib/js/caml_obj.js");
var Caml_string             = require("bs-platform/lib/js/caml_string.js");
var LodashCamelcase         = require("lodash.camelcase");
var Tree$LonaCompilerCore   = require("./tree.bs.js");
var Swift$LonaCompilerCore  = require("./swift.bs.js");
var Render$LonaCompilerCore = require("./render.bs.js");

function compare(a, b) {
  return Caml_string.caml_string_compare(Render$LonaCompilerCore.$$String[/* join */0]("", a[1]), Render$LonaCompilerCore.$$String[/* join */0]("", b[1]));
}

var include = $$Set.Make(/* module */[/* compare */compare]);

var empty = include[0];

var add = include[3];

var elements = include[19];

var IdentifierSet_001 = /* is_empty */include[1];

var IdentifierSet_002 = /* mem */include[2];

var IdentifierSet_004 = /* singleton */include[4];

var IdentifierSet_005 = /* remove */include[5];

var IdentifierSet_006 = /* union */include[6];

var IdentifierSet_007 = /* inter */include[7];

var IdentifierSet_008 = /* diff */include[8];

var IdentifierSet_009 = /* compare */include[9];

var IdentifierSet_010 = /* equal */include[10];

var IdentifierSet_011 = /* subset */include[11];

var IdentifierSet_012 = /* iter */include[12];

var IdentifierSet_013 = /* fold */include[13];

var IdentifierSet_014 = /* for_all */include[14];

var IdentifierSet_015 = /* exists */include[15];

var IdentifierSet_016 = /* filter */include[16];

var IdentifierSet_017 = /* partition */include[17];

var IdentifierSet_018 = /* cardinal */include[18];

var IdentifierSet_020 = /* min_elt */include[20];

var IdentifierSet_021 = /* max_elt */include[21];

var IdentifierSet_022 = /* choose */include[22];

var IdentifierSet_023 = /* split */include[23];

var IdentifierSet_024 = /* find */include[24];

var IdentifierSet_025 = /* of_list */include[25];

var IdentifierSet = /* module */[
  /* empty */empty,
  IdentifierSet_001,
  IdentifierSet_002,
  /* add */add,
  IdentifierSet_004,
  IdentifierSet_005,
  IdentifierSet_006,
  IdentifierSet_007,
  IdentifierSet_008,
  IdentifierSet_009,
  IdentifierSet_010,
  IdentifierSet_011,
  IdentifierSet_012,
  IdentifierSet_013,
  IdentifierSet_014,
  IdentifierSet_015,
  IdentifierSet_016,
  IdentifierSet_017,
  IdentifierSet_018,
  /* elements */elements,
  IdentifierSet_020,
  IdentifierSet_021,
  IdentifierSet_022,
  IdentifierSet_023,
  IdentifierSet_024,
  IdentifierSet_025
];

function children(node) {
  if (typeof node === "number") {
    return /* [] */0;
  } else {
    switch (node.tag | 0) {
      case 0 : 
          return /* :: */[
                  node[3],
                  /* [] */0
                ];
      case 1 : 
          return /* :: */[
                  node[1],
                  /* [] */0
                ];
      case 5 : 
          return node[0];
      default:
        return /* [] */0;
    }
  }
}

function restore(node, contents) {
  if (typeof node === "number") {
    return node;
  } else {
    switch (node.tag | 0) {
      case 0 : 
          return /* If */Block.__(0, [
                    node[0],
                    node[1],
                    node[2],
                    List.nth(contents, 0)
                  ]);
      case 1 : 
          return /* IfExists */Block.__(1, [
                    node[0],
                    List.nth(contents, 0)
                  ]);
      case 5 : 
          return /* Block */Block.__(5, [contents]);
      default:
        return node;
    }
  }
}

var LogicTree = Tree$LonaCompilerCore.Make(/* module */[
      /* children */children,
      /* restore */restore
    ]);

function undeclaredIdentifiers(node) {
  var inner = function (node, identifiers) {
    if (typeof node === "number") {
      return identifiers;
    } else if (node.tag === 2) {
      var match = node[1];
      if (typeof match === "number" || match.tag) {
        return identifiers;
      } else {
        return Curry._2(add, /* tuple */[
                    match[0],
                    match[1]
                  ], identifiers);
      }
    } else {
      return identifiers;
    }
  };
  return Curry._3(LogicTree[/* reduce */0], inner, empty, node);
}

function assignedIdentifiers(node) {
  var inner = function (node, identifiers) {
    if (typeof node === "number") {
      return identifiers;
    } else if (node.tag === 2) {
      var match = node[1];
      if (typeof match === "number" || match.tag) {
        return identifiers;
      } else {
        return Curry._2(add, /* tuple */[
                    match[0],
                    match[1]
                  ], identifiers);
      }
    } else {
      return identifiers;
    }
  };
  return Curry._3(LogicTree[/* reduce */0], inner, empty, node);
}

function conditionallyAssignedIdentifiers(rootNode) {
  var identifiers = undeclaredIdentifiers(rootNode);
  var paths = Curry._1(elements, identifiers);
  var isAlwaysAssigned = function (target, _node) {
    while(true) {
      var node = _node;
      if (typeof node === "number") {
        return /* false */0;
      } else {
        switch (node.tag | 0) {
          case 0 : 
              var match = node[2];
              if (typeof match === "number") {
                return /* false */0;
              } else if (match.tag) {
                return /* false */0;
              } else if (Caml_obj.caml_equal(match[1], target)) {
                _node = node[3];
                continue ;
                
              } else {
                return /* false */0;
              }
              break;
          case 2 : 
              var match$1 = node[1];
              if (typeof match$1 === "number" || match$1.tag) {
                return /* false */0;
              } else {
                return Caml_obj.caml_equal(match$1[1], target);
              }
              break;
          case 5 : 
              return List.exists((function (param) {
                            return isAlwaysAssigned(target, param);
                          }), node[0]);
          default:
            return /* false */0;
        }
      }
    };
  };
  var accumulate = function (set, param) {
    var path = param[1];
    var match = isAlwaysAssigned(path, rootNode);
    if (match !== 0) {
      return set;
    } else {
      return Curry._2(add, /* tuple */[
                  param[0],
                  path
                ], set);
    }
  };
  return List.fold_left(accumulate, empty, paths);
}

function addVariableDeclarations(node) {
  var identifiers = undeclaredIdentifiers(node);
  return List.fold_left((function (acc, declaration) {
                return Curry._2(LogicTree[/* insert_child */8], (function (item) {
                              var match = Caml_obj.caml_equal(item, acc);
                              if (match !== 0) {
                                return /* Some */[declaration];
                              } else {
                                return /* None */0;
                              }
                            }), acc);
              }), node, List.map((function (param) {
                    return /* Let */Block.__(4, [/* Identifier */Block.__(0, [
                                  param[0],
                                  param[1]
                                ])]);
                  }), Curry._1(elements, identifiers)));
}

function logicValueToJavaScriptAST(x) {
  if (typeof x === "number") {
    return /* Unknown */0;
  } else if (x.tag) {
    return /* Literal */Block.__(1, [x[0]]);
  } else {
    return /* Identifier */Block.__(2, [x[1]]);
  }
}

function toJavaScriptAST(node) {
  var fromCmp = function (x) {
    switch (x) {
      case 0 : 
          return /* Eq */0;
      case 1 : 
          return /* Neq */1;
      case 2 : 
          return /* Gt */2;
      case 3 : 
          return /* Gte */3;
      case 4 : 
          return /* Lt */4;
      case 5 : 
          return /* Lte */5;
      case 6 : 
          return /* Noop */7;
      
    }
  };
  if (typeof node === "number") {
    return /* Unknown */0;
  } else {
    switch (node.tag | 0) {
      case 0 : 
          var condition_000 = logicValueToJavaScriptAST(node[0]);
          var condition_001 = fromCmp(node[1]);
          var condition_002 = logicValueToJavaScriptAST(node[2]);
          var condition = /* BooleanExpression */Block.__(10, [
              condition_000,
              condition_001,
              condition_002
            ]);
          return /* ConditionalStatement */Block.__(11, [
                    condition,
                    /* :: */[
                      toJavaScriptAST(node[3]),
                      /* [] */0
                    ]
                  ]);
      case 1 : 
          return /* ConditionalStatement */Block.__(11, [
                    logicValueToJavaScriptAST(node[0]),
                    /* :: */[
                      toJavaScriptAST(node[1]),
                      /* [] */0
                    ]
                  ]);
      case 2 : 
          return /* AssignmentExpression */Block.__(9, [
                    logicValueToJavaScriptAST(node[1]),
                    logicValueToJavaScriptAST(node[0])
                  ]);
      case 3 : 
          var addition_000 = logicValueToJavaScriptAST(node[0]);
          var addition_002 = logicValueToJavaScriptAST(node[1]);
          var addition = /* BooleanExpression */Block.__(10, [
              addition_000,
              /* Plus */6,
              addition_002
            ]);
          return /* AssignmentExpression */Block.__(9, [
                    logicValueToJavaScriptAST(node[2]),
                    addition
                  ]);
      case 4 : 
          var value = node[0];
          if (typeof value === "number" || value.tag) {
            return /* Unknown */0;
          } else {
            return /* VariableDeclaration */Block.__(8, [/* Identifier */Block.__(2, [value[1]])]);
          }
          break;
      case 5 : 
          return /* Block */Block.__(15, [List.map(toJavaScriptAST, node[0])]);
      
    }
  }
}

function toSwiftAST(colors, rootLayer, logicRootNode) {
  var logicValueToSwiftAST = function (x) {
    if (typeof x === "number") {
      return /* Empty */0;
    } else if (x.tag) {
      return Swift$LonaCompilerCore.Document[/* lonaValue */2](colors, x[0]);
    } else {
      var node = x;
      if (typeof node === "number") {
        return /* SwiftIdentifier */Block.__(4, ["BadIdentifier"]);
      } else if (node.tag) {
        return /* SwiftIdentifier */Block.__(4, ["BadIdentifier"]);
      } else {
        var match = node[1];
        if (match) {
          var tail = match[1];
          switch (match[0]) {
            case "layers" : 
                if (tail) {
                  var tail$1 = tail[1];
                  var second = tail[0];
                  if (second === rootLayer[/* name */1]) {
                    return /* SwiftIdentifier */Block.__(4, [List.fold_left((function (a, b) {
                                      return a + ("." + LodashCamelcase(b));
                                    }), List.hd(tail$1), List.tl(tail$1))]);
                  } else {
                    return /* SwiftIdentifier */Block.__(4, [List.fold_left((function (a, b) {
                                      return a + ("." + LodashCamelcase(b));
                                    }), Swift$LonaCompilerCore.Format[/* layerName */0](second), tail$1)]);
                  }
                } else {
                  return /* SwiftIdentifier */Block.__(4, ["BadIdentifier"]);
                }
                break;
            case "parameters" : 
                return /* SwiftIdentifier */Block.__(4, [List.hd(tail)]);
            default:
              return /* SwiftIdentifier */Block.__(4, ["BadIdentifier"]);
          }
        } else {
          return /* SwiftIdentifier */Block.__(4, ["BadIdentifier"]);
        }
      }
    }
  };
  var typeAnnotationDoc = function (param) {
    if (param.tag) {
      return /* TypeName */Block.__(0, [param[0]]);
    } else {
      var typeName = param[0];
      if (typeName === "Boolean") {
        return /* TypeName */Block.__(0, ["Bool"]);
      } else {
        return /* TypeName */Block.__(0, [typeName]);
      }
    }
  };
  var fromCmp = function (x) {
    switch (x) {
      case 0 : 
          return "==";
      case 1 : 
          return "!=";
      case 2 : 
          return ">";
      case 3 : 
          return ">=";
      case 4 : 
          return "<";
      case 5 : 
          return "<=";
      case 6 : 
          return "???";
      
    }
  };
  var unwrapBlock = function (node) {
    if (typeof node === "number") {
      return /* :: */[
              node,
              /* [] */0
            ];
    } else if (node.tag === 5) {
      return node[0];
    } else {
      return /* :: */[
              node,
              /* [] */0
            ];
    }
  };
  if (typeof logicRootNode === "number") {
    return /* Empty */0;
  } else {
    switch (logicRootNode.tag | 0) {
      case 0 : 
          return /* IfStatement */Block.__(10, [{
                      condition: /* BinaryExpression */Block.__(2, [{
                            left: logicValueToSwiftAST(logicRootNode[0]),
                            operator: fromCmp(logicRootNode[1]),
                            right: logicValueToSwiftAST(logicRootNode[2])
                          }]),
                      block: List.map((function (param) {
                              return toSwiftAST(colors, rootLayer, param);
                            }), unwrapBlock(logicRootNode[3]))
                    }]);
      case 1 : 
          return /* IfStatement */Block.__(10, [{
                      condition: logicValueToSwiftAST(logicRootNode[0]),
                      block: List.map((function (param) {
                              return toSwiftAST(colors, rootLayer, param);
                            }), unwrapBlock(logicRootNode[1]))
                    }]);
      case 2 : 
          var match = logicValueToSwiftAST(logicRootNode[1]);
          var match$1 = logicValueToSwiftAST(logicRootNode[0]);
          var match$2;
          if (typeof match === "number") {
            match$2 = [
              match,
              match$1
            ];
          } else if (match.tag === 4) {
            if (typeof match$1 === "number") {
              match$2 = [
                match,
                match$1
              ];
            } else if (match$1.tag) {
              match$2 = [
                match,
                match$1
              ];
            } else {
              var match$3 = match$1[0];
              if (typeof match$3 === "number") {
                match$2 = [
                  match,
                  match$1
                ];
              } else if (match$3.tag) {
                match$2 = [
                  match,
                  match$1
                ];
              } else {
                var name = match[0];
                match$2 = name.endsWith("visible") ? /* tuple */[
                    /* SwiftIdentifier */Block.__(4, [name.replace("visible", "isHidden")]),
                    /* LiteralExpression */Block.__(0, [/* Boolean */Block.__(0, [1 - match$3[0]])])
                  ] : [
                    match,
                    match$1
                  ];
              }
            }
          } else {
            match$2 = [
              match,
              match$1
            ];
          }
          return /* BinaryExpression */Block.__(2, [{
                      left: match$2[0],
                      operator: "=",
                      right: match$2[1]
                    }]);
      case 3 : 
          return /* BinaryExpression */Block.__(2, [{
                      left: logicValueToSwiftAST(logicRootNode[2]),
                      operator: "=",
                      right: /* BinaryExpression */Block.__(2, [{
                            left: logicValueToSwiftAST(logicRootNode[0]),
                            operator: "+",
                            right: logicValueToSwiftAST(logicRootNode[1])
                          }])
                    }]);
      case 4 : 
          var value = logicRootNode[0];
          if (typeof value === "number") {
            return /* Empty */0;
          } else if (value.tag) {
            return /* Empty */0;
          } else {
            var path = value[1];
            return /* VariableDeclaration */Block.__(6, [{
                        modifiers: /* [] */0,
                        pattern: /* IdentifierPattern */Block.__(0, [{
                              identifier: List.fold_left((function (a, b) {
                                      return a + ("." + b);
                                    }), List.hd(path), List.tl(path)),
                              annotation: /* Some */[typeAnnotationDoc(value[0])]
                            }]),
                        init: /* None */0,
                        block: /* None */0
                      }]);
          }
          break;
      case 5 : 
          return /* StatementListHelper */Block.__(17, [List.map((function (param) {
                            return toSwiftAST(colors, rootLayer, param);
                          }), logicRootNode[0])]);
      
    }
  }
}

exports.IdentifierSet                    = IdentifierSet;
exports.LogicTree                        = LogicTree;
exports.undeclaredIdentifiers            = undeclaredIdentifiers;
exports.assignedIdentifiers              = assignedIdentifiers;
exports.conditionallyAssignedIdentifiers = conditionallyAssignedIdentifiers;
exports.addVariableDeclarations          = addVariableDeclarations;
exports.logicValueToJavaScriptAST        = logicValueToJavaScriptAST;
exports.toJavaScriptAST                  = toJavaScriptAST;
exports.toSwiftAST                       = toSwiftAST;
/* include Not a pure module */
