import { useParams } from 'react-router-dom'

const Subject = () => {
	const { id } = useParams()

	return <>{id}</>
}

export default Subject
