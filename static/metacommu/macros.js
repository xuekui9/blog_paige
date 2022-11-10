remark.macros.scale = function (val) {
 var url = this;
 return '<img src="' + url + '" style="width: ' + val + '" />';
};

remark.macros['wlt'] = function(width, left, top, cl="") {
  var url = this;
  return '<img src="' + url + '" style="position:absolute;left:' + left + ';top:' + top + ';width:' + width + '" class="' + cl + '" />';
};