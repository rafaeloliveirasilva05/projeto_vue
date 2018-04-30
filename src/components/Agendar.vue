<template>
  <div >
    <NavBar></NavBar>
     <AgendarCabecalho></AgendarCabecalho>
      
     
    <full-calendar id="calendar" ref="calendar" :events="fcEvents" @event-selected="eventSelected" @event-created="eventCreated" :config="config"></full-calendar>
  
     <b-modal ref="myModalRef" hide-footer title="Agendar transporte">
      <div class="d-block text-center">
        <b-form-input v-model="title" type="text" placeholder="Nome Usuário"></b-form-input>
        
      </div>
      <b-btn class="mt-3" variant="success" block @click="hideModal">Agendar</b-btn>
    </b-modal>

     <b-modal ref="deletar" hide-footer title="Deseja Cancelar esse Transporte?">
      <div class="d-block text-center">
        
      </div>
      <b-btn class="mt-3" variant="success" @click="removeEvent">Sim</b-btn>
      <b-btn class="mt-3" variant="danger" @click="cancelar">Não</b-btn>
    </b-modal>
  
  </div>
</template>

<script>
import NavBar from "./NavBar";
import AgendarCabecalho from "./AgendarCabecalho";
import Datepicker from "vuejs-datepicker";
import fullCalendar from "vue-fullcalendar";
import moment from "moment";
moment.locale("pt-BR");

export default {
  name: "Agendar",
  data() {
    return {
      fcEvents: [
        {
          id: 1,
          title: "Marcia",
          start: moment()
            .hours(12)
            .minutes(0)
        },
        {
          id: 2,
          title: "Paulo",
          start: moment().add(-1, "days"),
          end: moment().add(1, "days"),
          allDay: true
        },
        {
          id: 3,
          title: "Pedro",
          start: moment().add(2, "days"),
          end: moment()
            .add(2, "days")
            .add(6, "hours"),
          allDay: false
        }
      ],
      title: "",
      teste: "",
      config: {
        locale: "pt-br",
        eventClick: event => {
          this.$refs.deletar.show();
          this.selected = event;
        }
      },
      selected: {}
    };
  },
  components: {
    NavBar,
    AgendarCabecalho
  },
  methods: {
    refreshEvents() {
      this.$refs.calendar.$emit("refetch-events");
    },
    removeEvent() {
      
      for(var i=0;i<this.fcEvents.length;i++){
        if(this.selected.id == this.fcEvents[i].id){
          this.fcEvents.splice(i,1)
        }
      }
      
      this.$refs.calendar.$emit("remove-event", this.selected);
      this.$refs.deletar.hide();
      this.selected = {};
    },
    eventSelected(event) {
      this.selected = event;
    },
    eventCreated(...test) {
      this.$refs.myModalRef.show();
      this.teste = test;
    },
    hideModal() {
      this.fcEvents.push({
        id: Math.floor(Math.random() * 65536),
        title: this.title,
        start: moment(this.teste[0].start._d).add(+3, "hours"),
        end: moment(this.teste[0].end._d).add(+3, "hours"),
        allDay: this.teste[0].allDay
      });
      
      this.title = ""
      this.$refs.myModalRef.hide();
    },
    cancelar() {
      this.$refs.deletar.hide();
    }
  },

  showModal: function() {}
};
</script>

<style>
@import "../../node_modules/fullcalendar/dist/fullcalendar.css";

#calendar {
  padding: 20px;
  padding-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}

#datepiker {
  width: 100%;
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
</style>