import React from "react";
import { 
	Title,
	CardRow,
	SideButton,
	Card,
	Separator,
} from "@/components/CardPage/CardPage";
import styles from "./modal.module.css"
import BaseModal, { BaseModalProps } from "@/components/Modal/BaseModal";
import { Product } from "../../../../components/Providers/Products/Brand";
import { toast } from "react-toastify";
import { ProductId, useProducts } from "@/components/Providers/Products/Products";

interface DeleteProductProps extends BaseModalProps {
	id: ProductId;
}

const DeleteProductModal: React.FC<DeleteProductProps> = ({
	state, id
}) => {
	const { findProduct, deleteProduct } = useProducts();
	const product = findProduct(id)!;
	const close = () => state[1](false);
	const handleSubmit = async () => {
		await deleteProduct(id);
		toast.success("Product deleted: " + product.name);
		close();
	};
	if (!state[0]) return null;
	return (
		<BaseModal state={state}>
		<Card>
			<Title>Delete Brand</Title>
			<Separator />
			<div className={styles.modal_description}>
				Delete <strong>{product.name}</strong> from {product.brand}?
				<br />
				This action CANNOT be undone.
			</div>
			<CardRow>
				<SideButton onClick={close} color="gray">
					Cancel
				</SideButton>
				<SideButton onClick={handleSubmit} color="red">
					Delete
				</SideButton>
			</CardRow>
		</Card>
		</BaseModal>
	);
}

export default DeleteProductModal;