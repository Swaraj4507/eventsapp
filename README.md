# EventMingle

## Installation Guide

Follow these steps to set up and run the EventMingle project on your local machine:

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)
- Firebase CLI (for deployment and configuration)

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Swaraj4507/eventsapp.git
cd eventsapp
npm install

```
## Create a .env file in the root directory and add your Firebase configuration like this:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id

```

## Start the development server by running:
```
npm start

```
## Crowdsourced Local Events Calendar

EventMingle is a dynamic and user-friendly platform designed to streamline the process of discovering and managing local events. Utilizing React for the frontend and Firebase for the backend, EventMingle offers real-time updates, personalized event suggestions, and a seamless user experience.

---


### 1. PROBLEM ANALYSIS

#### 1.1 Overview of the Project: Why Computerized?

In today’s fast-paced world, managing local events manually is impractical and inefficient. A computerized platform provides real-time updates, instant event discovery, and seamless interactions. Using React and Firebase, EventMingle ensures a dynamic, responsive, and user-friendly interface, enhancing experiences for both event organizers and attendees.

#### 1.2 Identification of Project Scope

The project scope includes the following tasks:
- Designing an intuitive user interface for event submission and discovery.
- Implementing location-based algorithms for personalized event suggestions.
- Integrating Firebase for efficient data storage, authentication, and real-time updates.
- Creating distinct features for user-submitted events and events organized by individuals or groups.

#### 1.3 Objectives

The project aims to:
- Provide a centralized platform for effortless event submission and exploration.
- Enhance user experience with location-based event suggestions.
- Allow event organizers to showcase their events with detailed information.
- Implement a secure and efficient voting system for user-generated events.
- Ensure a seamless, real-time experience without page refreshes.

#### 1.4 Infrastructure

EventMingle utilizes React for a visually appealing and responsive frontend, and Firebase for scalable data storage, authentication, and real-time updates.

---

### 2. SOFTWARE REQUIREMENT ANALYSIS AND PLANNING

#### 2.1 Description of Individual Phases/Modules

##### 2.1.1 User Characteristics

The platform caters to two primary user personas:
- **Event Attendees:** Users looking to explore and engage in local events.
- **Event Organizers:** Users submitting, organizing, and managing event details.

##### 2.1.2 General Characteristics

Key constraints include:
- Integration of robust location services for event discovery.
- Consistent internet connectivity for real-time updates.
- Compatibility across various devices and browsers.

##### 2.1.3 Assumptions

- Users will share location data for precise event recommendations.
- Event organizers will provide accurate and comprehensive event details.

##### 2.1.4 Dependency

The platform relies on Firebase for managing data storage, user authentication, and real-time updates.

---

### 3. FUNCTIONAL REQUIREMENTS AND MODULE DELIVERABLES

#### 3.1 Functional Requirements

- **Input:** Users provide event details such as location, date, category, and specific information.
- **Output:** The platform offers personalized event suggestions, voting lists, and real-time updates without manual page refreshes.

#### 3.2 Identify Individual Module Deliverables

- **Event Submission Module:** Allows event organizers to submit and manage event details, including date, category, and comprehensive information.
- **Event Discovery Module:** Provides personalized event suggestions based on location and user preferences.
- **Voting System Module:** Enables users to validate user-generated events through a voting process, enhancing event credibility.

---
