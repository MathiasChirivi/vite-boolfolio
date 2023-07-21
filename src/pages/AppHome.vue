<script>
import ContactForm from '../components/ContactForm.vue';

export default{
    name:"AppHome",
    components:{
        ContactForm
    },
    data(){
        return{

        }
    }
}

</script>

<template>
    
    <section>
        <h3>Welcome in page Home</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <ContactForm />
    </section>


</template>