//import { useNavigate } from 'react-router-dom'
import { useGetOutreachQuery } from './outreachApiSlice'
import { memo } from 'react'

const Outreach = ({ outreachId }) => {

    const { outreach } = useGetOutreachQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            outreach: data?.entities[outreachId]
        }),
    })

   // const navigate = useNavigate()

    if (outreach) {
        const created = new Date(outreach.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(outreach.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        //const handleEdit = () => navigate(`/dash/outreach/${outreachId}`)

        return (
            <tr className="text-left px-8">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {outreach.completed
                        ? <span className="text-green-400">Completed</span>
                        : <span className="">Open</span>
                    }
                </td>
                <td className="py-4 text-sm font-medium text-gray-900">{created}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{updated}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{outreach.title}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{outreach.user_id}</td>
            </tr>
        )
                    
    } else return null
}

const memoizedOutreach = memo(Outreach)

export default memoizedOutreach