import { useNavigate } from 'react-router-dom'
import { useGetAnexBQuery } from './anexB_ApiSlice'
import { useGetAnexAQuery } from './anexA_ApiSlice'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const Outreach = ({ outreachId }) => {

    const { anexA } = useGetAnexAQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            AnexA: data?.entities[outreachId]
        }),
    }
    )

    const { anexB } = useGetAnexAQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            AnexB: data?.entities[outreachId]
        }),
    }
    )
    
    // const allOutreach = 

    console.log(anexB);
    const navigate = useNavigate()

    if (anexB) {


        const created = new Date(anexB.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(anexB.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/outreach/${outreachId}`)
        


        return (
            
            <tr className="text-left px-8">
                <td className="px-6 text-sm font-medium text-gray-900">{anexB.user}</td>
                <td className="text-sm font-medium text-gray-900">{anexB.fullname}</td>
                <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                    {anexB.status
                    }
                </td>
                <td className="text-sm font-medium text-gray-900">{created}</td>
                <td className="text-sm font-medium text-gray-900">{anexB.project_title}</td>
                <td className="text-sm font-medium text-gray-900">{anexB.target_beneficiary}</td>
                <td className="text-sm font-medium text-gray-900">{anexB.venue}</td>
                <td className="text-sm font-medium text-gray-900">

                    {/* <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleEdit}> 
                                            Edit
                    </button> */}
                    <Link className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" to="/dash/viewerPDF" >
                        Form
                        </Link>
                </td>
            </tr>
        )
          
    } else return null
}

const memoizedOutreach = memo(Outreach)

export default memoizedOutreach