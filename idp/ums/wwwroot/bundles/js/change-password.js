(e=>{"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)})(function(h){h.extend(h.fn,{validate:function(e){var i;if(this.length)return(i=h.data(this[0],"validator"))||(this.attr("novalidate","novalidate"),i=new h.validator(e,this[0]),h.data(this[0],"validator",i),i.settings.onsubmit&&(this.on("click.validate",":submit",function(e){i.submitButton=e.currentTarget,h(this).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==h(this).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.on("submit.validate",function(s){function e(){var e,t;return i.submitButton&&(i.settings.submitHandler||i.formSubmitted)&&(e=h("<input type='hidden'/>").attr("name",i.submitButton.name).val(h(i.submitButton).val()).appendTo(i.currentForm)),!(i.settings.submitHandler&&!i.settings.debug)||(t=i.settings.submitHandler.call(i,i.currentForm,s),e&&e.remove(),void 0!==t&&t)}return i.settings.debug&&s.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,e()):i.form()?i.pendingRequest?!(i.formSubmitted=!0):e():(i.focusInvalid(),!1)})),i);e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var e,t,s;return h(this[0]).is("form")?e=this.validate().form():(s=[],e=!0,t=h(this[0].form).validate(),this.each(function(){(e=t.element(this)&&e)||(s=s.concat(t.errorList))}),t.errorList=s),e},rules:function(e,t){var s,i,r,a,n,o=this[0],l=void 0!==this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=o&&(!o.form&&l&&(o.form=this.closest("form")[0],o.name=this.attr("name")),null!=o.form)){if(e)switch(s=h.data(o.form,"validator").settings,i=s.rules,r=h.validator.staticRules(o),e){case"add":h.extend(r,h.validator.normalizeRule(t)),delete r.messages,i[o.name]=r,t.messages&&(s.messages[o.name]=h.extend(s.messages[o.name],t.messages));break;case"remove":return t?(n={},h.each(t.split(/\s/),function(e,t){n[t]=r[t],delete r[t]}),n):(delete i[o.name],r)}return(l=h.validator.normalizeRules(h.extend({},h.validator.classRules(o),h.validator.attributeRules(o),h.validator.dataRules(o),h.validator.staticRules(o)),o)).required&&(a=l.required,delete l.required,l=h.extend({required:a},l)),l.remote&&(a=l.remote,delete l.remote,l=h.extend(l,{remote:a})),l}}});function t(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}var s;h.extend(h.expr.pseudos||h.expr[":"],{blank:function(e){return!t(""+h(e).val())},filled:function(e){e=h(e).val();return null!==e&&!!t(""+e)},unchecked:function(e){return!h(e).prop("checked")}}),h.validator=function(e,t){this.settings=h.extend(!0,{},h.validator.defaults,e),this.currentForm=t,this.init()},h.validator.format=function(s,e){return 1===arguments.length?function(){var e=h.makeArray(arguments);return e.unshift(s),h.validator.format.apply(this,e)}:(void 0===e||((e=2<arguments.length&&e.constructor!==Array?h.makeArray(arguments).slice(1):e).constructor!==Array&&(e=[e]),h.each(e,function(e,t){s=s.replace(new RegExp("\\{"+e+"\\}","g"),function(){return t})})),s)},h.extend(h.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:h([]),errorLabelContainer:h([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(e){this.lastActive=e,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(e)))},onfocusout:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},onkeyup:function(e,t){9===t.which&&""===this.elementValue(e)||-1!==h.inArray(t.keyCode,[16,17,18,20,35,36,37,38,39,40,45,144,225])||(e.name in this.submitted||e.name in this.invalid)&&this.element(e)},onclick:function(e){e.name in this.submitted?this.element(e):e.parentNode.name in this.submitted&&this.element(e.parentNode)},highlight:function(e,t,s){("radio"===e.type?this.findByName(e.name):h(e)).addClass(t).removeClass(s)},unhighlight:function(e,t,s){("radio"===e.type?this.findByName(e.name):h(e)).removeClass(t).addClass(s)}},setDefaults:function(e){h.extend(h.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:h.validator.format("Please enter no more than {0} characters."),minlength:h.validator.format("Please enter at least {0} characters."),rangelength:h.validator.format("Please enter a value between {0} and {1} characters long."),range:h.validator.format("Please enter a value between {0} and {1}."),max:h.validator.format("Please enter a value less than or equal to {0}."),min:h.validator.format("Please enter a value greater than or equal to {0}."),step:h.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var t,s,i=void 0!==h(this).attr("contenteditable")&&"false"!==h(this).attr("contenteditable");!this.form&&i&&(this.form=h(this).closest("form")[0],this.name=h(this).attr("name")),r===this.form&&(i=h.data(this.form,"validator"),t="on"+e.type.replace(/^validate/,""),(s=i.settings)[t])&&!h(this).is(s.ignore)&&s[t].call(i,this,e)}this.labelContainer=h(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||h(this.currentForm),this.containers=h(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var s,r=this.currentForm,i=this.groups={};h.each(this.settings.groups,function(s,e){"string"==typeof e&&(e=e.split(/\s/)),h.each(e,function(e,t){i[t]=s})}),s=this.settings.rules,h.each(s,function(e,t){s[e]=h.validator.normalizeRule(t)}),h(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",e).on("click.validate","select, option, [type='radio'], [type='checkbox']",e),this.settings.invalidHandler&&h(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),h.extend(this.submitted,this.errorMap),this.invalid=h.extend({},this.errorMap),this.valid()||h(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var e=0,t=this.currentElements=this.elements();t[e];e++)this.check(t[e]);return this.valid()},element:function(e){var t,s,i=this.clean(e),r=this.validationTargetFor(i),a=this,n=!0;return void 0===r?delete this.invalid[i.name]:(this.prepareElement(r),this.currentElements=h(r),(s=this.groups[r.name])&&h.each(this.groups,function(e,t){t===s&&e!==r.name&&(i=a.validationTargetFor(a.clean(a.findByName(e))))&&i.name in a.invalid&&(a.currentElements.push(i),n=a.check(i)&&n)}),t=!1!==this.check(r),n=n&&t,this.invalid[r.name]=!t,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),h(e).attr("aria-invalid",!t)),n},showErrors:function(t){var s;t&&(h.extend((s=this).errorMap,t),this.errorList=h.map(this.errorMap,function(e,t){return{message:e,element:s.findByName(t)[0]}}),this.successList=h.grep(this.successList,function(e){return!(e.name in t)})),this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){h.fn.resetForm&&h(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var e=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(e)},resetElements:function(e){var t;if(this.settings.unhighlight)for(t=0;e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,""),this.findByName(e[t].name).removeClass(this.settings.validClass);else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var t,s=0;for(t in e)null!=e[t]&&!1!==e[t]&&s++;return s},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(e){e.not(this.containers).text(""),this.addWrapper(e).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{h(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(e){}},findLastActive:function(){var t=this.lastActive;return t&&1===h.grep(this.errorList,function(e){return e.element.name===t.name}).length&&t},elements:function(){var s=this,i={};return h(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var e=this.name||h(this).attr("name"),t=void 0!==h(this).attr("contenteditable")&&"false"!==h(this).attr("contenteditable");return!e&&s.settings.debug&&window.console&&console.error("%o has no name assigned",this),t&&(this.form=h(this).closest("form")[0],this.name=e),!(this.form!==s.currentForm||e in i||!s.objectLength(h(this).rules())||(i[e]=!0,0))})},clean:function(e){return h(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return h(this.settings.errorElement+"."+e,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=h([]),this.toHide=h([])},reset:function(){this.resetInternals(),this.currentElements=h([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(e){this.reset(),this.toHide=this.errorsFor(e)},elementValue:function(e){var t=h(e),s=e.type,i=void 0!==t.attr("contenteditable")&&"false"!==t.attr("contenteditable");return"radio"===s||"checkbox"===s?this.findByName(e.name).filter(":checked").val():"number"===s&&void 0!==e.validity?e.validity.badInput?"NaN":t.val():(e=i?t.text():t.val(),"file"===s?"C:\\fakepath\\"===e.substr(0,12)?e.substr(12):0<=(i=e.lastIndexOf("/"))||0<=(i=e.lastIndexOf("\\"))?e.substr(i+1):e:"string"==typeof e?e.replace(/\r/g,""):e)},check:function(t){t=this.validationTargetFor(this.clean(t));var e,s,i,r,a=h(t).rules(),n=h.map(a,function(e,t){return t}).length,o=!1,l=this.elementValue(t);for(s in"function"==typeof a.normalizer?r=a.normalizer:"function"==typeof this.settings.normalizer&&(r=this.settings.normalizer),r&&(l=r.call(t,l),delete a.normalizer),a){i={method:s,parameters:a[s]};try{if("dependency-mismatch"===(e=h.validator.methods[s].call(this,l,t,i.parameters))&&1===n)o=!0;else{if(o=!1,"pending"===e)return void(this.toHide=this.toHide.not(this.errorsFor(t)));if(!e)return this.formatAndAdd(t,i),!1}}catch(e){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+t.id+", check the '"+i.method+"' method.",e),e instanceof TypeError&&(e.message+=".  Exception occurred when checking element "+t.id+", check the '"+i.method+"' method."),e}}if(!o)return this.objectLength(a)&&this.successList.push(t),!0},customDataMessage:function(e,t){return h(e).data("msg"+t.charAt(0).toUpperCase()+t.substring(1).toLowerCase())||h(e).data("msg")},customMessage:function(e,t){e=this.settings.messages[e];return e&&(e.constructor===String?e:e[t])},findDefined:function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]},defaultMessage:function(e,t){var s=this.findDefined(this.customMessage(e.name,(t="string"==typeof t?{method:t}:t).method),this.customDataMessage(e,t.method),!this.settings.ignoreTitle&&e.title||void 0,h.validator.messages[t.method],"<strong>Warning: No message defined for "+e.name+"</strong>"),i=/\$?\{(\d+)\}/g;return"function"==typeof s?s=s.call(this,t.parameters,e):i.test(s)&&(s=h.validator.format(s.replace(i,"{$1}"),t.parameters)),s},formatAndAdd:function(e,t){var s=this.defaultMessage(e,t);this.errorList.push({message:s,element:e,method:t.method}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(e){return e=this.settings.wrapper?e.add(e.parent(this.settings.wrapper)):e},defaultShowErrors:function(){for(var e,t,s=0;this.errorList[s];s++)t=this.errorList[s],this.settings.highlight&&this.settings.highlight.call(this,t.element,this.settings.errorClass,this.settings.validClass),this.showLabel(t.element,t.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(s=0;this.successList[s];s++)this.showLabel(this.successList[s]);if(this.settings.unhighlight)for(s=0,e=this.validElements();e[s];s++)this.settings.unhighlight.call(this,e[s],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return h(this.errorList).map(function(){return this.element})},showLabel:function(e,t){var s,i,r,a=this.errorsFor(e),n=this.idOrName(e),o=h(e).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(t)):(i=a=h("<"+this.settings.errorElement+">").attr("id",n+"-error").addClass(this.settings.errorClass).html(t||""),this.settings.wrapper&&(i=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(i):this.settings.errorPlacement?this.settings.errorPlacement.call(this,i,h(e)):i.insertAfter(e),a.is("label")?a.attr("for",n):0===a.parents("label[for='"+this.escapeCssMeta(n)+"']").length&&(i=a.attr("id"),o?o.match(new RegExp("\\b"+this.escapeCssMeta(i)+"\\b"))||(o+=" "+i):o=i,h(e).attr("aria-describedby",o),s=this.groups[e.name])&&h.each((r=this).groups,function(e,t){t===s&&h("[name='"+r.escapeCssMeta(e)+"']",r.currentForm).attr("aria-describedby",a.attr("id"))})),!t&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,e)),this.toShow=this.toShow.add(a)},errorsFor:function(e){var t=this.escapeCssMeta(this.idOrName(e)),e=h(e).attr("aria-describedby"),t="label[for='"+t+"'], label[for='"+t+"'] *";return e&&(t=t+", #"+this.escapeCssMeta(e).replace(/\s+/g,", #")),this.errors().filter(t)},escapeCssMeta:function(e){return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(e){return this.groups[e.name]||!this.checkable(e)&&e.id||e.name},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),h(e).not(this.settings.ignore)[0]},checkable:function(e){return/radio|checkbox/i.test(e.type)},findByName:function(e){return h(this.currentForm).find("[name='"+this.escapeCssMeta(e)+"']")},getLength:function(e,t){switch(t.nodeName.toLowerCase()){case"select":return h("option:selected",t).length;case"input":if(this.checkable(t))return this.findByName(t.name).filter(":checked").length}return e.length},depend:function(e,t){return!this.dependTypes[typeof e]||this.dependTypes[typeof e](e,t)},dependTypes:{boolean:function(e){return e},string:function(e,t){return!!h(e,t.form).length},function:function(e,t){return e(t)}},optional:function(e){var t=this.elementValue(e);return!h.validator.methods.required.call(this,t,e)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,h(e).addClass(this.settings.pendingClass),this.pending[e.name]=!0)},stopRequest:function(e,t){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],h(e).removeClass(this.settings.pendingClass),t&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(h(this.currentForm).submit(),this.submitButton&&h("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!t&&0===this.pendingRequest&&this.formSubmitted&&(h(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e,t){return t="string"==typeof t&&t||"remote",h.data(e,"previousValue")||h.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,{method:t})})},destroy:function(){this.resetForm(),h(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,t){e.constructor===String?this.classRuleSettings[e]=t:h.extend(this.classRuleSettings,e)},classRules:function(e){var t={},e=h(e).attr("class");return e&&h.each(e.split(" "),function(){this in h.validator.classRuleSettings&&h.extend(t,h.validator.classRuleSettings[this])}),t},normalizeAttributeRule:function(e,t,s,i){(i=/min|max|step/.test(s)&&(null===t||/number|range|text/.test(t))&&(i=Number(i),isNaN(i))?void 0:i)||0===i?e[s]=i:t===s&&"range"!==t&&(e[s]=!0)},attributeRules:function(e){var t,s,i={},r=h(e),a=e.getAttribute("type");for(t in h.validator.methods)s="required"===t?(s=e.getAttribute(t),""===s&&(s=!0),!!s):r.attr(t),this.normalizeAttributeRule(i,a,t,s);return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var t,s,i={},r=h(e),a=e.getAttribute("type");for(t in h.validator.methods)s=r.data("rule"+t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()),""===s&&(s=!0),this.normalizeAttributeRule(i,a,t,s);return i},staticRules:function(e){var t={},s=h.data(e.form,"validator");return t=s.settings.rules?h.validator.normalizeRule(s.settings.rules[e.name])||{}:t},normalizeRules:function(i,r){return h.each(i,function(e,t){if(!1===t)delete i[e];else if(t.param||t.depends){var s=!0;switch(typeof t.depends){case"string":s=!!h(t.depends,r.form).length;break;case"function":s=t.depends.call(r,r)}s?i[e]=void 0===t.param||t.param:(h.data(r.form,"validator").resetElements(h(r)),delete i[e])}}),h.each(i,function(e,t){i[e]="function"==typeof t&&"normalizer"!==e?t(r):t}),h.each(["minlength","maxlength"],function(){i[this]&&(i[this]=Number(i[this]))}),h.each(["rangelength","range"],function(){var e;i[this]&&(Array.isArray(i[this])?i[this]=[Number(i[this][0]),Number(i[this][1])]:"string"==typeof i[this]&&(e=i[this].replace(/[\[\]]/g,"").split(/[\s,]+/),i[this]=[Number(e[0]),Number(e[1])]))}),h.validator.autoCreateRanges&&(null!=i.min&&null!=i.max&&(i.range=[i.min,i.max],delete i.min,delete i.max),null!=i.minlength)&&null!=i.maxlength&&(i.rangelength=[i.minlength,i.maxlength],delete i.minlength,delete i.maxlength),i},normalizeRule:function(e){var t;return"string"==typeof e&&(t={},h.each(e.split(/\s/),function(){t[this]=!0}),e=t),e},addMethod:function(e,t,s){h.validator.methods[e]=t,h.validator.messages[e]=void 0!==s?s:h.validator.messages[e],t.length<3&&h.validator.addClassRules(e,h.validator.normalizeRule(e))},methods:{required:function(e,t,s){return this.depend(s,t)?"select"===t.nodeName.toLowerCase()?(s=h(t).val())&&0<s.length:this.checkable(t)?0<this.getLength(e,t):null!=e&&0<e.length:"dependency-mismatch"},email:function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(e,t){return this.optional(t)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)},date:(s=!1,function(e,t){return s||(s=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(t)||!/Invalid|NaN/.test(new Date(e).toString())}),dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e,t){return this.optional(t)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},minlength:function(e,t,s){e=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||s<=e},maxlength:function(e,t,s){e=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||e<=s},rangelength:function(e,t,s){e=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||e>=s[0]&&e<=s[1]},min:function(e,t,s){return this.optional(t)||s<=e},max:function(e,t,s){return this.optional(t)||e<=s},range:function(e,t,s){return this.optional(t)||e>=s[0]&&e<=s[1]},step:function(e,t,s){function i(e){return(e=(""+e).match(/(?:\.(\d+))?$/))&&e[1]?e[1].length:0}function r(e){return Math.round(e*Math.pow(10,a))}var a,n=h(t).attr("type"),o="Step attribute on input type "+n+" is not supported.",l=new RegExp("\\b"+n+"\\b"),d=!0;if(n&&!l.test(["text","number","range"].join()))throw new Error(o);return a=i(s),(i(e)>a||r(e)%r(s)!=0)&&(d=!1),this.optional(t)||d},equalTo:function(e,t,s){s=h(s);return this.settings.onfocusout&&s.not(".validate-equalTo-blur").length&&s.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){h(t).valid()}),e===s.val()},remote:function(i,r,e,a){if(this.optional(r))return"dependency-mismatch";a="string"==typeof a&&a||"remote";var n,t,o=this.previousValue(r,a);return this.settings.messages[r.name]||(this.settings.messages[r.name]={}),o.originalMessage=o.originalMessage||this.settings.messages[r.name][a],this.settings.messages[r.name][a]=o.message,t=h.param(h.extend({data:i},(e="string"==typeof e?{url:e}:e).data)),o.old===t?o.valid:(o.old=t,(n=this).startRequest(r),(t={})[r.name]=i,h.ajax(h.extend(!0,{mode:"abort",port:"validate"+r.name,dataType:"json",data:t,context:n.currentForm,success:function(e){var t,s=!0===e||"true"===e;n.settings.messages[r.name][a]=o.originalMessage,s?(t=n.formSubmitted,n.resetInternals(),n.toHide=n.errorsFor(r),n.formSubmitted=t,n.successList.push(r),n.invalid[r.name]=!1,n.showErrors()):(t={},e=e||n.defaultMessage(r,{method:a,parameters:i}),t[r.name]=o.message=e,n.invalid[r.name]=!0,n.showErrors(t)),o.valid=s,n.stopRequest(r,s)}},e)),"pending")}}});var i,r={};return h.ajaxPrefilter?h.ajaxPrefilter(function(e,t,s){var i=e.port;"abort"===e.mode&&(r[i]&&r[i].abort(),r[i]=s)}):(i=h.ajax,h.ajax=function(e){var t=("mode"in e?e:h.ajaxSettings).mode,e=("port"in e?e:h.ajaxSettings).port;return"abort"===t?(r[e]&&r[e].abort(),r[e]=i.apply(this,arguments),r[e]):i.apply(this,arguments)}),h});var validateUserpassword={p_policy_uppercase:function(e){this.name="p_policy_uppercase";if(/^(?=.*[A-Z]).+$/.test(e))return"p_policy_uppercase"},p_policy_lowercase:function(e){this.name="p_policy_lowercase";if(/^(?=.*[a-z]).+$/.test(e))return"p_policy_lowercase"},p_policy_number:function(e){this.name="p_policy_number";if(/^(?=.*\d).+$/.test(e))return"p_policy_number"},p_policy_specialcharacter:function(e){this.name="p_policy_specialcharacter";if(/^(?=.*(_|[^\w])).+$/.test(e))return"p_policy_specialcharacter"},p_policy_length:function(e){if(this.name="p_policy_length",e.length>=$('meta[name="password_policy:minlength"]').attr("content"))return"p_policy_length"}};function passwordBoxHightlight(e){var t="",s=($(e).closest("div").addClass("e-error"),"popover"===$("#new-password").data("toggle")),i=s?$("#password_policy_rules").find("li>span:not(.content)"):$("#password_policy_rules").find("li>span"),r=s?"su-password-tick":"su-tick";if("new-password"==$(e).attr("id")){for(var a=0;a<i.length;a++)$(i[a]).attr("class")==r?$(e).closest("div").removeClass("e-error"):t="unsatisfied-rule";""!=t&&null!=t&&$(e).closest("div").addClass("e-error")}}function passwordBoxUnhightlight(e){var t="",s=($(e).closest("div").removeClass("e-error"),"popover"===$("#new-password").data("toggle")),i=s?$("#password_policy_rules").find("li>span:not(.content)"):$("#password_policy_rules").find("li>span"),r=s?"su-password-tick":"su-tick";if("new-password"==$(e).attr("id")){for(var a=0;a<i.length;a++)$(i[a]).attr("class")!=r&&(t="unsatisfied-rule"),$(i[a]).attr("class")==r&&$(e).closest("div").removeClass("e-error");""!=t&&null!=t&&($(e).closest("div").addClass("e-error"),t="")}$(e).closest("div").find(".password-validate-holder").html("")}function passwordPolicyPopover(e,t){var s=$(e),i=(s.popover("show"),new Array);i.push(validateUserpassword.p_policy_uppercase),i.push(validateUserpassword.p_policy_lowercase),i.push(validateUserpassword.p_policy_number),i.push(validateUserpassword.p_policy_specialcharacter),i.push(validateUserpassword.p_policy_length),$.each(i,function(e){e=i[e];null!=(ruleName=e(t))&&""!=ruleName?s.next().find("#password_policy_rules").find("li#"+ruleName+" span:first").hasClass("su-password-tick")||s.next().find("#password_policy_rules").find("li#"+ruleName+" span:first").addClass("su-password-tick").removeClass("icon"):(ruleName=name,s.next().find("#password_policy_rules").find("li#"+ruleName+" span:first").hasClass("su-password-tick")&&s.next().find("#password_policy_rules").find("li#"+ruleName+" span:first").removeClass("su-password-tick").addClass("icon")),ruleName=""})}$.validator.addMethod("isValidPassword",function(e,t){var s=new Array;if(s.push(validateUserpassword.p_policy_uppercase),s.push(validateUserpassword.p_policy_lowercase),s.push(validateUserpassword.p_policy_number),s.push(validateUserpassword.p_policy_specialcharacter),s.push(validateUserpassword.p_policy_length),passwordPolicyPopover("#new-password",e),$("#password_policy_rules li>span.su-password-tick").length==$("#password_policy_rules li>span:not(.content)").length)return!0},"");var isKeyUp=!1;function onChangePasswordClick(){$(".password-validate-holder").html(""),$("#new-password-validate, #confirm-password-validate").closest("div").prev("div").removeClass("has-error");var e=!0;(e=$(".change-password-form").valid())&&$("#new-password").val()!=$("#confirm-password").val()&&($("#confirm-password-validate").html("Passwords mismatch"),$("#confirm-password-validate").closest("div").prev("div").addClass("has-error"),e=!1),0!=e&&(showWaitingPopup("content-area"),doAjaxPost("POST",updatepasswordUrl,{oldpassword:$("#old-password").val(),newpassword:$("#new-password").val(),confirmpassword:$("#confirm-password").val()},function(e){$("input[type='password']").val(""),hideWaitingPopup("content-area"),$("#password_policy_rules").remove(),$("#confirm-password-section").removeAttr("style"),$("#change-password-btn").css("margin-top","0px"),e.Data.status||"password"!=e.Data.key?SuccessAlert(window.Server.App.LocalizationContent.UpdatePassword,window.Server.App.LocalizationContent.PasswordSuccess,7e3):($("#old-password-validate").html(e.Data.value),$("#old-password-validate").closest("div").prev("div").addClass("has-error"))}))}$(document).ready(function(){var s;$(".password-fields-user-profile-edit").bind("keypress",function(e){if(13==e.keyCode)return e.preventDefault(),onChangePasswordClick(),this.blur(),!1}),$("#new-password").bind("keyup",function(){$("#new-password").val()==$("#confirm-password").val()?($("#confirm-password").closest("div").removeClass("has-error"),$("#confirm-password").closest("div").find("span:last-child").html("")):""!=$("#confirm-password").val()&&($("#confirm-password").closest("div").addClass("has-error"),$("#confirm-password").closest("div").next("div").find("span").html(window.Server.App.LocalizationContent.PasswordMismatch).css("display","block")),passwordPolicyPopover("#new-password",$("#new-password").val())}),$(".change-password-form").validate({errorElement:"span",onkeyup:function(e,t){$("#success-message").html(""),9!=t.keyCode&&(isKeyUp=!0,$(e).valid(),isKeyUp=!1)},onfocusout:function(e){$(e).valid(),$("#success-message").html("")},rules:{"old-password":{required:!0},"new-password":{required:!0,isValidPassword:!0},"confirm-password":{required:!0,equalTo:"#new-password"}},highlight:function(e){if($(e).closest("div").addClass("has-error"),"new-password"==$(e).attr("id")){for(var t=0;t<$("#password_policy_rules").find("li>span").length;t++)"su-tick"==$($("#password_policy_rules").find("li>span")[t]).attr("class")?$(e).closest("div").removeClass("has-error"):s="unsatisfied-rule";""!=s&&null!=s&&($(e).closest("div").addClass("has-error"),s="")}},unhighlight:function(e){if($(e).closest("div").removeClass("has-error"),"new-password"==$(e).attr("id")){for(var t=0;t<$("#password_policy_rules").find("li>span").length;t++)"su-tick"!=$($("#password_policy_rules").find("li>span")[t]).attr("class")&&(s="unsatisfied-rule"),"su-tick"==$($("#password_policy_rules").find("li>span")[t]).attr("class")&&$(e).closest("div").removeClass("has-error");""!=s&&null!=s&&($(e).closest("div").addClass("has-error"),s="")}$(e).closest("div").find(".password-validate-holder").html("")},errorPlacement:function(e,t){$(t).closest("div").find(".password-validate-holder").html(e.html())},messages:{"old-password":{required:window.Server.App.LocalizationContent.OldPasswordValidator},"new-password":{required:window.Server.App.LocalizationContent.NewPasswordValidator},"confirm-password":{required:window.Server.App.LocalizationContent.ConfirmPasswordValidator,equalTo:window.Server.App.LocalizationContent.PasswordMismatch}}})}),$("#new-password").on("change",function(){passwordPolicyPopover("#new-password",$("#new-password").val()),$("#new-password").valid()}),$(function(){$(document).on("click",".show-hide-password",function(){$(this).siblings("input").is(":password")?($(this).siblings("input").attr("type","text").val(),$(this).removeClass("su-show").addClass("su-hide").attr("data-original-title",window.Server.App.LocalizationContent.ClicktoHide)):($(this).siblings("input").attr("type","password"),$(this).removeClass("su-hide").addClass("su-show").attr("data-original-title",window.Server.App.LocalizationContent.ClicktoView)),$(this).tooltip("show")}),$(document).on("touchstart",".show-hide-password",function(){$(this).siblings("input").is(":password")?$(this).siblings("input").attr("type","text"):$(this).siblings("input").attr("type","password")}),$(document).on("touchend",".show-hide-password",function(){$(this).siblings("input").is(":password")?$(this).siblings("input").attr("type","text"):$(this).siblings("input").attr("type","password")}),window.innerWidth<1041&&$(document).on("click",".show-hide-password",function(){$(this).siblings("input").is(":password")?$(this).siblings("input").attr("type","text"):$(this).siblings("input").attr("type","password")}),$(document).on("click",".show-hide-password-ej2",function(){$(this).siblings().find("input").is(":password")?($(this).siblings().find("input").attr("type","text"),$(this).removeClass("su-show").addClass("su-hide").attr("data-original-title",window.Server.App.LocalizationContent.ClicktoHide)):($(this).siblings().find("input").attr("type","password"),$(this).removeClass("su-hide").addClass("su-show").attr("data-original-title",window.Server.App.LocalizationContent.ClicktoView)),$(this).tooltip("show")}),$(document).on("touch",".show-hide-password-ej2",function(){$(this).siblings().find("input").is(":password")?($(this).siblings().find("input").attr("type","text"),$(this).removeClass("su-show"),$(this).addClass("su-hide")):($(this).siblings().find("input").attr("type","password"),$(this).removeClass("su-hide"),$(this).addClass("su-show"))})});