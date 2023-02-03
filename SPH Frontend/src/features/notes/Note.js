//import { useNavigate } from 'react-router-dom'
import { useGetNotesQuery } from './notesApiSlice'
import { memo } from 'react'

const Note = ({ noteId }) => {

    const { note } = useGetNotesQuery("notesList", {
        selectFromResult: ({ data }) => ({
            note: data?.entities[noteId]
        }),
    })

   // const navigate = useNavigate()

    if (note) {
        const created = new Date(note.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(note.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        //const handleEdit = () => navigate(`/dash/notes/${noteId}`)

        return (
            <tr className="text-left px-8">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {note.completed
                        ? <span className="text-green-400">Completed</span>
                        : <span className="">Open</span>
                    }
                </td>
                <td className="py-4 text-sm font-medium text-gray-900">{created}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{updated}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{note.title}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{note.user_id}</td>
            </tr>
        )
                    
    } else return null
}

const memoizedNote = memo(Note)

export default memoizedNote