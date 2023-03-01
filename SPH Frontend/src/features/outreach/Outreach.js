import { useNavigate } from 'react-router-dom'
import { useGetOutreachQuery } from './outreachApiSlice'
import { memo } from 'react'
import { useState } from 'react'
import { toggleStatus } from '../../config/status'


const Outreach = ({ outreachId }) => {

    const { outreach } = useGetOutreachQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            outreach: data?.entities[outreachId]

        }),
        
    })

            const [approval, setApproval] = useState(true);
            

            function handleButtonClick() {
            setApproval(toggleStatus(approval));
                        
   }






    if (outreach) {
        const created = new Date(outreach.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(outreach.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })


        return (
            
            <tr className="text-left px-8">
                <td className="px-6 text-sm font-medium text-gray-900">{outreach.user_id}</td>
                <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                    {approval
                    }
                </td>
                <td className="text-sm font-medium text-gray-900">{created}</td>
                <td className="text-sm font-medium text-gray-900">{updated}</td>
                <td className="text-sm font-medium text-gray-900">{outreach.title}</td>

                <td className="text-sm font-medium text-gray-900">
                    <button
                        className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleButtonClick}
                        
                    >
                        Approve
                        
                    </button>
                </td>
            </tr>
    
        )
                    
    } else return null
}

const memoizedOutreach = memo(Outreach)

export default memoizedOutreach