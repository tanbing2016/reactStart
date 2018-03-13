export function setTabList(tab, tabsList, key) {
    tabsList.push(tab);
    return {
        type: 'set_tabs_success',
        payload: {
            tabsList: tabsList,
            activeKey: key
        }
    }
}
export function delTabList(tabsList, key, dispatch) {
    tabsList.forEach((item, index) => {
        if (`${item.id}` === key) {
            tabsList.splice(index, 1)
        }
    })
    if (tabsList.length === 0) {
        return {
            type: 'del_tabs_success',
            payload: {
                tabsList: [],
            }
        }
    }
    dispatch(changeActive(tabsList[tabsList.length - 1].id + ""));
    return {
        type: 'del_tabs_success',
        payload: {
            tabsList: tabsList,
        }
    }
}
export function changeActive(key) {
    return {
        type: 'ch_active_success',
        payload: {
            activeKey: key
        }
    }
}

export function closeItem(id) {
    return {
        type: 'CLOSE_TABS_ITEM',
        payload: id
    }
}
export function closeRight(id) {
    return {
        type: 'CLOSE_TABS_RIGHT',
        payload: id
    }
}
export function closeLeft(id) {
    return {
        type: 'CLOSE_TABS_LEFT',
        payload: id
    }
}
export function closeOther(id) {
    return {
        type: 'CLOSE_TABS_OTHER',
        payload: id
    }
}
export function closeAll() {
    return {
        type: 'CLOSE_TABS_ALL',
        payload: null
    }
}
export function toggleBlock(id) {
    return {
        type: 'TOGGLE_TABS_BLOCK',
        payload: id
    }
}