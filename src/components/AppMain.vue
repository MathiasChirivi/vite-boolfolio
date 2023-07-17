<script>
import axios from "axios";
export default{
    name: "AppMain",
    data(){
        return{
            apiUrl: "http://localhost:8000/api/",
            projectsApi:"projects",
            loading: true,
            loadingError: false,
            projects: [],
        }
    },
    methods:{
        getProjects(){
            this.loading = true;
            axios.get(this.apiUrl + this.projectsApi).then((response)=> {
                // console.log(response.data);
                console.log(response.data)
                this.projects = response.data.results;
                this.loading = false;
            }).catch(err=> {
                this.loading = false;
                this.loadingError = err.message;
            })
        }
    },
    mounted(){
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div>
            <h2>Componente Main</h2>
            <h3 v-if="loading">
                <div class="spinner"></div>
                Caricameto dati
            </h3>
            <h3 v-if="loadingError"> {{ loadingError }} </h3>
        </div>
        <div>
            <div v-for="project in projects">
                <div><strong>Titolo:</strong> {{ project.title }}</div>
                <div><strong>Descrizione:</strong> {{ project.description }}</div>
            </div>
        </div>
        </main>
</template>

<style scoped>
.spinner {
	width: 78px;
    height: 78px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -39px; 
	margin-left: -39px; 
	border-radius: 50%;
	border: 5px solid #eaf5fe;
	border-right-color: #5597d4;
	animation: rotateSpinner 800ms linear infinite;
}

@keyframes rotateSpinner {
	to {
		transform: rotate(360deg);
	}
}
</style>

