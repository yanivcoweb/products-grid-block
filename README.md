# Products Grid Block

A custom WordPress Gutenberg block for displaying products in a responsive grid layout. This plugin allows you to create beautiful product showcases with images, titles, descriptions, and clickable product cards.

## Features

- **Responsive Grid Layout**: CSS class-based responsive design that adapts to all screen sizes
- **Customizable Columns**: Adjust the number of columns (1-5) from the block settings
- **Clickable Product Cards**: Entire cards are clickable links for better user experience
- **Easy Product Management**: Add, remove, and reorder products with intuitive controls
- **Image Upload**: Upload product images directly from the WordPress Media Library
- **Rich Text Editing**: Edit titles and descriptions with WordPress's rich text editor
- **Custom Links**: Each product card links to a custom URL
- **Clean Design**: Professional card-based layout with hover effects and custom styling
- **Alignment Support**: Supports wide and full-width alignment options
- **Empty Start**: Block starts empty, allowing you to build your grid from scratch

## Requirements

- WordPress 5.8 or higher
- PHP 7.4 or higher
- Node.js 14.0 or higher (for development)

## Installation

### From GitHub

1. Clone this repository or download the ZIP file:
   ```bash
   git clone https://github.com/yanivcoweb/products-grid-block.git
   ```

2. Navigate to the plugin directory:
   ```bash
   cd products-grid-block
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the plugin:
   ```bash
   npm run build
   ```

5. Upload the entire `products-grid-block` folder to your WordPress `wp-content/plugins/` directory

6. Activate the plugin through the 'Plugins' menu in WordPress

### For Development

To work on the plugin with live reloading:

```bash
npm start
```

This will watch for changes and automatically rebuild the plugin.

## Usage

1. **Add the Block**:
   - In the WordPress block editor, click the '+' button to add a new block
   - Search for "Products Grid" and select it
   - The block will be inserted empty, ready for you to add products

2. **Add Your First Product**:
   - Click "Add Your First Product" button
   - Or use "Add Product" in the block settings sidebar

3. **Edit Products**:
   - **Upload Image**: Click "Upload Image" to select an image from your Media Library
   - **Edit Title**: Click on the title to edit it
   - **Edit Description**: Click on the description to edit the product details
   - **Set Link**: Use the Link URL and Link Text fields to set where the product card links to

4. **Manage Products**:
   - **Add More Products**: Click "Add Another Product" button below the grid
   - **Remove Product**: Click the trash icon on any product card
   - **Reorder Products**: Use the up/down arrow buttons to change the order

5. **Adjust Grid Settings**:
   - Open the block settings sidebar (right panel)
   - Use the "Columns" slider to adjust the number of columns (1-5)

6. **Alignment**:
   - Use the block toolbar to set alignment (wide or full-width)

## Responsive Design

The grid uses CSS classes for responsive behavior:

- **columns-1**: 1 column on all screen sizes
- **columns-2**: 2 columns on desktop, 1 on mobile (< 600px)
- **columns-3**: 3 columns on desktop, 2 on tablet (< 900px), 1 on mobile (< 600px)
- **columns-4**: 4 columns on desktop, 3 on tablet (< 1200px), 2 on medium (< 900px), 1 on mobile (< 600px)
- **columns-5**: 5 columns on desktop, 3 on tablet (< 1200px), 2 on medium (< 900px), 1 on mobile (< 600px)

## Block Structure

The plugin creates a responsive grid layout with the following structure:

- **Grid Container**: Responsive CSS Grid layout using CSS classes
- **Product Cards**: Clickable cards (entire card is a link) containing:
  - Product image
  - Product title (h3) with custom border styling
  - Product description (paragraph)
  - Link text display with button styling

## Customization

### Styling

The plugin uses CSS classes for easy customization. You can override styles in your theme:

```css
/* Customize card appearance */
.product-card {
    padding: 2rem;
    border-top: 5px solid #your-color;
}

/* Customize title border color */
.product-title {
    border-bottom-color: #your-color;
    color: #your-color;
}

/* Customize grid gap */
.products-grid {
    gap: 20px;
}

/* Customize link button */
.product-link.button__minimal {
    color: #your-color;
}
```

### CSS Variables

The plugin uses CSS custom properties that you can override:

```css
:root {
    --orange: #your-brand-color;
}
```

## Development

### File Structure

```
products-grid-block/
├── build/                  # Compiled files (generated)
├── src/
│   ├── block.json         # Block metadata and attributes
│   ├── index.js           # Block registration
│   ├── edit.js            # Block editor component
│   ├── save.js            # Block save component (frontend)
│   ├── style.scss         # Frontend styles with responsive CSS classes
│   └── editor.scss        # Editor-only styles
├── products-grid-block.php # Main plugin file
├── package.json           # Node.js dependencies
└── README.md             # This file
```

### Build Commands

- `npm start` - Start development mode with live reloading
- `npm run build` - Build production-ready files
- `npm run format` - Format code with Prettier
- `npm run lint:css` - Lint CSS/SCSS files
- `npm run lint:js` - Lint JavaScript files
- `npm run plugin-zip` - Create a distributable ZIP file

### Technical Implementation

- **No inline styles**: Uses CSS classes (columns-1 to columns-5) for responsive design
- **Clickable cards**: Entire product card is wrapped in an `<a>` tag for better UX
- **CSS Grid**: Modern CSS Grid layout with responsive breakpoints
- **WordPress best practices**: Follows WordPress Gutenberg block development standards

## Support

For issues, questions, or contributions, please visit:
https://github.com/yanivcoweb/products-grid-block

## License

This plugin is licensed under the GPL v2 or later.

## Changelog

### 1.0.0
- Initial release
- Responsive grid layout (1-5 columns)
- CSS class-based responsive design (no inline styles)
- Clickable product cards for better user experience
- Image upload support with proper state management
- Rich text editing for titles and descriptions (plain text only)
- Custom links for each product
- Add, remove, and reorder products
- Empty block start state with intuitive add product flow
- Wide and full-width alignment support
- Custom styling with hover effects and borders
- Professional card design with shadows and spacing
