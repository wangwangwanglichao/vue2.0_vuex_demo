
const state = {
  appleTotal: 0,
  applePrice: 5,
  orangeTotal: 0,
  orangePrice: 6,
  totalPrice: 0
};

const mutations = {
  appleIncrement(state) {
    state.appleTotal++
  },
  appleDecrement(state) {
    if (state.appleTotal <= 0) return;
    state.appleTotal--
  },
  orangeIncrement(state) {
    state.orangeTotal++
  },
  orangeDecrement(state) {
    if (state.orangeTotal <= 0) return;
    state.orangeTotal--
  },
  applePriceIncrement(state) {
    state.applePrice++
  },
  applePriceDecrement(state) {
    if (state.applePrice <= 0) return;
    state.applePrice--
  },
  orangePriceIncrement(state) {
    state.orangePrice++
  },
  orangePriceDecrement(state) {
    if (state.orangePrice <= 0) return;
    state.orangePrice--
  }
};

const getters = {
  orangeTotal: state => state.orangeTotal,
  appleTotal: state => state.appleTotal,
  orangePrice: state => state.orangePrice,
  applePrice: state => state.applePrice,
  totalPrice: state => state.orangeTotal * state.orangePrice + state.appleTotal * state.applePrice
};

export default {
  state,
  getters,
  mutations
}
