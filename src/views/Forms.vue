<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>Minim 3 caracteres</small>
                </b-col>

                <b-col md="3">
                    <b-form-select v-model="select" :options="materias"></b-form-select>
                    <p>seleccion: {{select}}</p>
                </b-col>

                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="materiasRadio"></b-form-radio-group>
                    <p>radio: {{radio}}</p>
                </b-col>

                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="materiasRadio"></b-form-checkbox-group>
                    <p>Check: {{check}}</p>
                </b-col>
            </b-row>
        </form>
        <p>texto: {{texto}}</p>
    </div>
</template>

<script>
export default {
    name: 'Forms',
    data() {
        //El value va viajar al select que ponga el usuarios
        return {
            texto: '',
            select: null,
            check: [],
            radio: null,
            materias: [
                {value: null, text: 'Seleccione una materia'},
                {value: 'Español', text: 'Esta en español'},
                {value: 'Matematicas', text: 'Numeros y numeros'},
                {value: 'Historia', text: 'Como llegamos aqui?'},
            ],
            materiasRadio: [
                {value: 'Español', text: 'Esta en español'},
                {value: 'Matematicas', text: 'Numeros y numeros'},
                {value: 'Historia', text: 'Como llegamos aqui?'},
            ]
        }
    },
    //estas propiedades regresan un true o false
    computed: {
        comprobar() {
            //si el texto tiene mas de dos letras regresa true, en caso contrario false :)
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>