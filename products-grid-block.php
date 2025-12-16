<?php
/**
 * Plugin Name:       Products Grid Block
 * Description:       A custom WordPress Gutenberg block for displaying products in a responsive grid layout
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            Yaniv Coweb
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       products-grid-block
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function products_grid_block_init() {
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'products_grid_block_init');
