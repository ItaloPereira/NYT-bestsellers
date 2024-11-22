
# New York Times Bestsellers App

This project is a Proof of Concept (POC) utilizing the [New York Times Books API](https://developer.nytimes.com/docs/books-product/1/overview) to showcase current and historical bestsellers. The idea is to display all bestseller books over time, filtered by category or date, allowing users to explore specific themes or historical lists. Users can also share their current view via social media.

The application is fully responsive and designed to work seamlessly across browsers, devices, and screen sizes.

---

## Features

- **Bestseller Listings**:
  - Explore current and historical bestseller books by category and date.
  - Shareable URLs with applied filters for sharing specific views.
  
- **Performance and Data Management**:
  - Implemented caching and persistence using `@tanstack/react-query`, `@tanstack/query-sync-storage-persister`, and `@tanstack/react-query-persist-client` to minimize API requests and improve performance.

- **Enhanced User Experience**:
  - Dynamic meta tags for SEO using `react-helmet-async`.
  - Styled with Material UI for consistent design, better accessibility, and responsiveness.
  - Utilizes React Router DOM for client-side routing.

- **Thematic Design**:
  - The color palette and fonts are inspired by the New York Times branding to provide a familiar and cohesive design.

---

## Technologies Used

- **Frameworks & Libraries**:
  - React + TypeScript + SWC
  - Material UI (MUI) for accessible and rapid component development.
  - React Router DOM for client-side routing.
  - `react-helmet-async` for managing dynamic meta tags.

- **Data Management**:
  - `@tanstack/react-query` for efficient state and API request management.
  - `@tanstack/query-sync-storage-persister` and `@tanstack/react-query-persist-client` for persistent caching of data.

- **Deployment**:
  - Hosted on [Vercel](https://vercel.com/).
  - Live application: [nyt-bestsellers-ruby.vercel.app](https://nyt-bestsellers-ruby.vercel.app/)

---

## Running Locally

To run this project locally, follow these steps:

### Prerequisites
- Node.js version: `v22.11.0`
- Package manager: npm or yarn

### Setup Environment Variables
Before starting the project, create a `.env` file in the root of the project and add the following variables:

```env
VITE_API_KEY=o56LFxogG3QUgJNt31OCR4jmYH6qVepY
VITE_BASE_URL=https://api.nytimes.com/svc/books/v3
```

These environment variables are used to configure the API key and base URL for the New York Times Books API. Few free to create your own https://developer.nytimes.com/docs/books-product/1/overview

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ItaloPereira/NYT-bestsellers.git
   cd NYT-bestsellers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Additional Scripts
- **Build the project**: 
  ```bash
  npm run build
  ```
- **Lint the code**:
  ```bash
  npm run lint
  ```
- **Preview production build**:
  ```bash
  npm run preview
  ```

---

## Areas for Improvement

If this POC is validated, the following improvements can be made:

1. **Accessibility**:
   - Enhance keyboard and screen reader support to address minor issues.
   
2. **Typography**:
   - Improve font hierarchy and sizes to elevate the user experience and design consistency.

3. **Advanced Components**:
   - **Sidebar**: Display and store the list of categories for easy access.
   - **Reviews Page**: Show book reviews for titles with available reviews.
   - **Historical Ranking**: Display a book's ranking history over time.
   - **List Separation**: Differentiate weekly and monthly updated lists.
   - **Intuitive Date Filter**: Improve date filtering with a better UI/UX based on API limitations.

4. **Backend Integration**:
   - Create a dedicated backend for better data storage and to bypass API rate limits.

5. **Testing**:
   - Add unit and end-to-end (E2E) tests to ensure code quality and reliability.

---

## Known Limitations

- The New York Times API has strict rate limits. While caching significantly reduces API usage, making many requests in a short period may result in temporary blocks (60 seconds).

---

Thank you for exploring this POC! Feedback and contributions are welcome.
