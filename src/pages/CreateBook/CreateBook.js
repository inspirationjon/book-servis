import useToken from '../../hooks/useToken'
import { useState } from 'react'

function CreateBook() {
    const [token] = useToken()
    const { book, setBook } = useState()

    function handleSubmit(evt) {
        evt.preventDefault()

        const { description, file } = evt.target.elements

        const formData = new FormData()
        formData.append('book', file.files[0])

        fetch('http://192.168.1.22:4003/upload', {
            method: 'POST',
            headers: {
                // 'Content-type': 'application/json',

                token,
            },
            body: formData,
        })
            .then((data) => data.json())
            .then((data) => console.log(data.data))

        fetch('http://192.168.1.240:4002/books', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                token: token,
            },
            body: JSON.stringify({
                book_name: '1984',
                book_description: 'Utopik asar',
                file_id: 2,
            }),
        })
            .then((data) => data.json())
            .then((data) => console.log(data.data))
        console.log('working...')
    }
    return (
        <>
            <h1>CreateBook</h1>

            <form
                method='POST'
                onSubmit={handleSubmit}
                encType='multipart/form-data'>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input
                        type='text'
                        id='description'
                        placeholder='description..'
                    />
                </div>
                <div>
                    <label htmlFor='file'>File:</label>
                    <input type='file' id='file' placeholder='file..' />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default CreateBook
