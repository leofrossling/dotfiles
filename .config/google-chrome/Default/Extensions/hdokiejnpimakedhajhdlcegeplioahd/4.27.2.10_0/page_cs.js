var MAX_META=50;function LP_getLPMeta(t){if(t||(t=LP_derive_doc()),!t)return null;for(var e=null,l=!1,a="",r="",n=t.getElementsByTagName("meta"),i=0;i<n.length&&i<MAX_META;i++)if(e=n[i]){var u=e.getAttribute("name");if(u&&"LASTPASS"==u.toUpperCase()){var o=e.getAttribute("data-lpignore");void 0!==o&&null!==o&&(l=o),void 0!==(o=e.getAttribute("data-lpfunction"))&&null!==o&&(a=o),void 0!==(o=e.getAttribute("data-lpflavor"))&&null!==o&&(r=o)}}return{skiplp:l,lpfunction:a,lpflavor:r}}
//# sourceMappingURL=sourcemaps/page_cs.js.map