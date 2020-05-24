import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../components/Button'
import ButtonsWrapper from '../components/ButtonsWrapper'
import ColorButton from '../components/ColorButton'
import { setEngine, clearEngine } from '../actions/Engine'
import { setModel, clearModel } from '../actions/Model'
import { setGear, clearGear } from '../actions/Gear'
import { setColor, clearColor } from '../actions/Color'
import { setPrice } from '../actions/Price'

import axios from 'axios'

const Configurator = () => {

    const [models, setModels] = useState([])
    const [engines, setEngines] = useState([])
    const [gearboxes, setGearboxes] = useState([])
    const [colors, setColors] = useState([])
    const [cars, setCars] = useState()

    const dispatch = useDispatch()

    const engine = useSelector(state => state.Engine.type)
    const model = useSelector(state => state.Model.type)
    const gear = useSelector(state => state.Gear.type)
    const color = useSelector(state => state.Color.type)

    const apiCall = () => {
        axios.get('http://localhost:5000/api/cars')
            .then(res => {
                initialDataHandler(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const initialDataHandler = (res) => {
        const keys = Object.keys(res.data)
        const models = keys.map(item => res.data[item].model)
        const data = res.data[keys[0]]
        const engineNames = data.engines.map(item => item.name)
        const price = Number(data.price) + Number(data.engines[0].price)


        dispatch(setPrice(price))
        dispatch(setEngine(data.engines[0].name))
        dispatch(setModel(data.model))
        dispatch(setGear(data.engines[0].gearboxes[0]))
        dispatch(setColor(data.colors[0]))

        setModels(models)
        setColors(data.colors)
        setEngines(engineNames)
        setGearboxes(data.engines[0].gearboxes)
        setCars(res.data)
    }

    const changeModelHandler = () => {
        if(cars) {
            const splitted = model.split(' ')
            const car = splitted[0].toLowerCase()
            const data = cars[car]
            const engineNames = data.engines.map(item => item.name)
            const price = Number(data.price) + Number(data.engines[0].price)

            dispatch(setPrice(price))
            dispatch(setEngine(engineNames[0]))
            dispatch(setGear(data.engines[0].gearboxes[0]))
            dispatch(setColor(data.colors[0]))

            setColors(data.colors)
            setEngines(engineNames)
            setGearboxes(data.engines[0].gearboxes)
        }
    }

    const changeEngineHandler = () => {
        if(cars) {
            const splitted = model.split(' ')
            const car = splitted[0].toLowerCase()
            const data = cars[car]
            const foundEngine = data.engines.find(item => item.name === engine)
            

            if(foundEngine) {
                const price = Number(data.price) + Number(foundEngine.price)

                dispatch(setPrice(price))
                setGearboxes(foundEngine.gearboxes)
            }
        }
    }

    useEffect(() => {
        apiCall()
    }, [])

    useEffect(() => {
        changeModelHandler()
    }, [model])

    useEffect(() => {
        changeEngineHandler()
    }, [engine])


    return (
        <div style={styles.wrapper}>
            <ButtonsWrapper data={models} setValue={setModel} clearValue={clearModel} value={model} type={'model'} title={'Model'}/>
            <ButtonsWrapper data={engines} setValue={setEngine} clearValue={clearEngine} value={engine} type={'engine'} title={'Engine'}/>
            <ButtonsWrapper data={gearboxes} setValue={setGear} clearValue={clearGear} value={gear} type={'gear'} title={'Gearbox'}/>
            <ButtonsWrapper data={colors} setValue={setColor} clearValue={clearColor} value={color} type={'color'} title={'Color'}/>
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


export default Configurator