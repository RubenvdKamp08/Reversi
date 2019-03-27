this["spa_templates"] = this["spa_templates"] || {};
this["spa_templates"]["src"] = this["spa_templates"]["src"] || {};
this["spa_templates"]["src"]["js"] = this["spa_templates"]["src"]["js"] || {};
this["spa_templates"]["src"]["js"]["templates"] = this["spa_templates"]["src"]["js"]["templates"] || {};
this["spa_templates"]["src"]["js"]["templates"]["gameInformation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p class=\"you\"> jij bent: "
    + alias4(((helper = (helper = helpers.you || (depth0 != null ? depth0.you : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"you","hash":{},"data":data}) : helper)))
    + " </p>\r\n<p class=\"set\"> aanzet: "
    + alias4(((helper = (helper = helpers.set || (depth0 != null ? depth0.set : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"set","hash":{},"data":data}) : helper)))
    + " </p>";
},"useData":true});
this["spa_templates"]["src"]["js"]["templates"]["gameplay"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 2),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                <td>\r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,depth0,1,{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,depth0,11,{"name":"ifEquals","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,depth0,2,{"name":"ifEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,depth0,22,{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </td>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"white\">\r\n                        <div class=\"innerWhite\">                            \r\n                        </div>\r\n                    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"white animation\">\r\n                        <div class=\"innerWhite\">                            \r\n                        </div>\r\n                    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"black\">\r\n                            <div class=\"innerBlack\">\r\n                            </div>\r\n                        </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"black animation\">\r\n                            <div class=\"innerBlack\">\r\n                            </div>\r\n                        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"board\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.grid : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table>\r\n\r\n";
},"useData":true});
this["spa_templates"]["src"]["js"]["templates"]["score"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<p>score: </p> \r\n		<p class=\"black\"> zwart: "
    + alias4(((helper = (helper = helpers.black || (depth0 != null ? depth0.black : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"black","hash":{},"data":data}) : helper)))
    + "</p>\r\n		<p class=\"white\"> wit: "
    + alias4(((helper = (helper = helpers.white || (depth0 != null ? depth0.white : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"white","hash":{},"data":data}) : helper)))
    + " </p>\r\n";
},"useData":true});