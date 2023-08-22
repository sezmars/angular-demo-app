# UserWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

**Task Overview:**

The primary goal of this task is to assess the proficiency of a candidate in frontend development and software design. The task requires the creation of the following application:

- Develop an application for viewing and saving user information.
- Utilize the Angular framework for implementation.
- Fetch data from an API (details provided below).
- Display the current weather based on the user's location.

**Specifications:**

You are expected to build an Angular application that retrieves user data and displays weather information based on the user's location.

The first route should present randomly fetched users in a card view with the following details:

1. User details

- [x] Name
- [x] Gender
- [x] Profile image
- [x] Location
- [x] Email

2. Weather

- [x] Icon (e.g., Sunny, Cloudy, etc.)
- [x] Current temperature
- [x] Highest and lowest temperatures for the current date

Data Sources:

- User data: https://randomuser.me/api/
- Weather data: https://api.open-meteo.com/v1/forecast?latitude=-19.7962&longitude=178.2180&current_weather=true&hourly=temperature_2m (Documentation: https://open-meteo.com/en/docs)

Each user card should feature a save button that stores details in the browser's local storage.

For the second route, create a list displaying saved user information. The visual style of these cards should resemble the first route's cards (without the save button).

**Requirements:**

- The application should be visually appealing and responsive across desktop, tablet, and mobile devices. The design is open to your interpretation.
- Authentication is not required.
- Code should be clean, readable, and ready for production.
- The solution should be fully functional, and a well-designed UI alone is insufficient for completion.

**Deliverables:**

- Provide a link to the source code repository (e.g., GitHub).
- Include a link to the deployed application.

**Bonus:**

- [x] Link the project to a GitHub repository for code review.
- Additional points for implementing the following:
  - Periodic update of the current temperature (every 5 minutes).
  - [x] Display of user location on a map (using ngx-leaflet).
  - [x] Showing user profile images on the map.
  - Displaying hourly weather information.

**Important Note To Dev:**

Time management is crucial. Begin with implementing the core functionality ("happy flow") before attempting bonus features. If you encounter challenges while implementing a specific feature, avoid getting stuck and focus on other achievable tasks.

**Important Note From Dev:**

Such features were not included in the project to save time:
