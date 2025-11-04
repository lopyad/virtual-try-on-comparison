# Virtual Try-On APIs

This project implements Virtual Try-On using VertexAI services, allowing requests to be sent to various models such as `gemini-flash-image` and `google-virtual-try-on-preview` for comparison.

## Getting Started

Before starting the project, you need a Google Cloud project.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd virtual-try-on
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Google Cloud Setup:**
    *   Ensure you have a Google Cloud project.
    *   Log in to gcloud and obtain an access token. You might need to run `gcloud auth application-default login` and `gcloud auth print-access-token` to get the token.

4.  **Environment Variables:**
    *   Create a `.env` file in the project root.
    *   Add your Google Cloud project ID and access token to the `.env` file:
        ```
        GOOGLE_CLOUD_PROJECT_ID=your-project-id
        GOOGLE_ACCESS_TOKEN=your-access-token
        ```

5.  **Run the application:**
    ```bash
    npm start
    ```
    You can then access a simple web interface in your browser.