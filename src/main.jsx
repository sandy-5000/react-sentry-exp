import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import * as Sentry from "@sentry/react"


Sentry.init({
	dsn: "https://4d5669fca5fee68e08c407ad1f0c0600@o4506206215733248.ingest.sentry.io/4506206221565952",
	integrations: [
		new Sentry.BrowserTracing({
			// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
			tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
		}),
		new Sentry.Replay(),
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of the transactions
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
)
