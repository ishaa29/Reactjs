import {  useContext } from 'react'
import  Context from './Context'
const M = () => {
    let a = useContext(Context)
    console.log(a,'heheh');

    return(
        <div>
            <h1>
                {
a
                }
            </h1>
        </div>
    )
}
export default M