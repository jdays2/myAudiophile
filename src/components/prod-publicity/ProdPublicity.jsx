const ProdPublicity = ({img1, img2, img3}) => {
	return (
		<div className="prod-publicity">
			<div className="prod-publicity__wrapper">
				<div className="prod-publicity__col-block">
					<div className="prod-publicity__img prod-publicity__img--one">
						<img
							src={img1}
							alt=""
						/>
					</div>
					<div className="prod-publicity__img prod-publicity__img--two">
						<img
							src={img2}
							alt=""
						/>
					</div>
				</div>
				<div className="prod-publicity__generic-block">
					<div className="prod-publicity__img prod-publicity__img--three">
						<img
							src={img3}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProdPublicity;
