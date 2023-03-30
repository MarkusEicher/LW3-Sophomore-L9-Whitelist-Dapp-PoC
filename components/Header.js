import headerStyles from '../styles/Header.module.css'

const Header = () => {
    // conditional rendering for the header
    const x = 2
    return (
        <div>
            <h1 className='title'>Whitelisting dApp - Practice Project</h1>
            {/* <style jsx>
                {`
                    .title {
                        // conditional rendering for the header
                        color: ${x > 3 ? 'red' : 'blue'};
                    }
                `}
            </style> */}
        </div>
    )
}

export default Header