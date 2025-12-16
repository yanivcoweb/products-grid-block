import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextControl,
	RangeControl,
	Placeholder,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { products, columns } = attributes;

	const updateProduct = (index, field, value) => {
		const newProducts = [...products];
		newProducts[index] = { ...newProducts[index], [field]: value };
		setAttributes({ products: newProducts });
	};

	const addProduct = () => {
		const newProducts = [...products];
		newProducts.push({
			id: Date.now(),
			title: 'New Product',
			description: 'Product description goes here.',
			imageUrl: '',
			imageId: 0,
			linkUrl: '#',
			linkText: 'Learn more',
		});
		setAttributes({ products: newProducts });
	};

	const removeProduct = (index) => {
		const newProducts = products.filter((_, i) => i !== index);
		setAttributes({ products: newProducts });
	};

	const moveProduct = (index, direction) => {
		const newProducts = [...products];
		const newIndex = direction === 'up' ? index - 1 : index + 1;
		if (newIndex >= 0 && newIndex < products.length) {
			[newProducts[index], newProducts[newIndex]] = [
				newProducts[newIndex],
				newProducts[index],
			];
			setAttributes({ products: newProducts });
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Grid Settings', 'products-grid-block')}>
					<RangeControl
						label={__('Columns', 'products-grid-block')}
						value={columns}
						onChange={(value) => setAttributes({ columns: value })}
						min={1}
						max={12}
					/>
				</PanelBody>
				<PanelBody
					title={__('Products', 'products-grid-block')}
					initialOpen={true}
				>
					<Button variant="primary" onClick={addProduct} style={{ width: '100%' }}>
						{__('Add Product', 'products-grid-block')}
					</Button>
					<p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
						{__('Total products: ', 'products-grid-block')} {products.length}
					</p>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				{products.length === 0 ? (
					<Placeholder
						icon="grid-view"
						label={__('Products Grid', 'products-grid-block')}
						instructions={__('Start adding products to your grid.', 'products-grid-block')}
					>
						<Button variant="primary" onClick={addProduct}>
							{__('Add Your First Product', 'products-grid-block')}
						</Button>
					</Placeholder>
				) : (
					<>
						<div
							className="products-grid"
							style={{
								gridTemplateColumns: `repeat(${columns}, 1fr)`,
							}}
						>
							{products.map((product, index) => (
								<div key={product.id} className="product-card">
									<div className="product-card-controls">
										<Button
											icon="arrow-up-alt2"
											onClick={() => moveProduct(index, 'up')}
											disabled={index === 0}
											label={__('Move up', 'products-grid-block')}
										/>
										<Button
											icon="arrow-down-alt2"
											onClick={() => moveProduct(index, 'down')}
											disabled={index === products.length - 1}
											label={__('Move down', 'products-grid-block')}
										/>
										<Button
											icon="trash"
											onClick={() => removeProduct(index)}
											label={__('Remove', 'products-grid-block')}
											isDestructive
										/>
									</div>

									<div className="product-image">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(media) => {
													updateProduct(index, 'imageUrl', media.url);
													updateProduct(index, 'imageId', media.id);
												}}
												allowedTypes={['image']}
												value={product.imageId}
												render={({ open }) => (
													<>
														{product.imageUrl ? (
															<div className="image-preview">
																<img
																	src={product.imageUrl}
																	alt={product.title}
																/>
																<Button
																	onClick={open}
																	variant="secondary"
																	className="change-image"
																>
																	{__('Change Image', 'products-grid-block')}
																</Button>
															</div>
														) : (
															<Button
																onClick={open}
																variant="secondary"
																className="upload-image-button"
															>
																{__('Upload Image', 'products-grid-block')}
															</Button>
														)}
													</>
												)}
											/>
										</MediaUploadCheck>
									</div>

									<RichText
										tagName="h3"
										value={product.title}
										onChange={(value) => updateProduct(index, 'title', value)}
										placeholder={__('Product Title', 'products-grid-block')}
										className="product-title"
									/>

									<RichText
										tagName="p"
										value={product.description}
										onChange={(value) =>
											updateProduct(index, 'description', value)
										}
										placeholder={__('Product Description', 'products-grid-block')}
										className="product-description"
									/>

									<div className="product-link-settings">
										<TextControl
											label={__('Link URL', 'products-grid-block')}
											value={product.linkUrl}
											onChange={(value) => updateProduct(index, 'linkUrl', value)}
										/>
										<TextControl
											label={__('Link Text', 'products-grid-block')}
											value={product.linkText}
											onChange={(value) => updateProduct(index, 'linkText', value)}
										/>
									</div>

									<a href={product.linkUrl} className="product-link">
										{product.linkText}
										<span className="arrow">→</span>
									</a>
								</div>
							))}
						</div>
						<div className="add-product-button-container">
							<Button variant="primary" onClick={addProduct}>
								{__('Add Another Product', 'products-grid-block')}
							</Button>
						</div>
					</>
				)}
			</div>
		</>
	);
}
