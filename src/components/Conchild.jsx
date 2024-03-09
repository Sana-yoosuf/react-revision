
import { NameContext } from '../App'
import { useContext } from 'react'

const Conchild = () => {

    let user =useContext(NameContext)
  return (
    <div className='conchild1'>
        <p>Hasi Bro loves {user}. 
            </p></div>
  )
}

export default Conchild

// context helps you to create container and usecontext is a hook that 
// helps you to extract values from contaxt