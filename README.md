# FitSphere

## Table of Contents

-   [Introduction](#introduction)
-   [Problem Statement](#problem-statement)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Screenshots](#screenshots)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

FitSphere is a state-of-the-art pose estimation system that leverages Computer Vision and Machine Learning to enhance the field of sports and fitness. The system offers automated exercise recognition, accurate rep and set counting, progress tracking, exercise recommendations, and a warning system to improve the fitness journey for users.

## Problem Statement

Traditional fitness tracking methods often rely on manual input, which can be imprecise and lead to suboptimal results. FitSphere addresses this issue by automating exercise recognition and counting, tracking progress, offering exercise recommendations, and ensuring safe workouts through a warning system.

## Features

1. **Exercise Recognition:** FitSphere utilizes OpenCV and deep learning to automatically recognize exercises like Bench press, Pushup, Bicep Curl, Lateral Raise, Shoulder Press, and Squat, without manual input.

2. **Rep and Set Counting:** The system accurately counts repetitions and sets using angle thresholds, helping users follow their workout plans precisely.

3. **Progress Tracking:** FitSphere collects and stores user data, including sets, reps, weight lifted, BMI, and heart rate. It offers a user-friendly data analysis dashboard for monitoring progress and identifying areas for improvement.

4. **Exercise Recommendations:** Based on the collected data, the system offers exercise recommendations tailored to users' fitness goals.

5. **Warning System:** FitSphere monitors exercise form and provides immediate alerts if the form deteriorates to a point that may risk injury or hinder the workout's effectiveness.

6. **App Integration:** The system can be integrated into a mobile app, offering real-time feedback and data accessibility across devices, potentially connecting with wearables.

7. **Web and Mobile Responsive:** FitSphere is designed to work seamlessly on both web and mobile platforms.

## Tech Stack

-   Frontend: ReactJS with Tailwind CSS
-   Node.js for the Node backend
-   FastAPI for the FastAPI backend
-   Python with OpenCV for Computer Vision
-   AI/ML features for exercise recognition and recommendation

## Project Structure

The project is organized into three main folders:

-   `frontend`: Contains the ReactJS frontend code.
-   `node-backend`: Contains the Node.js backend code.
-   `fastapi-backend`: Contains the FastAPI backend code.

## Installation

-   Clone the repository
-   Install the required dependencies for the frontend, Node backend, and FastAPI backend.

## Usage

-   Start the frontend and backend servers.
-   Access the FitSphere system through a web browser or mobile app.
-   Follow the on-screen instructions to track your workouts and fitness progress.

## Screenshots

## Contributing

Feel free to contribute to this project by opening issues, submitting pull requests, or providing feedback. We welcome any improvements or new features.

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.
