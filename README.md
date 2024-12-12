# Vue 3 + TypeScript + Vite
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


# Product Widgets
This project is a simple Vue 3 app built with TypeScript, where users can view and manage product widgets. Users can customize widget settings, including the color, active state, and whether the widget is linked to a public profile.

### Features
Display Product Widgets: Displays a list of product widgets.
Customize Widget Settings: Users can change widget settings, including:
Widget Color: Choose a color for the widget.
Active State: Toggle the widget's active state (only one widget can be active at a time).
Linked to Public Profile: Toggle the linked state of the widget.
Responsive Design: The layout adjusts to different screen sizes (mobile-first design).
Client-Side State Management: Vuex is used for managing the application state.

# Screenshots
### Desktop
![Desktop](assets/screenshots/Desktop.png)

### Tablet
![Tablet](assets/screenshots/Tablet.png)

### Mobile
![Mobile](assets/screenshots/Mobile.png)

## Installation
To get started with this project, follow these steps:

1. Clone the repository
```
git clone git@github.com:deliapater/widgets.git
```
2. Install dependencies
Install all the required dependencies using npm:
```
npm install
```
3. Run the application
Once the dependencies are installed, you can run the application locally using:
```
npm run dev
```
The app will be available at http://localhost:5173.

## Features Implemented

### Widget Display
The product widgets are displayed in a list, with each widget showing its properties: type, amount, action, and color.
Widgets have interactive features like toggling their active state, changing their color, and linking them to a public profile.

### Widget Customization
Users can interact with each widget's settings:
* Active State: Only one widget can have its active state set to true. The active state can be toggled using a switch.
* Color: Users can change the color of the widget by selecting from a set of predefined colors.
* Linked State: A checkbox is used to toggle whether the widget is linked to the public profile.

### State Management with Vuex
Vuex is used for managing the state of the widgets:
The state stores the widget data.
Mutations and actions are used to modify the state (e.g., setWidgets, toggleLinked, changeColor, etc.).

### Responsive Design
The layout is designed to be responsive and adaptable across various screen sizes. On smaller screens, elements are stacked vertically for optimal viewing and interaction. On larger screens, the layout transitions to a horizontal arrangement to utilize the available space effectively. The title dynamically adjusts its alignment—centered on smaller screens and left-aligned on larger ones—for a visually balanced experience.

### Technologies Used
- TypeScript: Used for type safety and enhancing development efficiency with strong typing.  
- Vue 3: The frontend framework for building the application.  
- Vuex: Used for state management.  
- Tailwind CSS: A utility-first CSS framework for rapid UI development.  
- MaterialUi: Used for some UI elements, such as switches and checkboxes.  
- Storybook: For building and testing UI components in isolation.  

### Storybook (UI Component Testing)
The app uses Storybook for component development and visual testing. To view and interact with the components in isolation, run:

```
npm run storybook
```
This will start Storybook on http://localhost:6006.

Tests
The project includes visual tests for components in Storybook.


