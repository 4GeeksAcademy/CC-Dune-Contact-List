export const initialStore=()=>{
  return{
    message: null,
    contact: [
      {
        id: 1,
        name: "CC Dunes",
        phone: "900-867-5309",
        email: "cc@dunes.com",
        address: "123 Main Street"
      },
      {
        id: 2,
        name: "PT Barnum",
        phone: "900-867-5390",
        email: "pt@notmycircus.com",
        address: "123 Clown Shoes Drive"
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_contact':

      const { id,  color } = action.payload

      return {
        ...store,
        contacts: store.contacts.map((contact) => (contact.id === id ? { ...contact, background: color } : contact))
      };
    default:
      throw Error('Unknown action.');
  }    
}