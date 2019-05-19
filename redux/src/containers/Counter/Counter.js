import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, add5, subtract5, storeResult, deleteResult } from '../../store/actionCreator';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

 const mapStateToProps = (state) => {
    return {
        ctr: state.counter.counter,
        results: state.results.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAdd5: () => dispatch(add5(5)),
        onSubtract5: () => dispatch(subtract5(5)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);