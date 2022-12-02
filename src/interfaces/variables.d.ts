type ISize = { [key: string]: number };
type IDevices = { [key: string]: string };
type IColor = { [key: string]: string };

interface IInputColor {
	borderColor: string;
	placeholderColor: string;
}

export { IColor, IDevices, IInputColor, ISize };
