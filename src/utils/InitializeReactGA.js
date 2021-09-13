function InitializeReactGA(ReactGA) {
	if (!window.GA_INITIALIZED) {
		ReactGA.initialize("UA-207295183-1");
		window.GA_INITIALIZED = true;
	}
}

export default InitializeReactGA;