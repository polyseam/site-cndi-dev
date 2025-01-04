export default function SegmentSnippet() {
  const __html = `
  !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="MS1j3f3cwJSgjFxigYY2bTQ6LtPjypXG";;analytics.SNIPPET_VERSION="5.2.0";
  analytics.load("MS1j3f3cwJSgjFxigYY2bTQ6LtPjypXG");
  analytics.page();
  }}();

// Middleware to add Mixpanel's session recording properties to Segment events
analytics.addSourceMiddleware(({ payload, next, integrations }) => {
	if (payload.obj.type === 'track' || payload.obj.type === 'page') {
		if (window.mixpanel) {
			const segmentDeviceId = payload.obj.anonymousId;
			// Simplified ID Merge
			mixpanel.register({ $device_id: segmentDeviceId, distinct_id : "$device:"+segmentDeviceId }); 
			// -------------------------------------------	
			const sessionReplayProperties = mixpanel.get_session_recording_properties();
			payload.obj.properties = {
				...payload.obj.properties,
				...sessionReplayProperties
			};
		}
	}
	if (payload.obj.type === 'identify') {
		if (window.mixpanel) {
			const userId = payload.obj.userId;
			mixpanel.identify(userId);
		}
	}
	next(payload);
});
  `;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html }} />
    </>
  );
}
