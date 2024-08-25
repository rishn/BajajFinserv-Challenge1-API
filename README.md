# Bajaj Finserv Health Challenge - Backend

## Overview

This is the backend API for the Bajaj Finserv Health Challenge. The API is built with Express and provides endpoints for processing JSON data and returning the results.

## Features

- **POST /bfhl**: Accepts JSON data, processes it, and returns filtered results.
- **GET /bfhl**: Returns a hardcoded operation code.

## Deployment

The site is deployed on render.

## API Endpoints

- **POST** `/bfhl`: 
  - **Request Body**: 
    ```json
    {
      "data": ["A", "C", "z"]
    }
    ```
  - **Response**: 
    ```json
    {
      "is_success": true,
      "user_id": "john_doe_17091999",
      "email": "john@xyz.com",
      "roll_number": "ABCD123",
      "numbers": [],
      "alphabets": ["A", "C", "z"],
      "highest_lowercase_alphabet": ["z"]
    }
    ```

- **GET** `/bfhl`: 
  - **Response**: 
    ```json
    {
      "operation_code": 1
    }
    ```
