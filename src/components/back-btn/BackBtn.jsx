import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<button
			className="back-btn"
			onClick={goBack}>
			<span>Go Back</span>
		</button>
	);
};

export default BackBtn;
