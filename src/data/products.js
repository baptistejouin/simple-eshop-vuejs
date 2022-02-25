import img00 from '@/assets/img/product/00-0.webp'
import img01 from '@/assets/img/product/00-1.webp'
import img10 from '@/assets/img/product/01-0.webp'
import img11 from '@/assets/img/product/01-1.webp'
import img20 from '@/assets/img/product/02-0.webp'
import img21 from '@/assets/img/product/02-1.webp'
import img30 from '@/assets/img/product/03-0.webp'
import img31 from '@/assets/img/product/03-1.webp'
import img40 from '@/assets/img/product/04-0.webp'
import img41 from '@/assets/img/product/04-1.webp'

const products = [
	{
		id: 1,
		name: 'Mac Yann',
		categorie: 2,
		price: 450,
		img: [img00, img01]
	},
	{
		id: 2,
		name: 'Chemise Clément',
		categorie: 4,
		price: 160,
		img: [img10, img11]
	},
	{
		id: 5,
		name: 'Jeans Robert',
		categorie: 3,
		price: 140,
		img: [img40, img41]
	},
	{
		id: 4,
		name: 'Sac Camille',
		categorie: 5,
		price: 310,
		img: [img30, img31]
	},
	{
		id: 3,
		name: 'Chemise Mathieu',
		categorie: 4,
		price: 165,
		img: [img20, img21]
	}
]

export default products