import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home</h1>

            <div className=''>
                <button>
                    <Link to='/login'>Login</Link>
                </button>
            </div>
            <div className=''>
                <button>
                    <Link to='/books'>Books</Link>
                </button>
            </div>
            <div className=''>
                <button>
                    <Link to='/create-book'>Create book</Link>
                </button>
            </div>
        </>
    )
}

export default Home
