import { Link } from 'gatsby';
import React, { FC, forwardRef, Ref } from 'react';
import { Box, Text } from 'theme-ui';
import Tag from '../Tag';
import sx from './styles';

export type PostPreviewTypes = {
	title: string;
	category: string;
	excerpt: string;
	slug: string;
};

const PostPreview: FC<PostPreviewTypes> = forwardRef(
	({ title, category, excerpt, slug }, ref: Ref<HTMLDivElement>) => {
		return (
			<Box sx={sx.wrapper} ref={ref}>
				{/* @ts-ignore */}
				{/* <Tag sx={sx.category}>{category}</Tag> */}

				<Link to={slug} style={{ textDecoration: 'none' }}>
					<Text as="h3" sx={sx.heading}>
						{title}
					</Text>
				</Link>
				<Text sx={sx.text}>{excerpt}</Text>
			</Box>
		);
	},
);

export default PostPreview;
