<template>
    <div class="mt-5">
        <h1>Validaciones</h1>

        <form @submit.prevent="submit">
            <input type="email" placeholder="ingrese email" class="form-control my-3"
                v-model.lazy="$v.email.$model"
                :class="{'is-invalid': $v.email.$error}">
                <!-- :class="{'is-invalid': $v.email.$error}" esta clase hara que se pinte error cuando no sea valido el email -->
                <p class="text-danger" v-if="!$v.email.email">Email invalido</p>
                <p class="text-danger" v-if="!$v.email.required">Campo requerido</p>
            <!-- Accede a las pripiedades del email -->
            <!-- <p>{{$v.email}}</p> -->

            <input type="password" placeholder="Ingresa contraseña" class="form-control my-3"
                v-model="$v.password.$model" 
                :class="{'is-invalid': $v.password.$error}">

            <p class="text-danger" v-if="!$v.password.minLength">Minimo 6 caracteres</p>
            <!-- <p>{{$v.password}}</p> -->

            <input type="password" placeholder="Repite contraseña" class="form-control my-3"
                v-model="$v.repeatPassword.$model" 
                :class="{'is-invalid': $v.repeatPassword.$error}">

            <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">No coincide contraseña</p>
            <!-- <p>{{$v.repeatPassword}}</p> -->

            <b-button variant="primary" type="submit"
                :disabled="$v.$invalid">
                Enviar
            </b-button>

            <p>{{$v.$invalid}}</p>
            <p>{{$v}}</p>
        </form>
    </div>
</template>

<script>

import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Validacion',
    data() {
        return {
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: {required,email},
        password: {
            required,
            minLength: minLength(6) //minLength cantidad de caracteres minimas
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')//comparando la contraseña
        }
    },
    methods: {
        submit() {
          console.log('submit!')
          this.$v.$touch()
          if (this.$v.$invalid) {
            // this.submitStatus = 'ERROR'
            console.log('Se genero un error');
          } else {
            console.log('Todo correcto');
            console.log('Enviando informacion...' + this.$v.email.$model + ' ' + this.$v.password.$model);
          }
        }
    }
}
</script>