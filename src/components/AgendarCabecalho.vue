<template>
  <div id="teste">
    <div>
      <select id="appearance-select">
          <option value="1">Tipo ser serviço</option>
          <option value="2">Leva e Traz</option>
          <option value="3">Com Espera</option>
          <option value="4">Acompanhado</option>
        </select>
    </div>
  
    <div class="ctnFlex">
      <div class="op1">
        <label>Data</label>
      </div>
      <div id="div2">
        <datepicker language="pt-br" />
      </div>
    </div>
  
    <div>
      <label>Horário</label>
      <input type="hora" id="fname">
      <label>às</label>
      <input type="hora" id="fname">
      <button class="button">Buscar Disponibilidade</button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  name: "AgendarCabecalho",
  components: {
    Datepicker
  }
};
</script>

<style>
.ctnFlex {
  display: flex;
  justify-content: space-between;
}

div.op1 {
  align-items: center;
  display: flex;
  margin-right: 5%;
}

#div2 {
  display: inline-block;
}

input[type="text"],
select {
  padding: 5px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="hora"],
select {
  width: 10%;
  padding: 5px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 20px;
  margin-right: 20px;
}

#appearance-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif)
    no-repeat #eeeeee;
  background-position: 218px center;
  width: 250px;
  height: 30px;
  border: 1px solid #ddd;
}

#teste {
  border-radius: 5px;
  background-color: #c4e4b1;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 250px 300px 1fr;
  grid-gap: 2vw;
}
</style>

