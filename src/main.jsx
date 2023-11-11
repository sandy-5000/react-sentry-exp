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
			tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
		}),
		new Sentry.Replay(),
	],
	tracesSampleRate: 1.0,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
})


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
)
