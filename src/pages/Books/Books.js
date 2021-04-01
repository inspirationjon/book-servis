import useToken from '../../hooks/useToken'

function CreateBook() {
    const [token] = useToken()

    function handleSubmit(evt) {
        evt.preventDefault()

        const { description, file } = evt.target.elements

        const formData = new FormData()
        formData.append('book', file.files[0])
        fetch('http://192.168.1.22:4003/upload', {
            method: 'POST',
            headers: {
                token,
            },
            body: formData,
        })
            .then((data) => data.json())
            .then((data) => console.log(data.data))
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
