import { Form } from '@mvkasatkin/forms'

class LegalFormModel extends Form {
  constructor() {
    super([
      ['senderId', 'required'],
      ['senderKpp', 'required'],
      ['receiverName', 'required'],
      ['receiverInn', 'required'],
      ['receiverKpp', 'required'],
      ['receiverAccount', 'required'],
      ['receiverBik', 'required'],
      ['value', 'required'],
      ['description', 'required'],
      ['nds', 'required'],
      ['urgency', 'required'],
      ['notEarlier'],
      ['uin', 'required'],
      ['notifyPhone'],
      ['notifyEmail', 'email'],
    ])
  }
}

export default LegalFormModel
