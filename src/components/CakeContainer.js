import React from 'react'
import { connect } from 'react-redux'
import{ buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}
 const mapStateToProps = state => {
     return {
         numOfCakes: state.cake.numOfCakes
     }
 } // redux state as parameter
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()) //dispatching action creator
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) // first state second function