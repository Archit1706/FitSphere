# FitSphere

## Table of Contents

-   [Introduction](#introduction)
-   [Problem Statement](#problem-statement)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Demo](#demo)
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
-   

## Demo 


https://github.com/Archit1706/FitSphere/assets/75872913/6bba28bd-1e3b-4657-aa5d-0d5f8db72a2e


https://github.com/Archit1706/FitSphere/assets/75872913/6088d080-63fc-46dc-a0cf-2dc12f8ccfc4


https://github.com/Archit1706/FitSphere/assets/75872913/04d76e6a-a3c4-413a-8c34-7d10a914771e


## Screenshots

- Landing Page Web
![WhatsApp Image 2023-10-29 at 13 22 17_0da5c380](https://github.com/Archit1706/FitSphere/assets/75872913/2a2a11cf-46ff-4e61-b607-2a2d3069583f)

- Landing Page Mobile
![WhatsApp Image 2023-10-29 at 13 22 51_93803826](https://github.com/Archit1706/FitSphere/assets/75872913/6502defe-bc7d-4e98-bb82-bb0ff1fff8f8)

- Hourly Steps Tracked
  ![WhatsApp Image 2023-10-29 at 13 24 29_cb23e3c3](https://github.com/Archit1706/FitSphere/assets/75872913/6ef02735-ad29-4b5f-96c5-2cf60a54ec3c)

- Steps Counter Dashboard - Mobile
![WhatsApp Image 2023-10-29 at 13 25 05_a1df05bb](https://github.com/Archit1706/FitSphere/assets/75872913/255c49b5-4e35-47b1-a2e5-e1d9cd6eb09a)

- Weight Tracker - Web
![WhatsApp Image 2023-10-29 at 13 26 19_e0ec1007](https://github.com/Archit1706/FitSphere/assets/75872913/7aac71df-e849-4f64-9a1a-baef4a3aeafa)

- Weight Tracker - Mobile
![WhatsApp Image 2023-10-29 at 13 25 42_8c921d3c](https://github.com/Archit1706/FitSphere/assets/75872913/5ca1f26a-cb4f-4ec4-ae16-998f83c96ff4)

- Posture Detection
![WhatsApp Image 2023-10-29 at 13 29 10_54ca8bb0](https://github.com/Archit1706/FitSphere/assets/75872913/efa39967-da40-4f40-b9d2-d2c3bca67497)

- Posture Detection - Upload Video
![WhatsApp Image 2023-10-29 at 13 29 29_99a438aa](https://github.com/Archit1706/FitSphere/assets/75872913/06d2949d-ae10-46e7-ad36-7595a36476d4)

- Posture Detection - Upload Video - Mobile
![WhatsApp Image 2023-10-29 at 13 29 50_52afe16d](https://github.com/Archit1706/FitSphere/assets/75872913/399c0f70-6796-424b-9f8a-3a2a63c9c051)

- Seven Day Plan / Recommendation
![WhatsApp Image 2023-10-29 at 13 30 44_c1ae7b94](https://github.com/Archit1706/FitSphere/assets/75872913/a0fb7f61-dcda-4921-b687-0e0a12bd841f)

- Seven Day Plan - Web
![WhatsApp Image 2023-10-29 at 13 31 55_4b2c9624](https://github.com/Archit1706/FitSphere/assets/75872913/00f10769-b34f-4719-9701-265f401b72b0)

- Fitness Plan - Web
![WhatsApp Image 2023-10-29 at 13 54 58_8dbb8a53](https://github.com/Archit1706/FitSphere/assets/75872913/43fdfbab-5944-418a-abeb-8951f137c1fb)

- Fitness Plan
![WhatsApp Image 2023-10-29 at 13 31 11_b226d829](https://github.com/Archit1706/FitSphere/assets/75872913/31441509-c555-4218-9281-2cb9cffbe060)

- Leaderboard
![WhatsApp Image 2023-10-29 at 13 32 15_20599399](https://github.com/Archit1706/FitSphere/assets/75872913/28760b68-3864-4004-8815-9f913025f6c3)

- Events Mobile
![WhatsApp Image 2023-10-29 at 13 56 13_efa563ef](https://github.com/Archit1706/FitSphere/assets/75872913/0fec3a50-4f8c-482b-b31d-d0460ecc5b92)

- Events Web
![WhatsApp Image 2023-10-29 at 13 32 55_9f73bea1](https://github.com/Archit1706/FitSphere/assets/75872913/8d6ee51e-c6df-435a-bda0-8556c803db8c)

- Store
![WhatsApp Image 2023-10-29 at 13 35 08_3482479a](https://github.com/Archit1706/FitSphere/assets/75872913/a9ab90e6-1df5-4630-86e4-a3ab52c262aa)

- Store Product - Mobile
![WhatsApp Image 2023-10-29 at 13 35 41_525151aa](https://github.com/Archit1706/FitSphere/assets/75872913/17413d10-cb06-4c44-b120-a8c717afb5a4)

- Sets and Reps Tracker
![WhatsApp Image 2023-10-29 at 13 37 32_1391ec9e](https://github.com/Archit1706/FitSphere/assets/75872913/7a2b53ac-5408-4a6f-9010-867a7694dc36)

## Contributing

Feel free to contribute to this project by opening issues, submitting pull requests, or providing feedback. We welcome any improvements or new features.

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.
