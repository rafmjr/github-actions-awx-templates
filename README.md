# GitHub Actions for AWX Templates
This repository showcases an implementation of GitHub actions to manage QA environments via AWX templates.

The creation of an environment is performed by adding a specific label to ones PR, and it gets updated 
whenever the PR is synchronize (a commit was pushed, for example). Finally, the environment is destroyed
whenever the PR is closed or merged.

# Getting Started

In order to test these actions, you'll first need to fork this repository and configure the following secrets:
- **AWX_DOMAIN**: your own AWX domain.
- **AWX_USER**: the username for any user with the right permissions to execute your templates.
- **AWX_PASSWORD**: the password for your user.

If you do not own an AWX domain, you can still test these actions by exposing an http server that will receive
all the request coming from your runners, respond with a 200 HTTP status code and log them for debugging purposes.

These project provides an Express JS server for your convenience. If you're running this project locally, you'll 
also need to expose it to public traffic in a safe manner, so the GitHub runners can communicate with your machine.

We have used ngrok to take care of all the heavy-lifting for us: https://ngrok.com.

Here is one way of doing it:
- [⚙️] First install this project's dependencies by running `npm install`.
- [💻] Then you can start an instance of the Express JS server: `node index.js`.
- [☁️] Finally, expose your server through ngrok: `ngrok http 8000`.
- [🥳] Proceed to test your GitHub Actions.
