import { ChevronUp } from 'lucide-react'
import { useCollapse } from 'react-collapsed'
import '../section/style.scss'

const Section = (props) => {
	const config = {
		defaultExpanded: props.defaultExpanded || false,
		collapsedHeight: props.collapsedHeight || 0
	}
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config)
	return (
		<div className="collapsible">
			<div className="collapsible_header" {...getToggleProps()}>
				<div className="collapsible_header_title">{props.title}</div>
				<div className="collapsible_header_icon">
					{!isExpanded ? <img src="/images/plus.svg" alt="" /> : <ChevronUp />}
				</div>
			</div>
			<div {...getCollapseProps()}>
				<div className="collapsible_content">
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default Section