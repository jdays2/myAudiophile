import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categorys: [
		{
			title: 'headphones',
			img: '/products-assets/share/headphones-link-img.png',
			advertisement: [
				{
					isNew: false,
					title: 'XX99 Mark II Headphones',
					img: '/products-assets/headphones/XX99-mark-1/main-img.png',
					subtitle:
						'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
				},
				{
					isNew: false,
					title: 'XX99 Mark I Headphones',
					img: '/products-assets/headphones/XX99-mark-2/main-img.png',
					subtitle:
						'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
				},
				{
					isNew: false,
					title: 'XX59 Headphones',
					img: '/products-assets/headphones/XX59/main-img.png',
					subtitle:
						'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
				},
			],
		},
		{
			title: 'speakers',
			img: '/products-assets/share/speakers-link-img.png',
			advertisement: [
				{
					isNew: true,
					title: 'ZX9 SPEAKER',
					img:'/products-assets/speakers/ZX9-speaker/main-img.png',
					subtitle:
						'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
				},
				{
					isNew: false,
					title: 'ZX7 SPEAKER',
					img:'/products-assets/speakers/ZX7-speaker/main-img.png',
					subtitle:
						'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
				},
			],
		},
		{
			title: 'earphones',
			img: '/products-assets/share/earphones-link-img.png',
			advertisement: [
				{
					isNew: true,
					title: 'YX1 WIRELESS EARPHONES',
					img: '/products-assets/earphones/YX1-wireless-earphones/main-img.png',
					subtitle:
						'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
				},
			],
		},
	],
  currentCategory: 0
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
    setCurrentCategory(state, action) {
      state.currentCategory = action.payload
    }
  },
});

export const { setCurrentCategory } = productsSlice.actions;
