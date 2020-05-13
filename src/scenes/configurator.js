import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../components/Button'
import ColorButton from '../components/ColorButton'
import { setEngine } from '../actions/Engine'
import { setModel } from '../actions/Model'

const Configurator = () => {
    const models = ['PRO RS3', 'UBER RS2', 'STANDARD', 'WK']
    const engines = ['5.2L 532BHP', '4.2L 443BHP', '3.6L 374BHP', '2.0L 166BHP']
    const gearboxes = ['Manual', 'Automatic']
    const colors = ['red', 'gray', 'brown', 'black']

    const dispatch = useDispatch()
    const engine = useSelector(state => state.Engine.type)
    const model = useSelector(state => state.Model.type)


    const [gearbox, setGearbox] = useState(gearboxes[0])
    const [color, setColor] = useState(colors[0])



    return (
        <div style={styles.wrapper}>
            <div style={styles.buttonsWrapper}>
                {
                    models.map((item, index) => {
                        return <Button key={index} onClick={() => dispatch(setModel(item))} text={item} selected={model === item}/>
                    })
                }
            </div>

            <div style={styles.buttonsWrapper}>
                {
                    engines.map((item, index) => {
                        return <Button key={index} onClick={() => dispatch(setEngine(item))} text={item} selected={engine === item}/>
                    })
                }
            </div>

            <div style={styles.buttonsWrapper}>
                {
                    gearboxes.map((item, index) => {
                        return <Button key={index} onClick={() => setGearbox(item)} text={item} selected={gearbox === item}/>
                    })
                }
            </div>

            <div style={styles.buttonsWrapper}>
                {
                    colors.map((item, index) => {
                        return <ColorButton key={index} onClick={() => setColor(item)} color={item} selected={color === item}/>
                    })
                }
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  }


export default Configurator