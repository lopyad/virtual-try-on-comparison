# Virtual Try-On API Comparison

This project is a web application that provides a user interface to compare the results of two different AI models for virtual try-on: **Google VTO** and **Gemini Flash Image**.

Users can upload an image of a person and an image of a clothing item. The application then allows them to send requests to either or both of the AI model backends and displays the generated try-on images.

## Key Features

- **Image Upload:** Upload separate images for the person and the product.
- **Live Preview:** Shows a preview of the uploaded images.
- **Flexible API Selection:** Choose to use Google VTO, Gemini Flash Image, or both simultaneously using checkboxes.
- **Parallel Requests:** When both models are selected, API calls are made in parallel to reduce waiting time.
- **Side-by-Side & Vertical Comparison:** The UI is structured to show input selections on the left and generated results vertically on the right for easy comparison.

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** Node.js, Express, TypeScript

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A configured backend environment to handle the API requests.

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/lopyad/google-virtual-try-on
   cd google-virtual-try-on
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**

   If the backend requires environment variables (e.g., for API keys or project IDs), create a `.env` file in the root of the project.

   ```
   # .env (Example)
   GOOGLE_PROJECT_ID=your-gcp-project-id
   GOOGLE_ACCESS_TOKEN=your-google-access-token
   ```

## Running the Project

To start the development server, run:

```sh
npm start
```

This will launch the server. You can then open `public/index.html` in your browser or navigate to the appropriate URL (e.g., `http://localhost:3000`) to use the application.

## API Endpoints

The frontend communicates with the following backend endpoints:

- `POST /api/google-vto`: Sends the person and product images to the Google VTO service.
- `POST /api/gemini-flash-image`: Sends the person and product images to the Gemini Flash Image service.

**Request Body (for both endpoints):**
```json
{
  "encodedPersonImage": "<base64_string>",
  "encodedProductImage": "<base64_string>"
}
```

**Success Response (for both endpoints):**
```json
{
  "success": true,
  "encodedImage": "<base64_string>"
}
```