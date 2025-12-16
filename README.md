# Products Grid Block

A custom WordPress Gutenberg block for displaying products in a responsive grid layout. This plugin allows you to create beautiful product showcases with images, titles, descriptions, and call-to-action links.

## Features

- **Responsive Grid Layout**: Automatically adapts to different screen sizes (4 columns on desktop, 3 on tablet, 2 on small tablets, 1 on mobile)
- **Customizable Columns**: Adjust the number of columns (1-4) from the block settings
- **Easy Product Management**: Add, remove, and reorder products with intuitive controls
- **Image Upload**: Upload product images directly from the WordPress Media Library
- **Rich Text Editing**: Edit titles and descriptions with WordPress's rich text editor
- **Custom Links**: Add custom URLs and link text for each product
- **Clean Design**: Professional card-based layout with hover effects
- **Alignment Support**: Supports wide and full-width alignment options

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
   - The block will be inserted with 4 default product cards

2. **Edit Products**:
   - Click on any product card to edit it
   - **Upload Image**: Click "Upload Image" to select an image from your Media Library
   - **Edit Title**: Click on the title to edit it
   - **Edit Description**: Click on the description to edit the product details
   - **Set Link**: Use the Link URL and Link Text fields in the sidebar to set the product's call-to-action link

3. **Manage Products**:
   - **Add Product**: Click "Add Product" in the block settings sidebar
   - **Remove Product**: Click the trash icon on any product card
   - **Reorder Products**: Use the up/down arrow buttons to change the order

4. **Adjust Grid Settings**:
   - Open the block settings sidebar (right panel)
   - Use the "Columns" slider to adjust the number of columns (1-4)

5. **Alignment**:
   - Use the block toolbar to set alignment (wide or full-width)

## Block Structure

The plugin creates a responsive grid layout with the following structure:

- **Grid Container**: Responsive CSS Grid layout
- **Product Cards**: Individual cards containing:
  - Product image
  - Product title (h3)
  - Product description (paragraph)
  - "Learn more" link with arrow

## Customization

### Styling

You can customize the appearance by adding CSS to your theme:

```css
/* Customize card background */
.product-card {
    background: #f9f9f9;
}

/* Customize title color */
.product-title {
    color: #333;
}

/* Customize link color */
.product-link {
    color: #0066cc;
}
```

### Modifying Default Products

Edit `src/block.json` to change the default products that appear when the block is first added.

## Development

### File Structure

```
products-grid-block/
├── build/                  # Compiled files (generated)
├── src/
│   ├── block.json         # Block metadata and attributes
│   ├── index.js           # Block registration
│   ├── edit.js            # Block editor component
│   ├── save.js            # Block save component
│   ├── style.scss         # Frontend styles
│   └── editor.scss        # Editor styles
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

## Screenshots

The plugin creates a professional grid layout similar to the reference design, featuring:
- Clean, card-based product display
- High-quality product images
- Clear titles and descriptions
- Prominent call-to-action links
- Smooth hover effects

## Support

For issues, questions, or contributions, please visit:
https://github.com/yanivcoweb/products-grid-block

## License

This plugin is licensed under the GPL v2 or later.

## Changelog

### 1.0.0
- Initial release
- Responsive grid layout (1-4 columns)
- Image upload support
- Rich text editing for titles and descriptions
- Custom links for each product
- Add, remove, and reorder products
- Wide and full-width alignment support
