# URL Shortener

A simple and efficient URL shortener service built with Node.js, Express, and MongoDB.

## Features

- **Shorten URLs**: Convert long URLs into compact, shareable links.
- **Redirection**: Seamlessly redirect users from the short URL to the original destination.
- **Analytics**: Track the number of clicks for each shortened URL.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing URL mappings and visit history.
- **Mongoose**: ODM validation and query building.
- **Nano ID**: Unique string ID generator.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running locally on port `27017`.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd url-shortner
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   _(Note: Ensure `package.json` is not ignored if you encounter issues during install)_

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

2. Use the API endpoints below to interact with the service.

## API Endpoints

### 1. Shorten a URL

- **Endpoint**: `POST /url`
- **Body**:
  ```json
  {
    "url": "https://www.example.com/very/long/url"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Url created successfully",
    "result": "http://localhost:3000/url/<shortId>"
  }
  ```

### 2. Redirect to Original URL

- **Endpoint**: `GET /url/:shorturl`
- **Description**: Accessing this route in a browser will redirect you to the original URL.
- **Example**: `http://localhost:3000/url/abc12345`

### 3. Get Analytics

- **Endpoint**: `GET /url/analytics/:shorturl`
- **Response**:
  ```json
  {
    "total clicks": 5
  }
  ```

## Project Structure

- `index.js`: Main entry point, server setup, and database connection.
- `routes/url.js`: Define API routes and logic.
- `modals/url.modal.js`: Mongoose schema for the URL model.
