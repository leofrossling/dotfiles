var CustomNoteTemplateDialog=function(t){Dialog.call(this,t,{closeButtonEnabled:!0,maximizeButtonEnabled:!0,buttonAlign:this.RIGHT_ALIGN})};CustomNoteTemplateDialog.prototype=Object.create(Dialog.prototype),CustomNoteTemplateDialog.prototype.constructor=CustomNoteTemplateDialog,function(){var t=function(t,e){DialogInput.Input.call(this,void 0,e),this.fields=[],this.hasNotes=!1,this.container=t};(t.prototype=Object.create(DialogInput.Input.prototype)).constructor=t,t.prototype.validate=function(){var t=!0;if(this.fields.length>0){var e={},i,n,a;for(i=0,n=this.fields.length;i<n;++i)a=this.fields[i],e.hasOwnProperty(a.text)?e[a.text]=e[a.text]+1:e[a.text]=1;for(i=0,n=this.fields.length;i<n;++i)""===(a=this.fields[i]).text?(a.input.addError(Strings.translateString("%1 is required.",Strings.translateString("Field Title"))),t=!1):e[a.text]>1&&(a.input.addError(Strings.translateString("Field Title: %1 is used more than once.",a.text)),t=!1)}else dialogs.alert.open({title:Strings.Vault.ERROR,text:Strings.translateString("Template must contain at least one field.")}),t=!1;return t},t.prototype.clear=function(){DialogInput.ErrorDisplayInput.prototype.clear.apply(this,arguments);for(var t=0,e=this.fields.length;t<e;++t)this.fields[t].input.clear();this.fields=[],this.hasNotes=!1,this.build()},t.prototype.hasError=function(){for(var t=0,e=this.fields.length;t<e;++t)if(this.fields[t].input.hasError())return!0;return!1},t.prototype.clearErrors=function(){for(var t=0,e=this.fields.length;t<e;++t)this.fields[t].input.clearErrors()},t.prototype.postValidate=function(){for(var t=0,e=this.fields.length;t<e;++t)this.fields[t].input.postValidate()},t.prototype.getValue=function(){for(var t=[],e=0,i=this.fields.length;e<i;++e){var n=this.fields[e];t.push({text:n.text,type:n.type})}return t},t.prototype.addField=function(t){if("textarea"===t&&this.hasNotes)dialogs.alert.open({title:Strings.Vault.ERROR,text:Strings.translateString("You may only have one Notes field in a template.")});else{var e={text:"textarea"===t?"Notes":"",type:t,input:new DialogInput.Input(null,this.dialog)};this.hasNotes?this.fields.splice(this.fields.length-1,0,e):this.fields.push(e),"textarea"===t&&(this.hasNotes=!0),this.build()}},t.prototype.removeField=function(t){"textarea"===this.fields[t].type&&(this.hasNotes=!1),this.fields.splice(t,1),this.build()},t.prototype.dropField=function(t,e){for(var i=this.fields[t],n=[],a=0,o=this.fields.length;a<o;++a)e===a&&n.push(i),t!==a&&n.push(this.fields[a]);this.fields=n,this.build()};var e=function(t){var e;switch(t){case"text":e=new DialogInput.TextInput;break;case"password":e=new DialogInput.PasswordInput;break;case"textarea":e=new DialogInput.TextArea;break;case"monthDayYear":e=new DialogInput.AlphaDateInput;break;case"monthYear":e=new DialogInput.AlphaDateInput({includeDay:!1});break;case"textWithCopy":e=new DialogInput.TextInput({inputButton:Strings.translateString("Copy")})}var i=e.buildInputElement();return $(i).find("input,button").addBack("input").prop("disabled",!0),i},i,n,a=function(t,e,a,o){a.find(".customFieldName").bind("change",function(){e&&(e.text=this.value)}),a.find(".customFieldName").bind("focus",function(){a.prop("draggable",!1)}),a.find(".customFieldName").bind("blur",function(){a.prop("draggable",!0)}),a.find(".removeFieldButton").bind("click",function(){t.removeField(o)}),a.bind("dragstart",function(t){i=o,n=e,"function"==typeof t.originalEvent.dataTransfer.setData&&t.originalEvent.dataTransfer.setData("text/plain","")}),a.bind("dragover",function(t){i!==o&&t.preventDefault()}),a.bind("dragenter",function(t){i!==o&&$(t.currentTarget).toggleClass("dragTarget")}),a.bind("dragleave",function(t){i!==o&&$(t.currentTarget).toggleClass("dragTarget")}),a.bind("drop",function(e){e.preventDefault(),t.dropField(i,o)})};t.prototype.build=function(){this.container.empty();for(var t=0;this.fields&&t<this.fields.length;t++){var i=this.fields[t],n=$("#fieldTemplate").clone();i.input.setElement(n.find(".customFieldName")),"textarea"===i.type&&(n.attr("draggable",!1),n.find(".dialogInput").prop("disabled",!0)),n.find(".fieldTemplate").prepend(e(i.type)),a(this,this.fields[t],n,t),n.attr("id",""),n.attr("fieldType",i.type),n.attr("fieldName",i.text),$($(".customFieldName",n)[0]).val(i.text),this.container.append(n)}this.dialog.performValidate({data:this.dialog.getData(),errorsOnly:!0})},CustomNoteTemplateDialog.prototype.open=function(t){Dialog.prototype.open.call(this,$.extend(t,{title:t&&t.vaultItem?Strings.translateString("Edit Custom Template"):Strings.translateString("New Custom Template")}))},CustomNoteTemplateDialog.prototype.initialize=function(e){var i,n;Dialog.prototype.initialize.apply(this,arguments),this.inputFields.fields=new t(e.find(".fieldsContainer"),this),i=this,n=$("#actionOptionMenu"),i.hideDropDown=function(){n.hide()},$("#addTextButton").bind("click",function(){i.inputFields.fields.addField("text")}),$("#addNotesButton").bind("click",function(){i.inputFields.fields.addField("textarea")}),$("#addTextWithCopyButton").bind("click",function(){i.inputFields.fields.addField("textWithCopy")}),$("#addMonthDayYearButton").bind("click",function(){i.inputFields.fields.addField("monthDayYear")}),$("#addMonthYearButton").bind("click",function(){i.inputFields.fields.addField("monthYear")}),$("#addPasswordButton").bind("click",function(){i.inputFields.fields.addField("password")}),$("#actionOption, #actionOptionMenu").bind("click",function(t){n.toggle(),t.preventDefault(),t.stopPropagation()}),e.bind("click",function(){i.hideDropDown()})},CustomNoteTemplateDialog.prototype.close=function(){return this.hideDropDown&&this.hideDropDown(),Dialog.prototype.close.apply(this,arguments)},CustomNoteTemplateDialog.prototype.validate=function(t){var e=Dialog.prototype.validate.apply(this,arguments);""===t.title&&(this.inputFields.title.addError(Strings.translateString("%1 is required.",Strings.translateString("Name"))),e=!1);for(var i=LPProxy.getCustomNoteTemplates(),n=0,a=i.length;n<a;++n)if(t.title===i[n].title){this.inputFields.title.addError(Strings.translateString("%1 is already used.",t.title)),e=!1;break}return e},CustomNoteTemplateDialog.prototype.handleSubmit=function(t){LPRequest.makeRequest(LPProxy.saveCustomNoteTemplate,{params:t,success:function(t){Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).publish(t)}})}}();
//# sourceMappingURL=sourcemaps/customNoteTemplateDialog.js.map
