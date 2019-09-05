export default {
    state: {
        data: ""
    },
    getters: {

    },
    mutations: {
        changeData(data) {
            state.data = data
        },
        removeItem(state, goodsmsg) {
            state.data = state.data.filter(item => {
                return goodsmsg.goods_id != item._id

            })
        }
    }
}