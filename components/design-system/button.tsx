import { type FC, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx';


const buttonClassVariants = cva(
	'inline-flex min-w-max items-center gap-2 flex-shrink-0 dark:ring-offset-secondary-900 border border-transparent font-semibold focus:outline-none disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			size: {
				small: 'rounded-md px-4 py-2 text-base font-medium ',
				medium: 'rounded-md px-4',
				large: 'text-base !font-medium px-16 rounded md:leading-6 transition-all duration-300'
			},
			variant: {
				filled: 'text-white bg-black border border-transparent dark:bg-white dark:text-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:hover:bg-gray-300',
				outline: 'focus:ring-2 focus:ring-offset-2 shadow border dark:border-neutral-400 dar:text-neutral-200 dark:hover:border-white dark:hover:text-white border=[#EAEAEA] text-neutral-800 dark:text-white hover:border-black hover: text-black',
				text: 'bg-transparent border-none'
			},
			fullWidth: {
				true: 'w-full justify-center items-center' 
			}
		},
		defaultVariants: {
			variant: 'filled',
			size: 'small'
		}
	}
)

interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		VariantProps<typeof buttonClassVariants> {}

const Button: FC<ButtonProps> = ({ size, variant, fullWidth, className, ...props }) => {
	const classes = clsx(buttonClassVariants({  size, variant, fullWidth, className }))

	return <button type="button" className={classes} {...props} />
}

export default Button