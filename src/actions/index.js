export function selectClass(playerClass){
    // selectBook is an action creator and needs to return an
    // action, an object with a type property

    return {
        type: 'CLASS_SELECTED',
        payload: playerClass
    };
}