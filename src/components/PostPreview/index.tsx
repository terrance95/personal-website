import { Link } from 'gatsby';
import React, { FC } from 'react';
import { Box, Text } from 'theme-ui';
import Tag from '../Tag';
import sx from './styles';

export type PostPreviewTypes = {
	title: string;
	category: string;
	excerpt: string;
	slug: string;
};

const PostPreview: FC<PostPreviewTypes> = ({
	title,
	category,
	excerpt,
	slug,
}) => {
	return (
		<Box sx={sx.wrapper}>
			{/* @ts-ignore */}
			<Tag sx={sx.category}>{category}</Tag>

			<Link to={slug} style={{ textDecoration: 'none' }}>
				<Text as="h3" sx={sx.heading}>
					{title}
				</Text>
			</Link>
			<Text sx={sx.text}>{excerpt}</Text>
		</Box>
	);
};

export default PostPreview;
