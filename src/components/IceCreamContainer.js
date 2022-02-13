import React from 'react'
import { connect } from 'react-redux'
import{ buyIceCream } from '../redux'

function IceCreamContainer (props) {
  return (
    <div>
        <h2>Number of iceCream - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  )
}
 const mapStateToProps = state => {
     return {
         numOfIceCreams: state.iceCream.numOfIceCreams
     }
 } // redux state as parameter
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream()) //dispatching action creator
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer ) // first state second function