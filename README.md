Gangsta Bot
==

A Hubot adapter for Google Hangouts.

How it will work
--

The initial idea was to launch Google Plus in a headless browser like Phantom. However, it seems that Google has intentionally made it difficult to load its Login and Google+ pages with Phantom.

To circumvent this we need a headful browser.

To interact with Google Hangouts from a full browser, we can create a Chrome extension that acts as a proxy between Hangouts and a Hubot adapter.

The chrome extension will use the DOM to create/respond to these these messages:

- send: hubot called the chrome extension, write it to the input box and click send
- reply: the chat has a new message in it, send it to hubot
- topic: update the name of the hangout

On the Hubot end, an adapter will be set to listen to incoming messages from the extension and correctly call the reply/send/topic functions.

Maybeh
--

Hubot is essentially just JavaScript code to read strings and create another string in response. Is it possible to package Hubot into the actual chrome extension? Specifically the message parsing/plugin parts.

Stuff
--

Client

- Figure out how to read and manipulate the chat through the DOM or an API
- Should we send all messages to the server or only filtered ones?

Server

- Figure out how to have a hubot adapter constantly listening to a certain port
