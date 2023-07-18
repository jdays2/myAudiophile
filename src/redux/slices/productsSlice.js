import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categorys: [
		{
			title: 'headphones',
			img: '/products-assets/share/headphones-link-img.png',
			advertisement: [
				{
					id: 0,
					isNew: false,
					price: '$ 2,999',
					model: 'XX99 Mark II',
					title: 'XX99 Mark II Headphones',
					img: '/products-assets/headphones/XX99-mark-1/main-img.png',
					boxfill: { unit: 1, earcups: 2, manual: 1, cable: 2, bag: 1 },
					subtitle:
						'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
					features: [
						"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
						'The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.',
					],
				},
				{
					id: 1,
					isNew: false,
					model: 'XX99 Mark I',
					price: '$ 29 999',
					title: 'XX99 Mark I Headphones',
					img: '/products-assets/headphones/XX99-mark-2/main-img.png',
					boxfill: { unit: 1, earcups: 2, manual: 1, cable: 2, bag: 1 },
					subtitle:
						'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
					features: [
						"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
						'The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.',
					],
				},
				{
					id: 2,
					isNew: false,
					model: 'XX59',
					price: '$ 2,999',
					title: 'XX59 Headphones',
					img: '/products-assets/headphones/XX59/main-img.png',
					boxfill: { unit: 1, earcups: 2, manual: 1, cable: 2, bag: 1 },
					subtitle:
						'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
					features: [
						"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
						'The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.',
					],
				},
			],
		},
		{
			title: 'speakers',
			img: '/products-assets/share/speakers-link-img.png',
			advertisement: [
				{
					id: 3,
					isNew: true,
					model: 'ZX9',
					price: '$ 99,99',
					title: 'ZX9 SPEAKER',
					img: '/products-assets/speakers/ZX9-speaker/main-img.png',
					boxfill: { unit: 1, earcups: 2, manual: 1, cable: 2, bag: 1 },
					subtitle:
						'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
					features: [
						"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
						'The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.',
					],
				},
				{
					id: 4,
					isNew: false,
					price: '$ 3,999',
					model: 'ZX7',
					title: 'ZX7 SPEAKER',
					img: '/products-assets/speakers/ZX7-speaker/main-img.png',
					boxfill: { unit: 1, earcups: 2, manual: 1, cable: 2, bag: 1 },
					subtitle:
						'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
					features: [
						"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
						'The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.',
					],
				},
			],
		},
		{
			title: 'earphones',
			img: '/products-assets/share/earphones-link-img.png',
			advertisement: [
				{
					isNew: true,
					model: 'YX1',
					id: 5,
					price: '$ 2,999',
					category: 'earphones',
					title: 'YX1 WIRELESS EARPHONES',
					img: '/products-assets/earphones/YX1-wireless-earphones/main-img.png',
					boxfill: { unit: 1, earcups: 2, manual: 1, cable: 2, bag: 1 },
					subtitle:
						'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
					features: [
						"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
						'The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.',
					],
				},
			],
		},
	],
	currentCategory: 0,
	currentProduct: 0,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCurrentCategory(state, action) {
			state.currentCategory = action.payload;
		},
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload;
		}
	},
});

export const { setCurrentCategory, setCurrentProduct } = productsSlice.actions;
