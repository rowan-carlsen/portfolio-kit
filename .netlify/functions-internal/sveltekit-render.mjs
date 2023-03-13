import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fed/bank.png","fed/bonds.svg","fed/cash.svg","fed/stop-sign.svg","global.css","jump/ground-sky.png","jump/hills.png","jump/jumping.png","jump/mountains.png","jump/standing.png","jump/step1.png","jump/step2.png","jump/trees.png","python/skulpt-stdlib.js","python/skulpt.min.js","RowanCarlsenResume.html","Rowan_Carlsen_Resume.pdf","sample-3d-objects.html","sample-collision.html","sample-diligence.html","sample-fed-tools.html","sample-python.html","sample-tracing.html","scripts/iframeResizer.contentWindow.min.js","tracing/bear.jpeg","tracing/chair.jpeg","tracing/confident-girl.jpeg","tracing/crocodile.jpeg","tracing/flamingo.jpeg","tracing/fountain.jpeg","tracing/rhino.jpeg","tracing/skull.jpeg","tracing/vintage-baseball.jpg","tracing/vw-beetle.jpeg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".js":"application/javascript",".html":"text/html",".pdf":"application/pdf",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-e4febf9a.js","imports":["_app/immutable/start-e4febf9a.js","_app/immutable/chunks/index-ec110795.js","_app/immutable/chunks/singletons-52d8fae3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/methods-sort",
				pattern: /^\/methods-sort\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
