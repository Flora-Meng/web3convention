import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import postList from './postList.json';
import PostBackgroundImage01 from '@/assets/images/blog-background-img-1.png';
import PostBackgroundImage02 from '@/assets/images/blog-background-img-2.png';
import PostBackgroundImage03 from '@/assets/images/blog-background-img-3.png';
import {
	activeNavBarTitleDecoration,
	animation,
	animationFillMode,
	animationHoverImage,
	animationHoverImageParent,
	navBarTitleDecoration,
	tagDecoration,
	textEllipsis
} from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { darkPrimaryColor } = color;

const HomePostsContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	@media ${devices.mobile} {
		padding: 100px 100px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Title = styled.h2`
	font-size: 40px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0;
	margin-bottom: 64px;
	max-width: 350px;
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '1s', 'ease', '0.7s', '1')};
	${animationFillMode()};
`;

const Subtitle = styled.p`
	color: ${darkPrimaryColor};
	font-size: 16px;
	font-style: italic;
	margin: 0;
	${tagDecoration()};
	margin-bottom: 6px;
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '1s', 'ease', '0.4s', '1')};
	${animationFillMode()};
`;

const ImageListItem = styled(Link)`
	${animationHoverImageParent()};
	cursor: pointer;
	height: 50vw;
	position: relative;
	@media ${devices.tablet} {
		height: 24vw;
	}
	@media ${devices.laptop} {
		height: 18vw;
		max-height: 300px;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage()};
	object-fit: cover;
`;

const PostTitle = styled.h3`
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 10px;
	@media ${devices.laptop} {
		font-size: 26px;
	}
`;

const PostDescription = styled.p`
	${textEllipsis(2)}
`;

const StyledLink = styled(Link)`
	display: inline-block;
	font-size: 13px;
	font-weight: 700;
	text-transform: uppercase;
	span {
		${navBarTitleDecoration('calc(100% + 4px)', '50%', '-2px')};
	}
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
`;

const PostBackGroundImage = styled(Image)`
	left: 20px;
	opacity: 0;
	position: absolute;
	top: -120px;
	z-index: -1;
	${animation('fade-in-opacity-transform-to-right', '0.5s', 'ease', '0.5s', '1')};
	${animationFillMode()};
`;

const postBackGroundImage = [PostBackgroundImage01, PostBackgroundImage02, PostBackgroundImage03];

const HomePosts: React.FC = () => {
	return (
		<HomePostsContainer>
			<Subtitle>the_festival</Subtitle>
			<Title>Advancing Craft Connect People</Title>
			<Grid container spacing={6}>
				{postList.map((post, index) => {
					const postLink = '/comingSoon';
					return (
						<Grid
							item
							mobile={12}
							tablet={12}
							laptop={6}
							largeLaptop={4}
							key={post._id}
							className="relative"
						>
							<ImageListItem href={postLink}>
								<StyledImage
									loader={imageLoader}
									src={post.imageSrc}
									alt={post.title}
									fill
									unoptimized
								/>
							</ImageListItem>
							<Link href={postLink}>
								<PostTitle>{post.title}</PostTitle>
							</Link>
							<PostDescription>{post.description}</PostDescription>
							<StyledLink href={postLink}>
								<span>read more</span>
							</StyledLink>
							<PostBackGroundImage
								loader={imageLoader}
								src={postBackGroundImage[index]}
								alt={`post-bg-${index}`}
								unoptimized
							/>
						</Grid>
					);
				})}
			</Grid>
		</HomePostsContainer>
	);
};

export default HomePosts;
