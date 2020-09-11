// Do not edit this file; automatically generated by gulp.

/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define(['./blockly_compressed.js'], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory(require('./blockly_compressed.js'));
  } else { // Browser
    root.Blockly.LDL = factory(root.Blockly);
  }
}(this, function(Blockly) {
  /*

 Copyright 2012 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';Blockly.LDL=new Blockly.Generator("LDL");Blockly.LDL.addReservedWords("break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments,"+Object.getOwnPropertyNames(Blockly.utils.global).join(","));Blockly.LDL.ORDER_ATOMIC=0;Blockly.LDL.ORDER_NEW=1.1;
Blockly.LDL.ORDER_MEMBER=1.2;Blockly.LDL.ORDER_FUNCTION_CALL=2;Blockly.LDL.ORDER_INCREMENT=3;Blockly.LDL.ORDER_DECREMENT=3;Blockly.LDL.ORDER_BITWISE_NOT=4.1;Blockly.LDL.ORDER_UNARY_PLUS=4.2;Blockly.LDL.ORDER_UNARY_NEGATION=4.3;Blockly.LDL.ORDER_LOGICAL_NOT=4.4;Blockly.LDL.ORDER_TYPEOF=4.5;Blockly.LDL.ORDER_VOID=4.6;Blockly.LDL.ORDER_DELETE=4.7;Blockly.LDL.ORDER_AWAIT=4.8;Blockly.LDL.ORDER_EXPONENTIATION=5;Blockly.LDL.ORDER_MULTIPLICATION=5.1;Blockly.LDL.ORDER_DIVISION=5.2;
Blockly.LDL.ORDER_MODULUS=5.3;Blockly.LDL.ORDER_SUBTRACTION=6.1;Blockly.LDL.ORDER_ADDITION=6.2;Blockly.LDL.ORDER_BITWISE_SHIFT=7;Blockly.LDL.ORDER_RELATIONAL=8;Blockly.LDL.ORDER_IN=8;Blockly.LDL.ORDER_INSTANCEOF=8;Blockly.LDL.ORDER_EQUALITY=9;Blockly.LDL.ORDER_BITWISE_AND=10;Blockly.LDL.ORDER_BITWISE_XOR=11;Blockly.LDL.ORDER_BITWISE_OR=12;Blockly.LDL.ORDER_LOGICAL_AND=13;Blockly.LDL.ORDER_LOGICAL_OR=14;Blockly.LDL.ORDER_CONDITIONAL=15;Blockly.LDL.ORDER_ASSIGNMENT=16;Blockly.LDL.ORDER_YIELD=17;
Blockly.LDL.ORDER_COMMA=18;Blockly.LDL.ORDER_NONE=99;
Blockly.LDL.ORDER_OVERRIDES=[[Blockly.LDL.ORDER_FUNCTION_CALL,Blockly.LDL.ORDER_MEMBER],[Blockly.LDL.ORDER_FUNCTION_CALL,Blockly.LDL.ORDER_FUNCTION_CALL],[Blockly.LDL.ORDER_MEMBER,Blockly.LDL.ORDER_MEMBER],[Blockly.LDL.ORDER_MEMBER,Blockly.LDL.ORDER_FUNCTION_CALL],[Blockly.LDL.ORDER_LOGICAL_NOT,Blockly.LDL.ORDER_LOGICAL_NOT],[Blockly.LDL.ORDER_MULTIPLICATION,Blockly.LDL.ORDER_MULTIPLICATION],[Blockly.LDL.ORDER_ADDITION,Blockly.LDL.ORDER_ADDITION],[Blockly.LDL.ORDER_LOGICAL_AND,Blockly.LDL.ORDER_LOGICAL_AND],
[Blockly.LDL.ORDER_LOGICAL_OR,Blockly.LDL.ORDER_LOGICAL_OR]];
Blockly.LDL.init=function(a){Blockly.LDL.definitions_=Object.create(null);Blockly.LDL.functionNames_=Object.create(null);Blockly.LDL.variableDB_?Blockly.LDL.variableDB_.reset():Blockly.LDL.variableDB_=new Blockly.Names(Blockly.LDL.RESERVED_WORDS_);Blockly.LDL.variableDB_.setVariableMap(a.getVariableMap());for(var b=[],c=Blockly.Variables.allDeveloperVariables(a),d=0;d<c.length;d++)b.push(Blockly.LDL.variableDB_.getName(c[d],Blockly.Names.DEVELOPER_VARIABLE_TYPE));a=Blockly.Variables.allUsedVarModels(a);
for(d=0;d<a.length;d++)b.push(Blockly.LDL.variableDB_.getName(a[d].getId(),Blockly.VARIABLE_CATEGORY_NAME));b.length&&(Blockly.LDL.definitions_.variables="var "+b.join(", ")+";")};Blockly.LDL.finish=function(a){var b=[],c;for(c in Blockly.LDL.definitions_)b.push(Blockly.LDL.definitions_[c]);delete Blockly.LDL.definitions_;delete Blockly.LDL.functionNames_;Blockly.LDL.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.LDL.scrubNakedValue=function(a){return a+";\n"};
Blockly.LDL.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};Blockly.LDL.multiline_quote_=function(a){return a.split(/\n/g).map(Blockly.LDL.quote_).join(" + '\\n' +\n")};
Blockly.LDL.scrub_=function(a,b,c){var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(e=Blockly.utils.string.wrap(e,Blockly.LDL.COMMENT_WRAP-3),d+=Blockly.LDL.prefixLines(e+"\n","// "));for(var f=0;f<a.inputList.length;f++)a.inputList[f].type==Blockly.INPUT_VALUE&&(e=a.inputList[f].connection.targetBlock())&&(e=Blockly.LDL.allNestedComments(e))&&(d+=Blockly.LDL.prefixLines(e,"// "))}a=a.nextConnection&&a.nextConnection.targetBlock();c=c?"":Blockly.LDL.blockToCode(a);
return d+b+c};
Blockly.LDL.getAdjusted=function(a,b,c,d,e){c=c||0;e=e||Blockly.LDL.ORDER_NONE;a.workspace.options.oneBasedIndex&&c--;var f=a.workspace.options.oneBasedIndex?"1":"0";a=0<c?Blockly.LDL.valueToCode(a,b,Blockly.LDL.ORDER_ADDITION)||f:0>c?Blockly.LDL.valueToCode(a,b,Blockly.LDL.ORDER_SUBTRACTION)||f:d?Blockly.LDL.valueToCode(a,b,Blockly.LDL.ORDER_UNARY_NEGATION)||f:Blockly.LDL.valueToCode(a,b,e)||f;if(Blockly.isNumber(a))a=Number(a)+c,d&&(a=-a);else{if(0<c){a=a+" + "+c;var g=Blockly.LDL.ORDER_ADDITION}else 0>c&&
(a=a+" - "+-c,g=Blockly.LDL.ORDER_SUBTRACTION);d&&(a=c?"-("+a+")":"-"+a,g=Blockly.LDL.ORDER_UNARY_NEGATION);g=Math.floor(g);e=Math.floor(e);g&&e>=g&&(a="("+a+")")}return a};Blockly.LDL.colour={};Blockly.LDL.colour_picker=function(a){return[Blockly.LDL.quote_(a.getFieldValue("COLOUR")),Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.colour_random=function(a){return[Blockly.LDL.provideFunction_("colourRandom",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.colour_rgb=function(a){var b=Blockly.LDL.valueToCode(a,"RED",Blockly.LDL.ORDER_COMMA)||0,c=Blockly.LDL.valueToCode(a,"GREEN",Blockly.LDL.ORDER_COMMA)||0;a=Blockly.LDL.valueToCode(a,"BLUE",Blockly.LDL.ORDER_COMMA)||0;return[Blockly.LDL.provideFunction_("colourRgb",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;","  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;",
"  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.colour_blend=function(a){var b=Blockly.LDL.valueToCode(a,"COLOUR1",Blockly.LDL.ORDER_COMMA)||"'#000000'",c=Blockly.LDL.valueToCode(a,"COLOUR2",Blockly.LDL.ORDER_COMMA)||"'#000000'";a=Blockly.LDL.valueToCode(a,"RATIO",Blockly.LDL.ORDER_COMMA)||.5;return[Blockly.LDL.provideFunction_("colourBlend",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);","  var g1 = parseInt(c1.substring(3, 5), 16);",
"  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);","  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);","  return '#' + r + g + b;",
"}"])+"("+b+", "+c+", "+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};Blockly.LDL.instructions={};Blockly.LDL.instructions.decToHex=function(a,b){a=a.toString(16);a="0".repeat(b-a.length)+a;return a.toUpperCase()};Blockly.LDL.instructions.encodeInstructionOpcode=function(a,b){a=Blockly.LDL.instructions.decToHex(a,2);return Blockly.LDL.instructions.decToHex(b,2)+a+"0000"};Blockly.LDL.ins_0_clear=function(a){a=Number(a.getFieldValue("duration"));return'"instruction" : "'+Blockly.LDL.instructions.encodeInstructionOpcode(a,0)+'"\n'};
Blockly.LDL.ins_1_solid=function(a){var b=Number(a.getFieldValue("duration"));b=Blockly.LDL.instructions.encodeInstructionOpcode(b,1);a=a.getFieldValue("colour").replace("#","").toUpperCase();return'"instruction" : "'+b+a+'"\n'};
Blockly.LDL.ins_2_pattern=function(a){var b=Number(a.getFieldValue("duration"));b=Blockly.LDL.instructions.encodeInstructionOpcode(b,2);var c=Blockly.LDL.statementToCode(a,"pattern");c=null!==c?c.trim():null;if(null===c||0>=c.length||0!==c.length%8)return"";for(var d=c.length/8,e=a="",f=0;f<d;f++){var g=8*f;a+=c.substring(g,g+2);e+=c.substring(g+2,g+8)}c=Blockly.LDL.instructions.decToHex(d,2);return'"instruction" : "'+b+c+a+e+'"\n'};
Blockly.LDL.fixedpixelscolour=function(a){var b=Number(a.getFieldValue("pixels"));b=Blockly.LDL.instructions.decToHex(b,2);a=a.getFieldValue("colour").replace("#","").toUpperCase();a=b+a;alert("'"+a+"'");return a};Blockly.LDL.lists={};Blockly.LDL.lists_create_empty=function(a){return["[]",Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.LDL.valueToCode(a,"ADD"+c,Blockly.LDL.ORDER_COMMA)||"null";return["["+b.join(", ")+"]",Blockly.LDL.ORDER_ATOMIC]};
Blockly.LDL.lists_repeat=function(a){var b=Blockly.LDL.provideFunction_("listsRepeat",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=Blockly.LDL.valueToCode(a,"ITEM",Blockly.LDL.ORDER_COMMA)||"null";a=Blockly.LDL.valueToCode(a,"NUM",Blockly.LDL.ORDER_COMMA)||"0";return[b+"("+c+", "+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.lists_length=function(a){return[(Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_MEMBER)||"[]")+".length",Blockly.LDL.ORDER_MEMBER]};Blockly.LDL.lists_isEmpty=function(a){return["!"+(Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_MEMBER)||"[]")+".length",Blockly.LDL.ORDER_LOGICAL_NOT]};
Blockly.LDL.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.LDL.valueToCode(a,"FIND",Blockly.LDL.ORDER_NONE)||"''";b=(Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_MEMBER)||"[]")+"."+b+"("+c+")";return a.workspace.options.oneBasedIndex?[b+" + 1",Blockly.LDL.ORDER_ADDITION]:[b,Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.LDL.valueToCode(a,"VALUE","RANDOM"==c?Blockly.LDL.ORDER_COMMA:Blockly.LDL.ORDER_MEMBER)||"[]";switch(c){case "FIRST":if("GET"==b)return[d+"[0]",Blockly.LDL.ORDER_MEMBER];if("GET_REMOVE"==b)return[d+".shift()",Blockly.LDL.ORDER_MEMBER];if("REMOVE"==b)return d+".shift();\n";break;case "LAST":if("GET"==b)return[d+".slice(-1)[0]",Blockly.LDL.ORDER_MEMBER];if("GET_REMOVE"==b)return[d+
".pop()",Blockly.LDL.ORDER_MEMBER];if("REMOVE"==b)return d+".pop();\n";break;case "FROM_START":a=Blockly.LDL.getAdjusted(a,"AT");if("GET"==b)return[d+"["+a+"]",Blockly.LDL.ORDER_MEMBER];if("GET_REMOVE"==b)return[d+".splice("+a+", 1)[0]",Blockly.LDL.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+".splice("+a+", 1);\n";break;case "FROM_END":a=Blockly.LDL.getAdjusted(a,"AT",1,!0);if("GET"==b)return[d+".slice("+a+")[0]",Blockly.LDL.ORDER_FUNCTION_CALL];if("GET_REMOVE"==b)return[d+".splice("+a+", 1)[0]",
Blockly.LDL.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+".splice("+a+", 1);";break;case "RANDOM":d=Blockly.LDL.provideFunction_("listsGetRandomItem",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);","  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"])+"("+d+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,Blockly.LDL.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"}throw Error("Unhandled combination (lists_getIndex).");
};
Blockly.LDL.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Blockly.LDL.variableDB_.getDistinctName("tmpList",Blockly.VARIABLE_CATEGORY_NAME),b="var "+a+" = "+c+";\n";c=a;return b}var c=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_MEMBER)||"[]",d=a.getFieldValue("MODE")||"GET",e=a.getFieldValue("WHERE")||"FROM_START",f=Blockly.LDL.valueToCode(a,"TO",Blockly.LDL.ORDER_ASSIGNMENT)||"null";switch(e){case "FIRST":if("SET"==d)return c+"[0] = "+f+";\n";if("INSERT"==d)return c+".unshift("+
f+");\n";break;case "LAST":if("SET"==d)return a=b(),a+(c+"["+c+".length - 1] = "+f+";\n");if("INSERT"==d)return c+".push("+f+");\n";break;case "FROM_START":e=Blockly.LDL.getAdjusted(a,"AT");if("SET"==d)return c+"["+e+"] = "+f+";\n";if("INSERT"==d)return c+".splice("+e+", 0, "+f+");\n";break;case "FROM_END":e=Blockly.LDL.getAdjusted(a,"AT",1,!1,Blockly.LDL.ORDER_SUBTRACTION);a=b();if("SET"==d)return a+(c+"["+c+".length - "+e+"] = "+f+";\n");if("INSERT"==d)return a+(c+".splice("+c+".length - "+e+", 0, "+
f+");\n");break;case "RANDOM":a=b();e=Blockly.LDL.variableDB_.getDistinctName("tmpX",Blockly.VARIABLE_CATEGORY_NAME);a+="var "+e+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return a+(c+"["+e+"] = "+f+";\n");if("INSERT"==d)return a+(c+".splice("+e+", 0, "+f+");\n")}throw Error("Unhandled combination (lists_setIndex).");};Blockly.LDL.lists.getIndex_=function(a,b,c){return"FIRST"==b?"0":"FROM_END"==b?a+".length - 1 - "+c:"LAST"==b?a+".length - 1":c};
Blockly.LDL.lists_getSublist=function(a){var b=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"==c&&"LAST"==d)b+=".slice(0)";else if(b.match(/^\w+$/)||"FROM_END"!=c&&"FROM_START"==d){switch(c){case "FROM_START":var e=Blockly.LDL.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.LDL.getAdjusted(a,"AT1",1,!1,Blockly.LDL.ORDER_SUBTRACTION);e=b+".length - "+e;break;case "FIRST":e="0";break;default:throw Error("Unhandled option (lists_getSublist).");
}switch(d){case "FROM_START":a=Blockly.LDL.getAdjusted(a,"AT2",1);break;case "FROM_END":a=Blockly.LDL.getAdjusted(a,"AT2",0,!1,Blockly.LDL.ORDER_SUBTRACTION);a=b+".length - "+a;break;case "LAST":a=b+".length";break;default:throw Error("Unhandled option (lists_getSublist).");}b=b+".slice("+e+", "+a+")"}else{e=Blockly.LDL.getAdjusted(a,"AT1");a=Blockly.LDL.getAdjusted(a,"AT2");var f=Blockly.LDL.lists.getIndex_,g={FIRST:"First",LAST:"Last",FROM_START:"FromStart",FROM_END:"FromEnd"};b=Blockly.LDL.provideFunction_("subsequence"+
g[c]+g[d],["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(sequence"+("FROM_END"==c||"FROM_START"==c?", at1":"")+("FROM_END"==d||"FROM_START"==d?", at2":"")+") {","  var start = "+f("sequence",c,"at1")+";","  var end = "+f("sequence",d,"at2")+" + 1;","  return sequence.slice(start, end);","}"])+"("+b+("FROM_END"==c||"FROM_START"==c?", "+e:"")+("FROM_END"==d||"FROM_START"==d?", "+a:"")+")"}return[b,Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.lists_sort=function(a){var b=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_FUNCTION_CALL)||"[]",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");var d=Blockly.LDL.provideFunction_("listsGetSortCompare",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(type, direction) {","  var compareFuncs = {",'    "NUMERIC": function(a, b) {',"        return Number(a) - Number(b); },",'    "TEXT": function(a, b) {',"        return a.toString() > b.toString() ? 1 : -1; },",
'    "IGNORE_CASE": function(a, b) {',"        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },","  };","  var compare = compareFuncs[type];","  return function(a, b) { return compare(a, b) * direction; }","}"]);return[b+".slice().sort("+d+'("'+a+'", '+c+"))",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.lists_split=function(a){var b=Blockly.LDL.valueToCode(a,"INPUT",Blockly.LDL.ORDER_MEMBER),c=Blockly.LDL.valueToCode(a,"DELIM",Blockly.LDL.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw Error("Unknown mode: "+a);return[b+"."+a+"("+c+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.lists_reverse=function(a){return[(Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_FUNCTION_CALL)||"[]")+".slice().reverse()",Blockly.LDL.ORDER_FUNCTION_CALL]};Blockly.LDL.logic={};
Blockly.LDL.controls_if=function(a){var b=0,c="";Blockly.LDL.STATEMENT_PREFIX&&(c+=Blockly.LDL.injectId(Blockly.LDL.STATEMENT_PREFIX,a));do{var d=Blockly.LDL.valueToCode(a,"IF"+b,Blockly.LDL.ORDER_NONE)||"false";var e=Blockly.LDL.statementToCode(a,"DO"+b);Blockly.LDL.STATEMENT_SUFFIX&&(e=Blockly.LDL.prefixLines(Blockly.LDL.injectId(Blockly.LDL.STATEMENT_SUFFIX,a),Blockly.LDL.INDENT)+e);c+=(0<b?" else ":"")+"if ("+d+") {\n"+e+"}";++b}while(a.getInput("IF"+b));if(a.getInput("ELSE")||Blockly.LDL.STATEMENT_SUFFIX)e=
Blockly.LDL.statementToCode(a,"ELSE"),Blockly.LDL.STATEMENT_SUFFIX&&(e=Blockly.LDL.prefixLines(Blockly.LDL.injectId(Blockly.LDL.STATEMENT_SUFFIX,a),Blockly.LDL.INDENT)+e),c+=" else {\n"+e+"}";return c+"\n"};Blockly.LDL.controls_ifelse=Blockly.LDL.controls_if;
Blockly.LDL.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.LDL.ORDER_EQUALITY:Blockly.LDL.ORDER_RELATIONAL,d=Blockly.LDL.valueToCode(a,"A",c)||"0";a=Blockly.LDL.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.LDL.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.LDL.ORDER_LOGICAL_AND:Blockly.LDL.ORDER_LOGICAL_OR,d=Blockly.LDL.valueToCode(a,"A",c);a=Blockly.LDL.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.LDL.logic_negate=function(a){var b=Blockly.LDL.ORDER_LOGICAL_NOT;return["!"+(Blockly.LDL.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.LDL.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.logic_null=function(a){return["null",Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.logic_ternary=function(a){var b=Blockly.LDL.valueToCode(a,"IF",Blockly.LDL.ORDER_CONDITIONAL)||"false",c=Blockly.LDL.valueToCode(a,"THEN",Blockly.LDL.ORDER_CONDITIONAL)||"null";a=Blockly.LDL.valueToCode(a,"ELSE",Blockly.LDL.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.LDL.ORDER_CONDITIONAL]};Blockly.LDL.loops={};Blockly.LDL.controls_repeat_ext=function(a){a.getField("TIMES")?a.getFieldValue("TIMES"):Blockly.LDL.valueToCode(a,"TIMES",Blockly.LDL.ORDER_ASSIGNMENT);var b=Blockly.LDL.statementToCode(a,"DO");b=Blockly.LDL.addLoopTrap(b,a);return'"repeat": {\n\t"times" : 0,\n\t"instructions": {\n'+b+"\t}\n}\n"};Blockly.LDL.controls_repeat=Blockly.LDL.controls_repeat_ext;
Blockly.LDL.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.LDL.valueToCode(a,"BOOL",b?Blockly.LDL.ORDER_LOGICAL_NOT:Blockly.LDL.ORDER_NONE)||"false",d=Blockly.LDL.statementToCode(a,"DO");d=Blockly.LDL.addLoopTrap(d,a);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.LDL.controls_for=function(a){alert("for loop");var b=Blockly.LDL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME),c=Blockly.LDL.valueToCode(a,"FROM",Blockly.LDL.ORDER_ASSIGNMENT)||"0",d=Blockly.LDL.valueToCode(a,"TO",Blockly.LDL.ORDER_ASSIGNMENT)||"0",e=Blockly.LDL.valueToCode(a,"BY",Blockly.LDL.ORDER_ASSIGNMENT)||"1",f=Blockly.LDL.statementToCode(a,"DO");f=Blockly.LDL.addLoopTrap(f,a);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=Number(c)<=
Number(d);a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(Number(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.LDL.variableDB_.getDistinctName(b+"_start",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.LDL.variableDB_.getDistinctName(b+"_end",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+c+" = "+d+";\n"),d=Blockly.LDL.variableDB_.getDistinctName(b+
"_inc",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a=a+("if ("+g+" > "+c+") {\n")+(Blockly.LDL.INDENT+d+" = -"+d+";\n"),a+="}\n",a+="for ("+b+" = "+g+"; "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+"; "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.LDL.controls_forEach=function(a){var b=Blockly.LDL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME),c=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_ASSIGNMENT)||"[]",d=Blockly.LDL.statementToCode(a,"DO");d=Blockly.LDL.addLoopTrap(d,a);a="";var e=c;c.match(/^\w+$/)||(e=Blockly.LDL.variableDB_.getDistinctName(b+"_list",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+e+" = "+c+";\n");c=Blockly.LDL.variableDB_.getDistinctName(b+"_index",Blockly.VARIABLE_CATEGORY_NAME);
d=Blockly.LDL.INDENT+b+" = "+e+"["+c+"];\n"+d;return a+("for (var "+c+" in "+e+") {\n"+d+"}\n")};
Blockly.LDL.controls_flow_statements=function(a){var b="";Blockly.LDL.STATEMENT_PREFIX&&(b+=Blockly.LDL.injectId(Blockly.LDL.STATEMENT_PREFIX,a));Blockly.LDL.STATEMENT_SUFFIX&&(b+=Blockly.LDL.injectId(Blockly.LDL.STATEMENT_SUFFIX,a));if(Blockly.LDL.STATEMENT_PREFIX){var c=Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(a);c&&!c.suppressPrefixSuffix&&(b+=Blockly.LDL.injectId(Blockly.LDL.STATEMENT_PREFIX,c))}switch(a.getFieldValue("FLOW")){case "BREAK":return b+"break;\n";case "CONTINUE":return b+
"continue;\n"}throw Error("Unknown flow statement.");};Blockly.LDL.math={};Blockly.LDL.math_number=function(a){a=Number(a.getFieldValue("NUM"));return[a,0<=a?Blockly.LDL.ORDER_ATOMIC:Blockly.LDL.ORDER_UNARY_NEGATION]};
Blockly.LDL.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.LDL.ORDER_ADDITION],MINUS:[" - ",Blockly.LDL.ORDER_SUBTRACTION],MULTIPLY:[" * ",Blockly.LDL.ORDER_MULTIPLICATION],DIVIDE:[" / ",Blockly.LDL.ORDER_DIVISION],POWER:[null,Blockly.LDL.ORDER_COMMA]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.LDL.valueToCode(a,"A",b)||"0";a=Blockly.LDL.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"==b)return a=Blockly.LDL.valueToCode(a,"NUM",Blockly.LDL.ORDER_UNARY_NEGATION)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.LDL.ORDER_UNARY_NEGATION];a="SIN"==b||"COS"==b||"TAN"==b?Blockly.LDL.valueToCode(a,"NUM",Blockly.LDL.ORDER_DIVISION)||"0":Blockly.LDL.valueToCode(a,"NUM",Blockly.LDL.ORDER_NONE)||"0";switch(b){case "ABS":var c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;
case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,Blockly.LDL.ORDER_FUNCTION_CALL];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";
break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw Error("Unknown math operator: "+b);}return[c,Blockly.LDL.ORDER_DIVISION]};
Blockly.LDL.math_constant=function(a){return{PI:["Math.PI",Blockly.LDL.ORDER_MEMBER],E:["Math.E",Blockly.LDL.ORDER_MEMBER],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",Blockly.LDL.ORDER_DIVISION],SQRT2:["Math.SQRT2",Blockly.LDL.ORDER_MEMBER],SQRT1_2:["Math.SQRT1_2",Blockly.LDL.ORDER_MEMBER],INFINITY:["Infinity",Blockly.LDL.ORDER_ATOMIC]}[a.getFieldValue("CONSTANT")]};
Blockly.LDL.math_number_property=function(a){var b=Blockly.LDL.valueToCode(a,"NUMBER_TO_CHECK",Blockly.LDL.ORDER_MODULUS)||"0",c=a.getFieldValue("PROPERTY");if("PRIME"==c)return[Blockly.LDL.provideFunction_("mathIsPrime",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.",
"  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",Blockly.LDL.ORDER_FUNCTION_CALL];switch(c){case "EVEN":var d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+
" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.LDL.valueToCode(a,"DIVISOR",Blockly.LDL.ORDER_MODULUS)||"0",d=b+" % "+a+" == 0"}return[d,Blockly.LDL.ORDER_EQUALITY]};Blockly.LDL.math_change=function(a){var b=Blockly.LDL.valueToCode(a,"DELTA",Blockly.LDL.ORDER_ADDITION)||"0";a=Blockly.LDL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME);return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};Blockly.LDL.math_round=Blockly.LDL.math_single;
Blockly.LDL.math_trig=Blockly.LDL.math_single;
Blockly.LDL.math_on_list=function(a){var b=a.getFieldValue("OP");switch(b){case "SUM":a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_MEMBER)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_COMMA)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_COMMA)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=Blockly.LDL.provideFunction_("mathMean",["function "+
Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=Blockly.LDL.provideFunction_("mathMedian",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});",
"  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "MODE":b=Blockly.LDL.provideFunction_("mathModes",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(values) {","  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {",
"    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }","  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);",
"    }","  }","  return modes;","}"]);a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=Blockly.LDL.provideFunction_("mathStandardDeviation",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);","  }","  variance = variance / n;",
"  return Math.sqrt(variance);","}"]);a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "RANDOM":b=Blockly.LDL.provideFunction_("mathRandomList",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=Blockly.LDL.valueToCode(a,"LIST",Blockly.LDL.ORDER_NONE)||"[]";a=b+"("+a+")";break;default:throw Error("Unknown operator: "+b);}return[a,Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.math_modulo=function(a){var b=Blockly.LDL.valueToCode(a,"DIVIDEND",Blockly.LDL.ORDER_MODULUS)||"0";a=Blockly.LDL.valueToCode(a,"DIVISOR",Blockly.LDL.ORDER_MODULUS)||"0";return[b+" % "+a,Blockly.LDL.ORDER_MODULUS]};
Blockly.LDL.math_constrain=function(a){var b=Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_COMMA)||"0",c=Blockly.LDL.valueToCode(a,"LOW",Blockly.LDL.ORDER_COMMA)||"0";a=Blockly.LDL.valueToCode(a,"HIGH",Blockly.LDL.ORDER_COMMA)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.math_random_int=function(a){var b=Blockly.LDL.valueToCode(a,"FROM",Blockly.LDL.ORDER_COMMA)||"0";a=Blockly.LDL.valueToCode(a,"TO",Blockly.LDL.ORDER_COMMA)||"0";return[Blockly.LDL.provideFunction_("mathRandomInt",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.math_random_float=function(a){return["Math.random()",Blockly.LDL.ORDER_FUNCTION_CALL]};Blockly.LDL.math_atan2=function(a){var b=Blockly.LDL.valueToCode(a,"X",Blockly.LDL.ORDER_COMMA)||"0";return["Math.atan2("+(Blockly.LDL.valueToCode(a,"Y",Blockly.LDL.ORDER_COMMA)||"0")+", "+b+") / Math.PI * 180",Blockly.LDL.ORDER_DIVISION]};Blockly.LDL.procedures={};
Blockly.LDL.procedures_defreturn=function(a){var b=Blockly.LDL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.PROCEDURE_CATEGORY_NAME),c="";Blockly.LDL.STATEMENT_PREFIX&&(c+=Blockly.LDL.injectId(Blockly.LDL.STATEMENT_PREFIX,a));Blockly.LDL.STATEMENT_SUFFIX&&(c+=Blockly.LDL.injectId(Blockly.LDL.STATEMENT_SUFFIX,a));c&&(c=Blockly.LDL.prefixLines(c,Blockly.LDL.INDENT));var d="";Blockly.LDL.INFINITE_LOOP_TRAP&&(d=Blockly.LDL.prefixLines(Blockly.LDL.injectId(Blockly.LDL.INFINITE_LOOP_TRAP,a),Blockly.LDL.INDENT));
var e=Blockly.LDL.statementToCode(a,"STACK"),f=Blockly.LDL.valueToCode(a,"RETURN",Blockly.LDL.ORDER_NONE)||"",g="";e&&f&&(g=c);f&&(f=Blockly.LDL.INDENT+"return "+f+";\n");for(var k=[],l=a.getVars(),h=0;h<l.length;h++)k[h]=Blockly.LDL.variableDB_.getName(l[h],Blockly.VARIABLE_CATEGORY_NAME);c="function "+b+"("+k.join(", ")+") {\n"+c+d+e+g+f+"}";c=Blockly.LDL.scrub_(a,c);Blockly.LDL.definitions_["%"+b]=c;return null};Blockly.LDL.procedures_defnoreturn=Blockly.LDL.procedures_defreturn;
Blockly.LDL.procedures_callreturn=function(a){for(var b=Blockly.LDL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.PROCEDURE_CATEGORY_NAME),c=[],d=a.getVars(),e=0;e<d.length;e++)c[e]=Blockly.LDL.valueToCode(a,"ARG"+e,Blockly.LDL.ORDER_COMMA)||"null";return[b+"("+c.join(", ")+")",Blockly.LDL.ORDER_FUNCTION_CALL]};Blockly.LDL.procedures_callnoreturn=function(a){return Blockly.LDL.procedures_callreturn(a)[0]+";\n"};
Blockly.LDL.procedures_ifreturn=function(a){var b="if ("+(Blockly.LDL.valueToCode(a,"CONDITION",Blockly.LDL.ORDER_NONE)||"false")+") {\n";Blockly.LDL.STATEMENT_SUFFIX&&(b+=Blockly.LDL.prefixLines(Blockly.LDL.injectId(Blockly.LDL.STATEMENT_SUFFIX,a),Blockly.LDL.INDENT));a.hasReturnValue_?(a=Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_NONE)||"null",b+=Blockly.LDL.INDENT+"return "+a+";\n"):b+=Blockly.LDL.INDENT+"return;\n";return b+"}\n"};Blockly.LDL.texts={};Blockly.LDL.text=function(a){return[Blockly.LDL.quote_(a.getFieldValue("TEXT")),Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.text_multiline=function(a){a=Blockly.LDL.multiline_quote_(a.getFieldValue("TEXT"));-1!=a.indexOf("\n")&&(a="("+a+")");return[a,Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.text.forceString_=function(a){return Blockly.LDL.text.forceString_.strRegExp.test(a)?a:"String("+a+")"};Blockly.LDL.text.forceString_.strRegExp=/^\s*'([^']|\\')*'\s*$/;
Blockly.LDL.text_join=function(a){switch(a.itemCount_){case 0:return["''",Blockly.LDL.ORDER_ATOMIC];case 1:return a=Blockly.LDL.valueToCode(a,"ADD0",Blockly.LDL.ORDER_NONE)||"''",a=Blockly.LDL.text.forceString_(a),[a,Blockly.LDL.ORDER_FUNCTION_CALL];case 2:var b=Blockly.LDL.valueToCode(a,"ADD0",Blockly.LDL.ORDER_NONE)||"''";a=Blockly.LDL.valueToCode(a,"ADD1",Blockly.LDL.ORDER_NONE)||"''";a=Blockly.LDL.text.forceString_(b)+" + "+Blockly.LDL.text.forceString_(a);return[a,Blockly.LDL.ORDER_ADDITION];
default:b=Array(a.itemCount_);for(var c=0;c<a.itemCount_;c++)b[c]=Blockly.LDL.valueToCode(a,"ADD"+c,Blockly.LDL.ORDER_COMMA)||"''";a="["+b.join(",")+"].join('')";return[a,Blockly.LDL.ORDER_FUNCTION_CALL]}};Blockly.LDL.text_append=function(a){var b=Blockly.LDL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME);a=Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_NONE)||"''";return b+" += "+Blockly.LDL.text.forceString_(a)+";\n"};
Blockly.LDL.text_length=function(a){return[(Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_FUNCTION_CALL)||"''")+".length",Blockly.LDL.ORDER_MEMBER]};Blockly.LDL.text_isEmpty=function(a){return["!"+(Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_MEMBER)||"''")+".length",Blockly.LDL.ORDER_LOGICAL_NOT]};
Blockly.LDL.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.LDL.valueToCode(a,"FIND",Blockly.LDL.ORDER_NONE)||"''";b=(Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_MEMBER)||"''")+"."+b+"("+c+")";return a.workspace.options.oneBasedIndex?[b+" + 1",Blockly.LDL.ORDER_ADDITION]:[b,Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.LDL.valueToCode(a,"VALUE","RANDOM"==b?Blockly.LDL.ORDER_NONE:Blockly.LDL.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[c+".charAt(0)",Blockly.LDL.ORDER_FUNCTION_CALL];case "LAST":return[c+".slice(-1)",Blockly.LDL.ORDER_FUNCTION_CALL];case "FROM_START":return a=Blockly.LDL.getAdjusted(a,"AT"),[c+".charAt("+a+")",Blockly.LDL.ORDER_FUNCTION_CALL];case "FROM_END":return a=Blockly.LDL.getAdjusted(a,"AT",1,!0),
[c+".slice("+a+").charAt(0)",Blockly.LDL.ORDER_FUNCTION_CALL];case "RANDOM":return[Blockly.LDL.provideFunction_("textRandomLetter",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+c+")",Blockly.LDL.ORDER_FUNCTION_CALL]}throw Error("Unhandled option (text_charAt).");};Blockly.LDL.text.getIndex_=function(a,b,c){return"FIRST"==b?"0":"FROM_END"==b?a+".length - 1 - "+c:"LAST"==b?a+".length - 1":c};
Blockly.LDL.text_getSubstring=function(a){var b=Blockly.LDL.valueToCode(a,"STRING",Blockly.LDL.ORDER_FUNCTION_CALL)||"''",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"!=c||"LAST"!=d)if(b.match(/^'?\w+'?$/)||"FROM_END"!=c&&"LAST"!=c&&"FROM_END"!=d&&"LAST"!=d){switch(c){case "FROM_START":var e=Blockly.LDL.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.LDL.getAdjusted(a,"AT1",1,!1,Blockly.LDL.ORDER_SUBTRACTION);e=b+".length - "+e;break;case "FIRST":e="0";break;default:throw Error("Unhandled option (text_getSubstring).");
}switch(d){case "FROM_START":a=Blockly.LDL.getAdjusted(a,"AT2",1);break;case "FROM_END":a=Blockly.LDL.getAdjusted(a,"AT2",0,!1,Blockly.LDL.ORDER_SUBTRACTION);a=b+".length - "+a;break;case "LAST":a=b+".length";break;default:throw Error("Unhandled option (text_getSubstring).");}b=b+".slice("+e+", "+a+")"}else{e=Blockly.LDL.getAdjusted(a,"AT1");a=Blockly.LDL.getAdjusted(a,"AT2");var f=Blockly.LDL.text.getIndex_,g={FIRST:"First",LAST:"Last",FROM_START:"FromStart",FROM_END:"FromEnd"};b=Blockly.LDL.provideFunction_("subsequence"+
g[c]+g[d],["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(sequence"+("FROM_END"==c||"FROM_START"==c?", at1":"")+("FROM_END"==d||"FROM_START"==d?", at2":"")+") {","  var start = "+f("sequence",c,"at1")+";","  var end = "+f("sequence",d,"at2")+" + 1;","  return sequence.slice(start, end);","}"])+"("+b+("FROM_END"==c||"FROM_START"==c?", "+e:"")+("FROM_END"==d||"FROM_START"==d?", "+a:"")+")"}return[b,Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[a.getFieldValue("CASE")];a=Blockly.LDL.valueToCode(a,"TEXT",b?Blockly.LDL.ORDER_MEMBER:Blockly.LDL.ORDER_NONE)||"''";return[b?a+b:Blockly.LDL.provideFunction_("textToTitleCase",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"])+"("+a+")",Blockly.LDL.ORDER_FUNCTION_CALL]};
Blockly.LDL.text_trim=function(a){var b={LEFT:".replace(/^[\\s\\xa0]+/, '')",RIGHT:".replace(/[\\s\\xa0]+$/, '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_MEMBER)||"''")+b,Blockly.LDL.ORDER_FUNCTION_CALL]};Blockly.LDL.text_print=function(a){return"window.alert("+(Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_NONE)||"''")+");\n"};
Blockly.LDL.text_prompt_ext=function(a){var b="window.prompt("+(a.getField("TEXT")?Blockly.LDL.quote_(a.getFieldValue("TEXT")):Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_NONE)||"''")+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="Number("+b+")");return[b,Blockly.LDL.ORDER_FUNCTION_CALL]};Blockly.LDL.text_prompt=Blockly.LDL.text_prompt_ext;
Blockly.LDL.text_count=function(a){var b=Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_MEMBER)||"''";a=Blockly.LDL.valueToCode(a,"SUB",Blockly.LDL.ORDER_NONE)||"''";return[Blockly.LDL.provideFunction_("textCount",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle) {","  if (needle.length === 0) {","    return haystack.length + 1;","  } else {","    return haystack.split(needle).length - 1;","  }","}"])+"("+b+", "+a+")",Blockly.LDL.ORDER_SUBTRACTION]};
Blockly.LDL.text_replace=function(a){var b=Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_MEMBER)||"''",c=Blockly.LDL.valueToCode(a,"FROM",Blockly.LDL.ORDER_NONE)||"''";a=Blockly.LDL.valueToCode(a,"TO",Blockly.LDL.ORDER_NONE)||"''";return[Blockly.LDL.provideFunction_("textReplace",["function "+Blockly.LDL.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle, replacement) {",'  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")','                 .replace(/\\x08/g,"\\\\x08");',"  return haystack.replace(new RegExp(needle, 'g'), replacement);",
"}"])+"("+b+", "+c+", "+a+")",Blockly.LDL.ORDER_MEMBER]};Blockly.LDL.text_reverse=function(a){return[(Blockly.LDL.valueToCode(a,"TEXT",Blockly.LDL.ORDER_MEMBER)||"''")+".split('').reverse().join('')",Blockly.LDL.ORDER_MEMBER]};Blockly.LDL.variables={};Blockly.LDL.variables_get=function(a){return[Blockly.LDL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME),Blockly.LDL.ORDER_ATOMIC]};Blockly.LDL.variables_set=function(a){var b=Blockly.LDL.valueToCode(a,"VALUE",Blockly.LDL.ORDER_ASSIGNMENT)||"0";return Blockly.LDL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME)+" = "+b+";\n"};/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
Blockly.LDL.variablesDynamic={};Blockly.LDL.variables_get_dynamic=Blockly.LDL.variables_get;Blockly.LDL.variables_set_dynamic=Blockly.LDL.variables_set;
return Blockly.LDL;
}));


//# sourceMappingURL=ldl_compressed.js.map
