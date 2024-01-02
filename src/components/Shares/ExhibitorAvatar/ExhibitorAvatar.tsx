import styled from 'styled-components';

interface AvatarProps {
	width: string;
	height: string;
}

interface ExhibitorAvatarProps extends AvatarProps {
	logoUrl: string;
	name: string;
}
const logoBackground = '/images/exhibition/invalid-name.png';

const Avatar = styled.div<AvatarProps>`
	background-image: url('${logoBackground}');
	background-repeat: no-repeat;
	background-size: cover;
	height: ${props => props.height};
	position: relative;
	width: ${props => props.width};
	img.company {
		border-radius: 50%;
		height: calc(${props => props.height} - 11px);
		margin: 9px 2px 2px 2px;
		position: absolute;
		transform: none;
		width: calc(${props => props.width} - 4px);
	}
`;

const ExhibitorAvatar: React.FC<ExhibitorAvatarProps> = ({ logoUrl, name, width, height }) => {
	return (
		<Avatar width={width} height={height}>
			<img src={logoUrl} alt={name} className="company" />
		</Avatar>
	);
};

export default ExhibitorAvatar;
