
# Library Management Application

The **Library App** is a web application designed to showcase a collection of books with a responsive layout. It includes a contact form for users to get in touch with the library and displays books in a visually appealing manner, optimized for both mobile and desktop users. This app is built using **Angular** for the frontend, with CSS for styling and a focus on responsive design.

## Version
1.0.0

## Features

- **Book Display**: The application displays books in a grid layout with a responsive design, showing book details such as title, author, and a short description.
- **Responsive Design**: The app adjusts its layout based on the device's screen size. On larger screens, books are shown in a row layout, while on smaller screens (like mobile devices), books are displayed in a column layout.
- **Contact Us Form**: A contact form allows users to submit inquiries or feedback, with fields for name, email, subject, and message.
- **Google Maps Integration**: The library’s location is shown on an embedded Google Map, making it easier for users to find the library.

## Prerequisites

To run the app locally, you need:

- [Node.js](https://nodejs.org/) (LTS version is recommended)
- [Angular CLI](https://angular.io/cli)

## Installation

Follow the steps below to set up the project on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yasithperera/library-management-system.git
   cd library-app

2. **Install Dependencies**: Install all required dependencies by running:
    ```bash
    npm install

3. **Run the Application**: Start the Angular development server:
    ```bash
    ng serve

4. **Access the Application**: Open your browser and navigate to
   http://localhost:4200 to view the app.

## Project Structure
The project consists of the following main components:

- **BookDisplayComponent**: Displays the list of books, with images and details.
- **ContactFormComponent**: Contains the contact form where users can submit inquiries.
- **GoogleMapComponent**: Displays the location of the library using Google Maps iframe.
- **AppHeaderComponent**: Contains the header for the app, with navigation links.

## Main Sections:
- **Book List**: Shows a list of books in a grid layout. In smaller screen sizes, the layout changes to a single column to utilize the full width of the screen.
- **Contact Section**: Includes a form for users to get in touch, and the contact information of the library, including the address, phone, and email.
- **Google Map**: Displays the library’s location for users who wish to visit.

## Responsive Design
The app is fully responsive, meaning it adjusts its layout based on the screen size:

- **Mobile View**: On smaller screens, the book cards are stacked vertically in a single column for easy viewing.
- **Desktop View**: On larger screens, the books are displayed in a row layout, optimizing the space.

## Contact Form
Users can fill out the contact form with the following fields:

- **Name**: The user's full name (required).
- **Email**: The user's email address (required).
- **Subject**: The subject of the inquiry (optional).
- **Message**: A text area where the user can write their message (required).

The form submission triggers an action, which you can integrate with your backend to handle email submissions.

## Technologies Used
- **Angular**: Frontend framework used for building the application.
- **Bootstrap**: For responsive design and pre-styled components.
- **Google Maps API**: For embedding the library’s location map.
- **CSS**: For custom styling and responsive layouts.
- **Firebase**: For database management

## Customizing the App
You can customize the app by updating the following:

- **Books Data**: Update the books list with new books, their authors, and images in the data file or backend if integrated.
- **Google Maps Location**: Update the embedded Google Map iframe with your library's actual address.
- **Contact Information**: Modify the contact details to reflect your library’s contact information.

## Contribution
Feel free to contribute to this project. If you want to add a new feature, fix a bug, or improve the documentation, follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request to merge your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
- **email**: yasithishara@gmail.com
- **mobile / whatsapp**: +94706950532
