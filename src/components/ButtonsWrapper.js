import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../components/Button'
import ColorButton from '../components/ColorButton'
import { setEngine, clearEngine } from '../actions/Engine'
import { setModel, clearModel } from '../actions/Model'
import { setGear, clearGear } from '../actions/Gear'
import { setColor, clearColor } from '../actions/Color'
import { setPrice } from '../actions/Price'

const ButtonsWrapper = ({data, setValue, clearValue, value, type, title}) => {

    const dispatch = useDispatch()

    const onSetValue = (item) => {
        dispatch(setValue(item))
        if(type === 'model') {
            dispatch(clearEngine())
            dispatch(clearGear())
            dispatch(clearColor())
        }
    }

    return (
        <div style={styles.elementWrapper}>
            <span style={styles.title}>
                {title}
            </span>
            <div style={styles.buttonsWrapper}>
                {
                    data.map((item, index) => {

                        const buttonProps = {
                            color: type === 'color' ? item : '',
                            text: type === 'color' ? '' : item
                        }

                        const selected = value === item
                        const Element = type === 'color' ? ColorButton : Button 
                        return <Element key={index} onClick={() => selected ? dispatch(clearValue()) : onSetValue(item)}  selected={selected} {...buttonProps}/>
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
        alignItems: 'flex-start'
    },
    elementWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    buttonsWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: 'black',
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    }
  }

  
export default ButtonsWrapper