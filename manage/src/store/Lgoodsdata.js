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
        },
        removeMoreItem(state, goodsmsg) {
            let goods_id = goodsmsg.map(ele => {
                return ele.goods_id
            });
            let index = goods_id.length
            for (let i = 0; i < index; i++) {
                state.data = state.data.filter((item) => {
                    return goods_id[i] != item._id
                })
            }
        }
    }
}