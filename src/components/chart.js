import React, { useEffect } from 'react'
import { Chart } from 'react-charts';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

 
function MyChart(props) {
  const state = useSelector( state => {
    return state
        } );
        console.log(state.count)
  const data = React.useMemo(
    () => [
      {
        label: 'Total Tests',
        data: [[0, state?.user?.data[state.count]?.totalTestResults] ]
      },
      {
        label: 'Positive',
        data: [[0, props.positive]]
      },
      {
        label: 'Negative',
        data: [[0, props.negative]]
      },
      {
        label: 'Hospitalized',
        data: [[0, props.hospitalized]]
      },
      {
        label: 'Recovered',
        data: [[0, props.recovered]]
      },
      {
        label: 'Deaths',
        data: [[0, props.death]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default MyChart;