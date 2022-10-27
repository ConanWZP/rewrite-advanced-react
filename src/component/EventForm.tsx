import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {formatDate} from "../utils/date";
import {Moment} from "moment";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>(
        {
            author: '',
            date: '',
            guest: '',
            description: ''
        }
    )

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
            console.log(date)

        }
    }

    const {user} = useTypedSelector(state => state.auth)

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required('Укажите описание')]}
            >
                <Input  value={event.description} onChange={e => setEvent({...event, description: e.target.value})} />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required('Укажите дату события'), rules.isDateAfter('Нельзя создать событие в прошлом')]}
            >
                <DatePicker onChange={date => selectDate(date)} />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required('Введите гостя')]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest: guest})}>
                    {props.guests.map(guest =>
                        <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button type={'primary'} htmlType={'submit'} onClick={() => console.log(event.date)}>
                        Создать
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;