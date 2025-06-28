import Friendsgroup from './Componentes/Friendsgroup'
import Profilebgpic from '../Home/Componentes/profilebgpic/Profilebgpic'
const Friend = () => {
    return (
        <div className='my-4 mx-8 mb-5'>
            <Profilebgpic />
            <div>
                <Friendsgroup />
            </div>
        </div>

    )
}

export default Friend