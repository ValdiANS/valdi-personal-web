import { extendVariants, Button as NextUiButton } from '@nextui-org/react';

const Button = extendVariants(NextUiButton, {
  variants: {
    color: {},
    size: {},
  },
  defaultVariants: {},
  compoundVariants: [
    {
      className: 'data-[pressed=true]:scale-90 !duration-150',
    },
  ],
});

export default Button;
