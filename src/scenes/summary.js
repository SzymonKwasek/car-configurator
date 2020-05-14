import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Summary = () => {

    const engine = useSelector(state => state.Engine.type)
    const model = useSelector(state => state.Model.type)
    const gear = useSelector(state => state.Gear.type)
    const color = useSelector(state => state.Color.type)
    const price = useSelector(state => state.Price.type)

    return(
        <div style={styles.wrapper}>
            <div style={styles.titleWrapper}>
                <span style={styles.title}>
                    Summary
                </span>
            </div>
            <div style={styles.display}>
                <Car color={color}/>
            </div>
            <div style={styles.data}>
                <DataRow title={'Model'} data={model}/>
                <DataRow title={'Engine'} data={engine}/>
                <DataRow title={'Gearbox'} data={gear}/>
                <DataRow title={'Color'} data={color}/>
                <DataRow title={'Price'} data={price}/>
            </div>
        </div>
    )
}

const DataRow = ({title, data}) => {
    return (
        <div style={styles.row}>
            <span style={styles.rowData}>
                {title}
            </span>
            <span style={styles.rowData}>
                {data ? data : ' '}
            </span>
        </div>
    )
}

const Car = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.color}
`

const styles = {
    wrapper: {
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: 200,
        height: 300
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 17
    },
    display: {
        backgroundColor: 'white',
        width: '100%',
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    data: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    rowData: {
        fontSize: 14,
        color: 'white'
    },
    car: {
        width: 50,
        height: 50,
    }
}

export default Summary