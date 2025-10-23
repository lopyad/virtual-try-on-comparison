# Google Virtual Try-On Example

This is a sample project demonstrating how to interact with the Google Virtual Try-On API using Node.js, Express, and TypeScript.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)

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

   Create a `.env` file in the root of the project and add the required variables. The project uses the `dotenv` library to load these variables.

   ```
   # .env
   GOOGLE_PROJECT_ID=your-gcp-project-id
   GOOGLE_ACCESS_TOKEN=your-gcp-access-token
   ```

   **To get your `GOOGLE_ACCESS_TOKEN`:**

   a. Make sure you have installed the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) and authenticated:
      ```sh
      gcloud auth login
      ```

   b. Print your application-default access token to the console:
      ```sh
      gcloud auth print-access-token
      ```

   c. Copy the output from the command above and paste it as the value for `GOOGLE_ACCESS_TOKEN` in your `.env` file.
   
## Running the Project

To start the application, simply run:

```sh
npm start
```

The server will be running and listening for requests.
