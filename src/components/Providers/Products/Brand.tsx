export interface Brand {
	name: string;
	products: Product[];
}
export interface Product {
	name: string;
	price: number;
	details: string;
	tos: string;
	activeCodes: string[];
	brand: string;
}



export const data: Brand[] = [
	{
		name: "Brand 1",
		products: [
			{
				name: "Product 1",
				price: 100,
				details: "Details 1",
				tos: "TOS 1",
				activeCodes: ["code1", "code2"],
				brand: "Brand 1"
			},
			{
				name: "Product 2",
				price: 200,
				details: "Details 2",
				tos: "TOS 2",
				activeCodes: ["code3", "code4"],
				brand: "Brand 1"
			}
		]
	},
	{
		name: "Brand 2",
		products: [
			{
				name: "Product 3",
				price: 300,
				details: "Details 3",
				tos: "TOS 3",
				activeCodes: ["code5", "code6"],
				brand: "Brand 2"
			},
			{
				name: "Product 4",
				price: 400,
				details: "Details 4",
				tos: "TOS 4",
				activeCodes: ["code7", "code8"],
				brand: "Brand 2"
			}
		]
	},
	{
		name: "Brand 3",
		products: [
			{
				name: "Product 5",
				price: 500,
				details: "Details 5",
				tos: "TOS 5",
				activeCodes: ["code9", "code10"],
				brand: "Brand 3"
			},
			{
				name: "Product 6",
				price: 600,
				details: "Details 6",
				tos: "TOS 6",
				activeCodes: ["code11", "code12"],
				brand: "Brand 3"
			}
		]
	},
	{
		name: "Brand 4",
		products: [
			{
				name: "Product 7",
				price: 700,
				details: "Details 7",
				tos: "TOS 7",
				activeCodes: ["code13", "code14"],
				brand: "Brand 4"
			},
			{
				name: "Product 8",
				price: 800,
				details: "Details 8",
				tos: "TOS 8",
				activeCodes: ["code15", "code16"],
				brand: "Brand 4"
			}
		]
	}
]