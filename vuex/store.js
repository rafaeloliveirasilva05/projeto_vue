import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nome_completo: "",
    cpf: "",
    data_nascimento: "",
    cidade: "",
    modelo_carro: "",
    placa: "",
    email: "",
    habilitacao: ""
  },
  actions: {
    add({ commit }, obj) {
      commit("ADD", obj);
    }
  },
  mutations: {
    ADD(state, obj) {
      console.log(obj);

      state.nome_completo = obj.nome;
      state.cpf = obj.cpf;
      state.data_nascimento = obj.data_nascimento;
      state.cidade = obj.cidade;
      state.modelo_carro = obj.modelo_carro;
      state.placa = obj.placa;
      state.email = obj.email;
      state.habilitacao = obj.habilitacao;
    }
  }
});
