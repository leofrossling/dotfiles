var fillableNoteTypes=["Credit Card","Bank Account","Address","Social Security"];function addUserFriendlyDescription(e){e.decprofilename=lpmdec_acct(e.encname,!0,e,g_shares);var t=lpmdec_acct(e.extra,!0,e,g_shares),a=" • ";switch(e.notetype){case"Credit Card":var r="Ending in %1",i="Expires %2",n=LP.getNoteValue("Number",t).slice(-4),c=new Date(LP.getNoteValue("Expiration Date",t)),s=("0"+(c.getMonth()+1)).slice(-2)+"/"+c.getFullYear().toString().slice(-2);r=0===n.length?"":r,i=isNaN(c)?"":i,a=0===r.length||0===i.length?"":a,e.description=StringUtils.translate(r+a+i,n,s),e.ccType=LPCC.getCCType(LP.getNoteValue("Number",t));break;case"Bank Account":var l=LP.getNoteValue("Account Type",t),o="Ending in %1",g=LP.getNoteValue("Account Number",t).slice(-4);e.description=0===g.length?"":StringUtils.translate(l+a+o,g);break;case"Address":e.description=LP.getNoteValue("Address 1",t);break;case"Social Security":var d="Ending in %1",u=LP.getNoteValue("Number",t).slice(-4);e.description=0===u.length?"":StringUtils.translate(d,u)}return e}
//# sourceMappingURL=sourcemaps/userFriendlyDescriptions.js.map
