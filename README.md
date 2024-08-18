# name-char-counter
A simple full-stack name character counter application built with Spring Boot (Java) for the back-end and Angular for the front-end. The application asks the user for their name and returns a greeting along with the character count of the name.

## Features

- Collects a user's name through the Angular front-end.
- Sends the name to the Spring Boot back-end via an HTTP request.
- Returns a greeting message with the number of characters in the user's name.

## Prerequisites

Before running the application, make sure you have the following installed:

- Java Development Kit (JDK) 17 or higher
- Node.js (v16.x or v18.x recommended)
- Angular CLI
- Maven (optional)

## Cross-Origin Resource Sharing (CORS)

If you encounter any CORS issues when running the front-end and back-end locally, ensure that the Spring Boot back-end is configured to allow requests from http://localhost:4200. This can be done by adding @CrossOrigin(origins = "http://localhost:4200") to the NameController or by configuring CORS globally in a configuration class.
