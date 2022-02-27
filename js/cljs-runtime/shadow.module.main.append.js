
shadow.cljs.devtools.client.env.module_loaded('main');

try { weddingnext.core.init(); } catch (e) { console.error("An error occurred when calling (weddingnext.core/init)"); throw(e); }