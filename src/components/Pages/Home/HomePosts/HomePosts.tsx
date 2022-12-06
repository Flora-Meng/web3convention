import Link from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

import postList from './postList.json';
import PostBackgroundImage01 from '@/assets/images/blog-background-img-1.png';
import PostBackgroundImage02 from '@/assets/images/blog-background-img-2.png';
import PostBackgroundImage03 from '@/assets/images/blog-background-img-3.png';
import { color, devices, sizes } from '@/styles/variables';
import {
	activeNavBarTitleDecoration,
	animationHoverImage,
	animationHoverImageParent,
	navBarTitleDecoration,
	tagDecoration,
	textEllipsis
} from '@/styles/mixin';
import imageLoader from '@/utils/loader';

const { darkPrimaryColor } = color;

const HomePostsContainer = styled.div`
	padding: 100px 40px 140px;
	max-width: ${`${sizes.largeLaptop}px`};
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
	margin: 0;
	line-height: 1.1;
	margin-bottom: 64px;
	max-width: 350px;
`;

const Subtitle = styled.p`
	font-style: italic;
	font-size: 16px;
	margin: 0;
	color: ${darkPrimaryColor};
	${tagDecoration()};
	margin-bottom: 6px;
`;

const ImageListItem = styled(Link)`
	${animationHoverImageParent};
	position: relative;
	height: 50vw;
	cursor: pointer;
	@media ${devices.tablet} {
		height: 24vw;
	}
	@media ${devices.laptop} {
		height: 18vw;
		max-height: 300px;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage};
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
	text-transform: uppercase;
	font-weight: 700;
	font-size: 13px;
	span {
		${navBarTitleDecoration('calc(100% + 4px)', '50%', '-2px')};
	}
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
`;

const PostBackGroundImage = styled(Image)`
	position: absolute;
	top: -120px;
	left: 20px;
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
							xs={12}
							sm={12}
							md={6}
							lg={4}
							key={post._id}
							className="relative"
						>
							<ImageListItem href={postLink}>
								<StyledImage
									loader={imageLoader}
									src={post.imageSrc}
									alt={post.title}
									unoptimized
									layout="fill"
									objectFit="cover"
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
