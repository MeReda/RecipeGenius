# RecipeGenius

RecipeGenius is a web application built with React, Vite, and TypeScript that leverages the Hugging Face AI to help users decide what to cook based on the ingredients they have on hand. It generates detailed recipes with step-by-step instructions, making meal planning easy and inspiring.

## Features

- **Ingredient-Based Recipe Suggestions**: Input the ingredients you have, and RecipeGenius will suggest creative recipes using Hugging Face's AI models.
- **Detailed Instructions**: Each recipe comes with clear, step-by-step cooking instructions tailored to your ingredients.
- **Fast Development with Vite**: Enjoy a modern, fast development experience with Vite's optimized build system.
- **Type-Safe Codebase**: Built with TypeScript for robust, maintainable, and type-safe code.
- **Responsive Design**: A user-friendly interface that works seamlessly across devices.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **AI Integration**: Hugging Face API for recipe generation
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- A Hugging Face API key (sign up at [Hugging Face](https://huggingface.co/) to get one)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MeReda/RecipeGenius.git
   cd RecipeGenius
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Hugging Face API key:
   ```
   VITE_HF_ACCESS_TOKEN=your-hugging-face-api-key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app.

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview the production build**:
   ```bash
   npm run preview
   ```


## Contributing

We welcome contributions to RecipeGenius! To contribute:


## Contact

For questions or feedback, feel free to open an issue or reach out via discussions.

Happy cooking with RecipeGenius! 🍳
