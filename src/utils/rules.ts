import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = 'Обязательное поле') => {
        return {
            required: true,
            message
        }
    },
    isDateAfter: (message: string) => () => {
        return {
            validator(_: any, value: Moment) {
                if (value.isSameOrAfter(moment())) {
                    return Promise.resolve()
                }
                return Promise.reject(new Error(message))
            }
        }
    }
}