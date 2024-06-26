# DICE Website

[![Actions Status](https://github.com/dice-group/dice-website/workflows/Build/badge.svg)](https://github.com/dice-group/dice-website/actions)

This is a repo containing DICE research group website.

## Structure

- `/pages` folder contains basic markdown / mdx pages for the website
- `/data` folder contains RDF (Turtle) files with data used to generate pages for the website
- `/images` folder contains images used in the website (will be optimized build-time)
- `/scripts` folder contains scripts and templates that build the website (Gatsby and such)

For more detailed info see the [wiki](https://github.com/dice-group/dice-website/wiki) and the [README in scripts](https://github.com/dice-group/dice-website/tree/develop/scripts#readme).

Certainly! Here's the README file formatted for GitHub:

---

# Chatbot Integration with Flask Server

## Overview

This repository demonstrates how to integrate a chatbot interface with a Flask server. The chatbot interface is part of the dice-website React application, where user inputs are sent to a Flask server, processed, and the responses are displayed back in the chatbot panel.

## Prerequisites

- **Node.js Version:** 18.20.3 LTS
- **Python Packages:** Flask, Flask-CORS

## Setup Instructions

### 1. Clone the Repository

Clone the dice-website repository:

```bash
$ git clone https://github.com/dice-group/dice-website.git
$ cd dice-website
```

### 2. Install Dependencies

Install Node.js dependencies for the dice-website:

```bash
$ npm install
```

Install Flask and Flask-CORS for the server:

```bash
$ pip install flask flask-cors
```

### 3. Start the Flask Server

Run the Flask server to handle chatbot interactions:

```bash
$ python app.py
```

### 4. Start the dice-website React App

Start the React application for the chatbot interface:

```bash
$ npm start
```

The dice-website will be accessible at [http://localhost:8000/](http://localhost:8000/).

### 5. Access GraphiQL (Optional)

Explore the GraphQL schema and data using GraphiQL:

```
http://localhost:8000/___graphql
```

## Usage

1. Open [http://localhost:8000/](http://localhost:8000/) in your browser.
2. Interact with the chatbot panel on the website.
3. Input messages will be sent to the Flask server (`http://localhost:5000/reverse`).
4. The server will process the input (reverse it) and send back the result to display in the chatbot panel.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Copy and paste this README content into your GitHub repository's README.md file. Adjust paths, URLs, and formatting as needed based on your specific setup and preferences.

