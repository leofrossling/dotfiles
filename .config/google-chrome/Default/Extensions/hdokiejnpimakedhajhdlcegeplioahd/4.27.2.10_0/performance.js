var timingActions=["start","pause","resume","stop"],eventStore={};function storeAndResolveTimingEvents(e,t){var o=null;if(timingActions.indexOf(t.action)<0)console.log("Unknown timing event");else if(t.timestamp||(t.timestamp=Date.now()),t.allowReporting||(t.allowReporting=!1),null==eventStore[e]&&(eventStore[e]=[]),"stop"===t.action?(eventStore[e].push(t),o=resolveTimingStoreToParams(eventStore[e]),eventStore[e]=[]):"start"==t.action?(eventStore[e]=[],eventStore[e].push(t)):eventStore[e].push(t),o){var n={action:e};for(var r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);LPContentScriptFeatures.health_monitoring&&("object"==typeof LastpassApiHelper?LastpassApiHelper.sendLpImprove("health_monitoring",t.allowReporting,n):sendLpImprove("health_monitoring",n))}}function resolveTimingStoreToParams(e){for(var t={},o=0,n=0,r=0,i=0,s,a=e.length,m=0;m<a;m++){var p=e[m].action,v=e[m].timestamp;switch(void 0!==e[m].numberOfItems&&(s=e[m].numberOfItems),p){case"start":o=v;break;case"pause":r=v;break;case"resume":r>0&&(i+=v-r),r=0;break;case"stop":n=v}}if(0!=o&&0!=n)return t.timeToComplete=n-o-i,void 0!==s&&(t.numberOfItems=s),t}
//# sourceMappingURL=sourcemaps/performance.js.map