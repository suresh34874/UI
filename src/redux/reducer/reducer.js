const reducer = (state = {time:'00:00 AM/PM'}, action) => {
    switch (action.type) {
      case 'CLOCK':
        return (Object.assign({},state,{time:action.time}));
      default:
        return state;
    }
  }
  export default reducer