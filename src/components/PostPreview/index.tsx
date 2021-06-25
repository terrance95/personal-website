import { Link } from 'gatsby';
import React, { FC, forwardRef, Ref } from 'react';
import { Box, Text } from 'theme-ui';
import Tag from '../Tag';
import sx from './styles';
//@ts-expect-error
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
				<Tag sx={sx.category}>{category}</Tag>

				<AniLink to={slug} style={{ textDecoration: 'none' }} fade>
					<Text as="h3" sx={sx.heading}>
						{title}
					</Text>
				</AniLink>
				<Text sx={sx.text}>{excerpt}</Text>
			</Box>
		);
	},
);

export default PostPreview;
