import linkinImg from '../images/linkin/linkedin.png';
import '../styling/Linkin.css';

export default function Linkin() {
	return (
		<div className="main">
			<div className="center">
				<a
					href="https://www.linkedin.com/in/antony-lester"
					rel="noreferrer">
					<img src={linkinImg} alt="" className="round" />
				</a>
			</div>
		</div>
	);
}
