import {
    Button,
    Stack,
} from '@chakra-ui/react';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { CartProduct } from '../../types';
import { QuantityInput } from '../QuantityInput';

export interface AddToCartButtonProps {
    cartItem: CartProduct;
    updateCart: (cartItem: CartProduct) => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ cartItem, updateCart }) => (
    <Stack align="center">
        {cartItem.quantity ? (
            <QuantityInput
                value={cartItem.quantity}
                onChange={(_, valueAsNumber: number) => updateCart({ ...cartItem, quantity: valueAsNumber })}
            />
        ) : (
            <Button
                leftIcon={<FiShoppingCart size="24px" />}
                colorScheme="blue"
                isFullWidth
                onClick={() => updateCart({ ...cartItem, quantity: 1 })}
            >
                Add to cart
            </Button>
        )}
    </Stack>
);
