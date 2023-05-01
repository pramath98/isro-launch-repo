import './appHeader.css';

export default function AppHeader() {
    return (
        <>

            <div className='header-container'>
                <img alt='logo' src='/isro-logo.png' className="header-logo" />
                <span className='header-text'>
                    Satellite Launch Repository
                </span>
            </div>

        </>
    )
}