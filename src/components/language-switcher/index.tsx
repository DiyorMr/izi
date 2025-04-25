import { Globe } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from './data'
// import './style.scss'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const [open, setOpen] = useState(false)

	const nameLng = (lng) => {
		switch (lng) {
			case 'en':
				return 'En'
			case 'ru':
				return 'Py'
			case 'uz':
				return "O'z"
			default:
				return ''
		}
	}
	return (
		<div className='lng_box'>
			<button
				type="submit"
				className='lng_box_btn'
				onClick={() => setOpen(true)}
			>
				<Globe className='icon' />
				{nameLng(i18n.resolvedLanguage)}
			</button>

			{open && <div className="lng_box_items">
				{languages.map(item =>
					<span
						className={i18n.resolvedLanguage === item.value && 'active'}
						key={item.value}
						onClick={() => { i18n.changeLanguage(item.value); setOpen(false) }}
					>
						{item.label}
					</span>
				)}
			</div>}
		</div>
	)
}

export default LanguageSwitcher