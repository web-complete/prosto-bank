import { Form } from '@mvkasatkin/forms'

const errorRequired = 'Обязательное поле'

class IndividualFormModel extends Form {
  constructor() {
    super([
      ['senderId', 'required', {}, errorRequired],
      ['senderKpp', 'required', {}, errorRequired],
      ['receiverName', 'required', {}, errorRequired],
      ['receiverAccount', 'required', {}, errorRequired],
      ['receiverBik', 'required', {}, errorRequired],
      ['value', 'required', {}, errorRequired],
      ['description', 'required', {}, errorRequired],
      ['nds', 'required', {}, errorRequired],
      ['urgency', 'required', {}, errorRequired],
      ['notEarlier'],
      ['uin', 'required', {}, errorRequired],
      ['notifyPhone'],
      ['notifyEmail', 'email', {}, 'Укажите корректный E-Mail'],
    ])
  }
}

export default IndividualFormModel
