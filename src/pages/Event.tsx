import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../component/EventCalendar";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import EventForm from "../component/EventForm";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {

    const {guests} = useTypedSelector(state => state.events)
    const {events} = useTypedSelector(state => state.events)
    const {user} = useTypedSelector(state => state.auth)

    const {fetchGuests, createEvent, fetchEvents} = useActions()

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const [modalVisible, setModalVisible] = useState(false)



    return (
        <Layout>
            {/*{JSON.stringify(events)}*/}
            <EventCalendar events={events} />

            <Row justify={'center'}>
                <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal title={'Добавить задачу'}
                   open={modalVisible}
                   footer={null}
                   onCancel={() => setModalVisible(false)}>
                <EventForm guests={guests} submit={addNewEvent} />
            </Modal>
        </Layout>
    );
};

export default Event;