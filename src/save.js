import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { products, columns } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`products-grid columns-${columns}`}>
				{products.map((product) => (
					<a href={product.linkUrl} key={product.id} className="product-card">
						{product.imageUrl && (
							<div className="product-image">
								<img src={product.imageUrl} alt={product.title} />
							</div>
						)}

						<RichText.Content
							tagName="h3"
							value={product.title}
							className="product-title"
						/>

						<RichText.Content
							tagName="p"
							value={product.description}
							className="product-description"
						/>

						<div className="product-link button button__minimal">
							{product.linkText}
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
