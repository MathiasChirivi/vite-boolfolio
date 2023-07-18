<script>
import ProjectCard from '../components/ProjectCard.vue';
export default{
    name:"ProjectList",
    data(){
        return{

        }
    },
    components:{
        ProjectCard
    }
}

</script>

<template>
    
    <section>
        <h4 class="text-center mt-4">Lista Progetti</h4>
          <ProjectCard />
    </section>


</template>