var styleSrcChipData=[],scriptSrcChipData=[],fontSrcChipData=[],imgSrcChipData=[],connectSrcChipData=[],frameSrcChipData=[],frameAncChipData=[],isStyleSrcChipBinded=!1,isScriptSrcsChipBinded=!1,isFontSrcChipBinded=!1,isImgSrcChipBinded=!1,isConnectSrcChipBinded=!1,isFrameSrcChipBinded=!1,isFrameAncChipBinded=!1;function check(t){6<=$("#min-len").val()&&($(".min-len-validation-messages").css("display","none"),$("#update-password-settings").removeAttr("disabled"))}function diableOrEnableCSPSettingsForm(){$("#enable-csp").is(":checked")?($(".src-input-class").removeClass("src-disabled"),$(".src-input-class .src-input-ship .e-chip").removeClass("disable-bg-color"),$(".txt-input-src").prop("disabled",!1)):($(".txt-input-src").val(""),$(".style-src-validation .script-src-validation .font-src-validation .img-src-validation .connect-src-validation .frame-src-validation .frame-anc-validation").html(""),$(".src-input-class").addClass("src-disabled"),$(".src-input-class .src-input-ship .e-chip").addClass("disable-bg-color"),$(".txt-input-src").prop("disabled",!0),getSrcInstance("style-src-chip-content"),getSrcInstance("script-src-chip-content"),getSrcInstance("font-src-chip-content"),getSrcInstance("img-src-chip-content"),getSrcInstance("connect-src-chip-content"),getSrcInstance("frame-src-chip-content"),getSrcInstance("frame-anc-chip-content"),styleSrcChipData=[],scriptSrcChipData=[],fontSrcChipData=[],imgSrcChipData=[],connectSrcChipData=[],frameSrcChipData=[],frameAncChipData=[])}function objectConvertAsSrcDirectiveChip(t,e){0!=(t=t.endsWith(",")||t.endsWith(";")||t.endsWith("\n")?t.slice(0,-1).trim():t).length?isValidOrigin(t)?"txt-stylesrc"==e?(isSrcChipAlreadyExists(t,"style-src-chip-content")&&(styleSrcChipData.push(t),srcChipConversion(styleSrcChipData,"style-src-chip-content","#txt-stylesrc")),$("#"+e).parent().next().html("")):"txt-scriptsrc"==e?(isSrcChipAlreadyExists(t,"script-src-chip-content")&&(scriptSrcChipData.push(t),srcChipConversion(scriptSrcChipData,"script-src-chip-content","#txt-scriptsrc")),$("#"+e).parent().next().html("")):"txt-fontsrc"==e?(isSrcChipAlreadyExists(t,"font-src-chip-content")&&(fontSrcChipData.push(t),srcChipConversion(fontSrcChipData,"font-src-chip-content","#txt-fontsrc")),$("#"+e).parent().next().html("")):"txt-imgsrc"==e?(isSrcChipAlreadyExists(t,"img-src-chip-content")&&(imgSrcChipData.push(t),srcChipConversion(imgSrcChipData,"img-src-chip-content","#txt-imgsrc")),$("#"+e).parent().next().html("")):"txt-connectsrc"==e?(isSrcChipAlreadyExists(t,"connect-src-chip-content")&&(connectSrcChipData.push(t),srcChipConversion(connectSrcChipData,"connect-src-chip-content","#txt-connectsrc")),$("#"+e).parent().next().html("")):"txt-framesrc"==e?(isSrcChipAlreadyExists(t,"frame-src-chip-content")&&(frameSrcChipData.push(t),srcChipConversion(frameSrcChipData,"frame-src-chip-content","#txt-framesrc")),$("#"+e).parent().next().html("")):"txt-frameanc"==e&&(isSrcChipAlreadyExists(t,"frame-anc-chip-content")&&(frameAncChipData.push(t),srcChipConversion(frameAncChipData,"frame-anc-chip-content","#txt-frameanc")),$("#"+e).parent().next().html("")):($("#"+e).val(t),$("#"+e).parent().next().html(window.Server.App.LocalizationContent.ValidationMessage)):ClearSettingsFields()}function ClearSettingsFields(){$("#txt-stylesrc").val(""),null==document.getElementById("style-src-chip-content").ej2_instances&&0==$("#txt-stylesrc").val().length&&applySrcContainer("#txt-stylesrc"),$("#txt-scriptsrc").val(""),null==document.getElementById("script-src-chip-content").ej2_instances&&0==$("#txt-scriptsrc").val().length&&applySrcContainer("#txt-scriptsrc"),$("#txt-fontsrc").val(""),null==document.getElementById("font-src-chip-content").ej2_instances&&0==$("#txt-fontsrc").val().length&&applySrcContainer("#txt-fontsrc"),$("#txt-imgsrc").val(""),null==document.getElementById("img-src-chip-content").ej2_instances&&0==$("#txt-imgsrc").val().length&&applySrcContainer("#txt-imgsrc"),$("#txt-connectsrc").val(""),null==document.getElementById("connect-src-chip-content").ej2_instances&&0==$("#txt-connectsrc").val().length&&applySrcContainer("#txt-connectsrc"),$("#txt-framesrc").val(""),null==document.getElementById("frame-src-chip-content").ej2_instances&&0==$("#txt-framesrc").val().length&&applySrcContainer("#txt-framesrc"),$("#txt-frameanc").val(""),null==document.getElementById("frame-anc-chip-content").ej2_instances&&0==$("#txt-frameanc").val().length&&applySrcContainer("#txt-frameanc")}function isSrcChipAlreadyExists(t,e){if("style-src-chip-content"==e){var n=document.getElementById("style-src-chip-content").ej2_instances;if(null!=n&&0!=n[0].chips&&null!=n[0].chips)for(i=0;i<n[0].chips.length;i++)if(n[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-stylesrc").val(""),!1;return!0}if("script-src-chip-content"==e){var c=document.getElementById("script-src-chip-content").ej2_instances;if(null!=c&&0!=c[0].chips&&null!=c[0].chips)for(i=0;i<c[0].chips.length;i++)if(c[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-scriptsrc").val(""),!1;return!0}if("font-src-chip-content"==e){var s=document.getElementById("font-src-chip-content").ej2_instances;if(null!=s&&0!=s[0].chips&&null!=s[0].chips)for(i=0;i<s[0].chips.length;i++)if(s[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-fontsrc").val(""),!1;return!0}if("img-src-chip-content"==e){var o=document.getElementById("img-src-chip-content").ej2_instances;if(null!=o&&0!=o[0].chips&&null!=o[0].chips)for(i=0;i<o[0].chips.length;i++)if(o[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-imgsrc").val(""),!1;return!0}if("connect-src-chip-content"==e){var r=document.getElementById("connect-src-chip-content").ej2_instances;if(null!=r&&0!=r[0].chips&&null!=r[0].chips)for(i=0;i<r[0].chips.length;i++)if(r[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-connectsrc").val(""),!1;return!0}if("frame-src-chip-content"==e){var a=document.getElementById("frame-src-chip-content").ej2_instances;if(null!=a&&0!=a[0].chips&&null!=a[0].chips)for(i=0;i<a[0].chips.length;i++)if(a[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-framesrc").val(""),!1;return!0}if("frame-anc-chip-content"==e){var p=document.getElementById("frame-anc-chip-content").ej2_instances;if(null!=p&&0!=p[0].chips&&null!=p[0].chips)for(i=0;i<p[0].chips.length;i++)if(p[0].chips[i].toLowerCase()==t.toLowerCase())return $("#txt-frameanc").val(""),!1;return!0}}function srcChipConversion(t,e,n){var c;"#txt-stylesrc"==n?isStyleSrcChipBinded?((c=document.getElementById(e).ej2_instances)[0].chips=[],c[0].chips=t,c[0].createChip(),c[0].refresh()):(new ej.buttons.ChipList({chips:t,enableDelete:!0,delete:onStyleSrcChipDelete},"#"+e),isStyleSrcChipBinded=!0):"#txt-scriptsrc"==n?isScriptSrcsChipBinded?((c=document.getElementById("script-src-chip-content").ej2_instances)[0].chips=[],c[0].chips=scriptSrcChipData,c[0].createChip(),c[0].refresh()):(new ejs.buttons.ChipList({chips:t,enableDelete:!0,delete:onScriptSrcChipDelete},"#script-src-chip-content"),isScriptSrcsChipBinded=!0):"#txt-fontsrc"==n?isFontSrcChipBinded?((c=document.getElementById("font-src-chip-content").ej2_instances)[0].chips=[],c[0].chips=fontSrcChipData,c[0].createChip(),c[0].refresh()):(new ejs.buttons.ChipList({chips:t,enableDelete:!0,delete:onFontSrcChipDelete},"#font-src-chip-content"),isFontSrcChipBinded=!0):"#txt-imgsrc"==n?isImgSrcChipBinded?((c=document.getElementById("img-src-chip-content").ej2_instances)[0].chips=[],c[0].chips=imgSrcChipData,c[0].createChip(),c[0].refresh()):(new ejs.buttons.ChipList({chips:t,enableDelete:!0,delete:onImgSrcChipDelete},"#img-src-chip-content"),isImgSrcChipBinded=!0):"#txt-connectsrc"==n?isConnectSrcChipBinded?((c=document.getElementById("connect-src-chip-content").ej2_instances)[0].chips=[],c[0].chips=connectSrcChipData,c[0].createChip(),c[0].refresh()):(new ejs.buttons.ChipList({chips:t,enableDelete:!0,delete:onConnectSrcChipDelete},"#connect-src-chip-content"),isConnectSrcChipBinded=!0):"#txt-framesrc"==n?isFrameSrcChipBinded?((c=document.getElementById("frame-src-chip-content").ej2_instances)[0].chips=[],c[0].chips=frameSrcChipData,c[0].createChip(),c[0].refresh()):(new ejs.buttons.ChipList({chips:t,enableDelete:!0,delete:onFrameSrcChipDelete},"#frame-src-chip-content"),isFrameSrcChipBinded=!0):"#txt-frameanc"==n&&(isFrameAncChipBinded?((c=document.getElementById("frame-anc-chip-content").ej2_instances)[0].chips=[],c[0].chips=frameAncChipData,c[0].createChip(),c[0].refresh()):(new ejs.buttons.ChipList({chips:t,enableDelete:!0,delete:onFrameAncChipDelete},"#frame-anc-chip-content"),isFrameAncChipBinded=!0)),140<$("#"+e).height()&&((c=document.getElementById(e)).scrollTop=c.scrollHeight),removeSrcContainer(e,n)}function onStyleSrcChipDelete(){$("#txt-stylesrc").focus(),setTimeout(function(){$(".style-src-validation").html("")},100),1==document.getElementById("style-src-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-stylesrc")}function onScriptSrcChipDelete(){$("#txt-scriptsrc").focus(),setTimeout(function(){$(".script-src-validation").html("")},100),1==document.getElementById("script-src-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-scriptsrc")}function onFontSrcChipDelete(){$("#txt-fontsrc").focus(),setTimeout(function(){$(".font-src-validation").html("")},100),1==document.getElementById("font-src-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-fontsrc")}function onImgSrcChipDelete(){$("#txt-imgsrc").focus(),setTimeout(function(){$(".img-src-validation").html("")},100),1==document.getElementById("img-src-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-imgsrc")}function onConnectSrcChipDelete(){$("#txt-connectsrc").focus(),setTimeout(function(){$(".connect-src-validation").html("")},100),1==document.getElementById("connect-src-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-connectsrc")}function onFrameSrcChipDelete(){$("#txt-framesrc").focus(),setTimeout(function(){$(".frame-src-validation").html("")},100),1==document.getElementById("frame-src-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-framesrc")}function onFrameAncChipDelete(){$("#txt-frameanc").focus(),setTimeout(function(){$(".frame-anc-validation").html("")},100),1==document.getElementById("frame-anc-chip-content").ej2_instances[0].chips.length&&applySrcContainer("#txt-frameanc")}function getSrcInstance(t){var e=document.getElementById(t).ej2_instances;"style-src-chip-content"==t?null!=e&&(e[0].chips=[],applySrcContainer("#txt-stylesrc")):"script-src-chip-content"==t?null!=e&&(e[0].chips=[],applySrcContainer("#txt-scriptsrc")):"font-src-chip-content"==t?null!=e&&(e[0].chips=[],applySrcContainer("#txt-fontsrc")):"img-src-chip-content"==t?null!=e&&(e[0].chips=[],applySrcContainer("#txt-imgsrc")):"connect-src-chip-content"==t?null!=e&&(e[0].chips=[],applySrcContainer("#txt-connectsrc")):"frame-src-chip-content"==t?null!=e&&(e[0].chips=[],applySrcContainer("#txt-framesrc")):"frame-anc-chip-content"==t&&null!=e&&(e[0].chips=[],applySrcContainer("#txt-frameanc")),$("#"+t).html("")}function applySrcContainer(t){"#txt-stylesrc"==t?($("#txt-stylesrc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#style-src-chip-content").hide(),$(".style-src-validation").html("")):"#txt-scriptsrc"==t?($("#txt-scriptsrc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#script-src-chip-content").hide(),$(".script-src-validation").html("")):"#txt-fontsrc"==t?($("#txt-fontsrc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#font-src-chip-content").hide(),$(".font-src-validation").html("")):"#txt-imgsrc"==t?($("#txt-imgsrc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#img-src-chip-content").hide(),$(".img-src-validation").html("")):"#txt-connectsrc"==t?($("#txt-connectsrc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#connect-src-chip-content").hide(),$(".connect-src-validation").html("")):"#txt-framesrc"==t?($("#txt-framesrc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#frame-src-chip-content").hide(),$(".frame-src-validation").html("")):"#txt-frameanc"==t&&($("#txt-frameanc").css("width","100%").attr("placeholder",window.Server.App.LocalizationContent.CspPlaceHolder),$("#frame-anc-chip-content").hide(),$(".frame-anc-validation").html(""))}function removeSrcContainer(t,e){$(e).css("width","10%").removeAttr("placeholder").val(""),$("#"+t).css("display","inline")}function confirmation(){document.getElementById("samesite-dialog").ej2_instances[0].hide();var t={SameSiteAttribute:$("input:radio[name=cookie]:checked").val()};$.ajax({type:"POST",url:updateCookieSettingsUrl,data:{systemSettingsData:t},success:function(t){t.status?(SuccessAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdated,7e3),window.location.href=loginUrl):WarningAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdateFalied,t.message,7e3)}})}$(document).ready(function(){if(new ejs.inputs.NumericTextBox({cssClass:"e-outline e-custom",min:6,max:64,format:"###.##"}).appendTo("#min-len"),document.getElementById("min-len").ej2_instances[0].value=passwordLength,null!=styleSourcesList&&""!=styleSourcesList)for(i=0;i<styleSourcesList.length;i++)styleSrcChipData[i]=styleSourcesList[i],0!=styleSrcChipData[i].length&&srcChipConversion(styleSrcChipData,"style-src-chip-content","#txt-stylesrc");if(null!=scriptSourcesList&&""!=scriptSourcesList)for(i=0;i<scriptSourcesList.length;i++)scriptSrcChipData[i]=scriptSourcesList[i],0!=scriptSrcChipData[i].length&&srcChipConversion(scriptSrcChipData,"script-src-chip-content","#txt-scriptsrc");if(null!=fontSourcesList&&""!=fontSourcesList)for(i=0;i<fontSourcesList.length;i++)fontSrcChipData[i]=fontSourcesList[i],0!=fontSrcChipData[i].length&&srcChipConversion(fontSrcChipData,"font-src-chip-content","#txt-fontsrc");if(null!=imgSourcesList&&""!=imgSourcesList)for(i=0;i<imgSourcesList.length;i++)imgSrcChipData[i]=imgSourcesList[i],0!=imgSrcChipData[i].length&&srcChipConversion(imgSrcChipData,"img-src-chip-content","#txt-imgsrc");if(null!=connectSourcesList&&""!=connectSourcesList)for(i=0;i<connectSourcesList.length;i++)connectSrcChipData[i]=connectSourcesList[i],0!=connectSrcChipData[i].length&&srcChipConversion(connectSrcChipData,"connect-src-chip-content","#txt-connectsrc");if(null!=frameSourcesList&&""!=frameSourcesList)for(i=0;i<frameSourcesList.length;i++)frameSrcChipData[i]=frameSourcesList[i],0!=frameSrcChipData[i].length&&srcChipConversion(frameSrcChipData,"frame-src-chip-content","#txt-framesrc");if(null!=frameAncestorList&&""!=frameAncestorList)for(i=0;i<frameAncestorList.length;i++)frameAncChipData[i]=frameAncestorList[i],0!=frameAncChipData[i].length&&srcChipConversion(frameAncChipData,"frame-anc-chip-content","#txt-frameanc");diableOrEnableCSPSettingsForm(),$("#lax-cookie").is(":checked")?($(".cookie-notification").html(window.Server.App.LocalizationContent.LaxInformation),$(".cookie-notification").show()):$("#none-cookie").is(":checked")?($(".cookie-notification").html(window.Server.App.LocalizationContent.NoneInformation.format("</br></br>","<b>","</b>")),$(".cookie-notification").show()):$("#strict-cookie").is(":checked")&&($(".cookie-notification").html(window.Server.App.LocalizationContent.StrictInformation),$(".cookie-notification").show()),$("#security-settings-container").is(":visible")&&(location.href.match(/cookie-options/)?($("#cookie-options-tab").tab("show"),$("#csp").hide(),$("#x-frame-options").hide(),$("#password-policy").hide(),$("#update-cookie-settings").show(),$("#update-x-frame-options-settings").hide(),$("#update-csp-settings").hide(),$("#update-password-settings").hide(),"?view=cookie-options"!=window.location.search.toString()&&history.pushState(null,"","?view=cookie-options")):location.href.match(/x-frame-options/)?($("#x-frame-options-tab").tab("show"),$("#cookie-options").hide(),$("#csp").hide(),$("#password-policy").hide(),$("#update-x-frame-options-settings").show(),$("#update-csp-settings").hide(),$("#update-cookie-settings").hide(),$("#update-password-settings").hide(),"?view=x-frame-options"!=window.location.search.toString()&&history.pushState(null,"","?view=x-frame-options")):location.href.match(/csp/)?($("#csp-tab").tab("show"),$("#cookie-options").hide(),$("#x-frame-options").hide(),$("#password-policy").hide(),$("#update-csp-settings").show(),$("#update-x-frame-options-settings").hide(),$("#update-cookie-settings").hide(),$("#update-password-settings").hide(),"?view=csp-settings"!=window.location.search.toString()&&history.pushState(null,"","?view=csp-settings")):($("#password-policy-tab").tab("show"),$("#cookie-options").hide(),$("#csp").hide(),$("#x-frame-options").hide(),$("#update-password-settings").show(),$("#update-x-frame-options-settings").hide(),$("#update-csp-settings").hide(),$("#update-cookie-settings").hide(),"?view=user-account"!=window.location.search.toString()&&history.pushState(null,"","?view=user-account"))),$("a[data-toggle='tab']").on("click",function(t){"x-frame-options-tab"==$(this).attr("id")?($("#x-frame-options").show(),$("#csp").hide(),$("#cookie-options").hide(),$("#password-policy").hide(),$("#update-x-frame-options-settings").show(),$("#update-csp-settings").hide(),$("#update-cookie-settings").hide(),$("#update-password-settings").hide(),"?view=x-frame-options"!=window.location.search.toString()&&history.pushState(null,"","?view=x-frame-options")):"csp-tab"==$(this).attr("id")?($("#csp").show(),$("#cookie-options").hide(),$("#x-frame-options").hide(),$("#password-policy").hide(),$("#update-csp-settings").show(),$("#update-x-frame-options-settings").hide(),$("#update-cookie-settings").hide(),$("#update-password-settings").hide(),"?view=csp-settings"!=window.location.search.toString()&&history.pushState(null,"","?view=csp-settings")):"cookie-options-tab"==$(this).attr("id")?($("#cookie-options").show(),$("#csp").hide(),$("#x-frame-options").hide(),$("#password-policy").hide(),$("#update-cookie-settings").show(),$("#update-x-frame-options-settings").hide(),$("#update-csp-settings").hide(),$("#update-password-settings").hide(),"?view=cookie-options"!=window.location.search.toString()&&history.pushState(null,"","?view=cookie-options")):"password-policy-tab"==$(this).attr("id")&&($("#password-policy").show(),$("#csp").hide(),$("#cookie-options").hide(),$("#x-frame-options").hide(),$("#update-password-settings").show(),$("#update-x-frame-options-settings").hide(),$("#update-csp-settings").hide(),$("#update-cookie-settings").hide(),"?view=user-account"!=window.location.search.toString())&&history.pushState(null,"","?view=user-account")}),new ej.popups.Dialog({content:document.getElementById("samesite-dialog-content"),buttons:[{click:confirmation,buttonModel:{content:window.Server.App.LocalizationContent.OKButton,isPrimary:!0}}],width:"424px",isModal:!0,animationSettings:{effect:"Zoom"},visible:!1}).appendTo("#samesite-dialog")}),$(document).on("click","#update-password-settings",function(){var t={PasswordSettings:{LowerCaseRequired:$("#enable-lower-case").is(":checked"),UpperCaseRequired:$("#enable-upper-case").is(":checked"),NumberRequired:$("#enable-numeric").is(":checked"),SpecialCharactersRequired:$("#enable-special-char").is(":checked"),MinimumLength:$("#min-len").val()},LockUserAccounts:$("#enable-user-restrict").is(":checked")};showWaitingPopup("body"),$.ajax({type:"POST",url:updateSecuritySettingsUrl,data:{securitySettingsData:t},success:function(t){t.result?SuccessAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdated,7e3):WarningAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdateFalied,t.Message,7e3),hideWaitingPopup("body")},error:function(){WarningAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdateFalied,data.Message,7e3),hideWaitingPopup("body")}})}),$(document).on("keyup","#min-len",function(){0==$("#min-len").val()?($("#min-len").closest("div").addClass("has-error"),$("#min-len-validation").html(window.Server.App.LocalizationContent.MinLengthEmpty).css("display","block"),$(".min-len-validation-messages").css("display","block"),$("#update-password-settings").attr("disabled","disabled")):0<$("#min-len").val()&&$("#min-len").val()<6||$("#min-len").val()<0?($("#min-len").closest("div").addClass("has-error"),$("#min-len-validation").html(window.Server.App.LocalizationContent.MinLengthNeeded).css("display","block"),$(".min-len-validation-messages").css("display","block"),$("#update-password-settings").attr("disabled","disabled")):($(".min-len-validation-messages").css("display","none"),$("#update-password-settings").removeAttr("disabled"))}),document.querySelector("html").onclick=check,$(document).on("click","#x-frame",function(){$("#x-frame").is(":checked")?($("#x-frame-checkbox-label").css("padding-bottom","20px"),$(".x-frame-notification").show()):($(".x-frame-notification").hide(),$("#x-frame-checkbox-label").css("padding-bottom","32px"))}),$(document).on("click","#update-x-frame-options-settings",function(){var t=$("#x-frame").is(":checked");$.ajax({type:"POST",url:updateXFrameHeaderSettingsUrl,data:{systemSettingValue:t,key:"IsXFrameOptionsEnabled"},success:function(t){t.status?SuccessAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdated,7e3):WarningAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdateFalied,t.message,7e3)}})}),$(document).on("click","#enable-csp",function(){diableOrEnableCSPSettingsForm()}),$(document).on("focusin",".txt-input-src",function(t){"txt-stylesrc"==t.target.id?$("#style-src-content").addClass("focused"):"txt-scriptsrc"==t.target.id?$("#script-src-content").addClass("focused"):"txt-fontsrc"==t.target.id?$("#font-src-content").addClass("focused"):"txt-imgsrc"==t.target.id?$("#img-src-content").addClass("focused"):"txt-connectsrc"==t.target.id?$("#connect-src-content").addClass("focused"):"txt-framesrc"==t.target.id?$("#frame-src-content").addClass("focused"):"txt-frameanc"==t.target.id&&$("#frame-anc-content").addClass("focused")}),$(".txt-input-src").focusout(function(t){var e,t=t.target.id;"txt-stylesrc"==t?(1<(e=$("#txt-stylesrc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#style-src-content").removeClass("focused")):"txt-scriptsrc"==t?(1<(e=$("#txt-scriptsrc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#script-src-content").removeClass("focused")):"txt-fontsrc"==t?(1<(e=$("#txt-fontsrc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#font-src-content").removeClass("focused")):"txt-imgsrc"==t?(1<(e=$("#txt-imgsrc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#img-src-content").removeClass("focused")):"txt-connectsrc"==t?(1<(e=$("#txt-connectsrc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#connect-src-content").removeClass("focused")):"txt-framesrc"==t?(1<(e=$("#txt-framesrc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#frame-src-content").removeClass("focused")):"txt-frameanc"==t&&(1<(e=$("#txt-frameanc").val()+",").length&&objectConvertAsSrcDirectiveChip(e,t),$("#frame-anc-content").removeClass("focused"))}),$(document).on("keyup",".txt-input-src",function(t){var e=t.target.id;1==$("#"+e).length&&$("#"+e).focus(),t.keyCode!=keyCode.Comma&&t.keyCode!=keyCode.Enter||objectConvertAsSrcDirectiveChip($("#"+e).val(),e)}),$(document).on("keyup","#style-src-content",function(t){var e=document.getElementById("style-src-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-stylesrc").val().length&&applySrcContainer("#txt-stylesrc"):(""==$("#txt-stylesrc").val()&&applySrcContainer("#txt-stylesrc"),e[0].chips=[],setTimeout(function(){$("#style-src-chip-content").html("")},100))}),$(document).on("keyup","#script-src-content",function(t){var e=document.getElementById("script-src-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-scriptsrc").val().length&&applySrcContainer("#txt-scriptsrc"):(""==$("#txt-scriptsrc").val()&&applySrcContainer("#txt-scriptsrc"),e[0].chips=[],setTimeout(function(){$("#script-src-chip-content").html("")},100))}),$(document).on("keyup","#font-src-content",function(t){var e=document.getElementById("font-src-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-fontsrc").val().length&&applySrcContainer("#txt-fontsrc"):(""==$("#txt-fontsrc").val()&&applySrcContainer("#txt-fontsrc"),e[0].chips=[],setTimeout(function(){$("#font-src-chip-content").html("")},100))}),$(document).on("keyup","#img-src-content",function(t){var e=document.getElementById("img-src-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-imgsrc").val().length&&applySrcContainer("#txt-imgsrc"):(""==$("#txt-imgsrc").val()&&applySrcContainer("#txt-imgsrc"),e[0].chips=[],setTimeout(function(){$("#img-src-chip-content").html("")},100))}),$(document).on("keyup","#connect-src-content",function(t){var e=document.getElementById("connect-src-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-connectsrc").val().length&&applySrcContainer("#txt-connectsrc"):(""==$("#txt-connectsrc").val()&&applySrcContainer("#txt-connectsrc"),e[0].chips=[],setTimeout(function(){$("#connect-src-chip-content").html("")},100))}),$(document).on("keyup","#frame-src-content",function(t){var e=document.getElementById("frame-src-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-framesrc").val().length&&applySrcContainer("#txt-framesrc"):(""==$("#txt-framesrc").val()&&applySrcContainer("#txt-framesrc"),e[0].chips=[],setTimeout(function(){$("#frame-src-chip-content").html("")},100))}),$(document).on("keyup","#frame-anc-content",function(t){var e=document.getElementById("frame-anc-chip-content").ej2_instances;null==e||null!=e[0].chips&&0!=e[0].chips?null==e&&0==$("#txt-frameanc").val().length&&applySrcContainer("#txt-frameanc"):(""==$("#txt-frameanc").val()&&applySrcContainer("#txt-frameanc"),e[0].chips=[],setTimeout(function(){$("#frame-anc-chip-content").html("")},100))}),$(document).on("paste","#txt-stylesrc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"style-src-chip-content")&&""!=c&&(styleSrcChipData.push(c),srcChipConversion(styleSrcChipData,"style-src-chip-content","#txt-stylesrc"))}setTimeout(function(){$("#txt-stylesrc").val("")},100)}}),$(document).on("paste","#txt-scriptsrc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"script-src-chip-content")&&""!=c&&(scriptSrcChipData.push(c),srcChipConversion(scriptSrcChipData,"script-src-chip-content","#txt-scriptsrc"))}setTimeout(function(){$("#txt-scriptsrc").val("")},100)}}),$(document).on("paste","#txt-fontsrc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"font-src-chip-content")&&""!=c&&(fontSrcChipData.push(c),srcChipConversion(fontSrcChipData,"font-src-chip-content","#txt-fontsrc"))}setTimeout(function(){$("#txt-fontsrc").val("")},100)}}),$(document).on("paste","#txt-imgsrc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"img-src-chip-content")&&""!=c&&(imgSrcChipData.push(c),srcChipConversion(imgSrcChipData,"img-src-chip-content","#txt-imgsrc"))}setTimeout(function(){$("#txt-imgsrc").val("")},100)}}),$(document).on("paste","#txt-connectsrc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"connect-src-chip-content")&&""!=c&&(connectSrcChipData.push(c),srcChipConversion(connectSrcChipData,"connect-src-chip-content","#txt-connectsrc"))}setTimeout(function(){$("#txt-connectsrc").val("")},100)}}),$(document).on("paste","#txt-framesrc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"frame-src-chip-content")&&""!=c&&(frameSrcChipData.push(c),srcChipConversion(frameSrcChipData,"frame-src-chip-content","#txt-framesrc"))}setTimeout(function(){$("#txt-framesrc").val("")},100)}}),$(document).on("paste","#txt-frameanc",function(t){var e=t.originalEvent.clipboardData.getData("Text").trim().split(/[\s,;\r?\n]+/);if(1<e.length){for(var n=0;n<e.length;n++){var c=e[n];isSrcChipAlreadyExists(c,"frame-anc-chip-content")&&""!=c&&(frameAncChipData.push(c),srcChipConversion(frameAncChipData,"frame-anc-chip-content","#txt-frameanc"))}setTimeout(function(){$("#txt-frameanc").val("")},100)}}),$(document).on("click","#update-csp-settings",function(){var t,e="",n=[],c=[],i=[],s=[],o=[],r=[],a=[];""==$(".style-src-validation").text()&&""==$(".script-src-validation").text()&&""==$(".font-src-validation").text()&&""==$(".img-src-validation").text()&&""==$(".connect-src-validation").text()&&""==$(".frame-src-validation").text()&&""==$(".frame-anc-validation").text()&&(null!=(t=document.getElementById("style-src-chip-content").ej2_instances)&&null==(n=t[0].chips)&&(n=[]),null!=(t=document.getElementById("script-src-chip-content").ej2_instances)&&null==(c=t[0].chips)&&(c=[]),null!=(t=document.getElementById("font-src-chip-content").ej2_instances)&&null==(i=t[0].chips)&&(i=[]),null!=(t=document.getElementById("img-src-chip-content").ej2_instances)&&null==(s=t[0].chips)&&(s=[]),null!=(t=document.getElementById("connect-src-chip-content").ej2_instances)&&null==(o=t[0].chips)&&(o=[]),null!=(t=document.getElementById("frame-src-chip-content").ej2_instances)&&null==(r=t[0].chips)&&(r=[]),null!=(t=document.getElementById("frame-anc-chip-content").ej2_instances)&&null==(a=t[0].chips)&&(a=[]),t={ContentSecurityPolicy:e=$("#enable-csp").is(":checked")?{EnableCSP:$("#enable-csp").is(":checked"),StyleSource:n.toString(),ScriptSource:c.toString(),FontSource:i.toString(),ImageSource:s.toString(),ConnectSource:o.toString(),FrameSource:r.toString(),FrameAncestor:a.toString()}:e},$.ajax({type:"POST",url:updateCSPSettingsUrl,data:{systemSettingsData:JSON.stringify(t)},success:function(t){t.status?SuccessAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdated,7e3):WarningAlert(window.Server.App.LocalizationContent.SecuritySettings,window.Server.App.LocalizationContent.SiteSettingsUpdateFalied,t.message,7e3)}}))}),$(document).on("change","#lax-cookie",function(){$("#lax-cookie").is(":checked")?($(".cookie-notification").html(window.Server.App.LocalizationContent.LaxInformation),$(".cookie-notification").show()):$(".cookie-notification").hide()}),$(document).on("change","#strict-cookie",function(){$("#strict-cookie").is(":checked")?($(".cookie-notification").html(window.Server.App.LocalizationContent.StrictInformation),$(".cookie-notification").show()):$(".cookie-notification").hide()}),$(document).on("change","#none-cookie",function(){$("#none-cookie").is(":checked")?($(".cookie-notification").html(window.Server.App.LocalizationContent.NoneInformation.format("</br></br>","<b>","</b>")),$(".cookie-notification").show()):$(".cookie-notification").hide()}),$(document).on("click","#update-cookie-settings",function(){document.getElementById("samesite-dialog").ej2_instances[0].show()}),$(document).ready(function(){$(document).on("click","#cancel-settings",function(){window.location.href=window.location.href})});