<script>
import axios from "axios";

export default{
    name: "AppMain",
    data(){
        return{
            apiUrl: "http://localhost:8000/api/",
            projectsApi:"projects",
            loading: false,
            loadingError: false,
            projects: [],
            projectsCurrentPage: 0,
            projectsTotalPages: 0,
        }
    },
    methods:{
        getProjectsFirstPage(){
            this.loading = true;
            axios.get(this.apiUrl + this.projectsApi).then(response => {
                console.log(response.data);
                this.projects = response.data.result.data;
                this.projectsCurrentPage = response.data.result.current_page;
                this.projectsTotalPages = response.data.result.last_page
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            })
        },
        getProjectsPage(pageNumber){
            if(pageNumber && pageNumber > 0 && pageNumber <= this.projectsTotalPages){
                let config = {
                    params:{
                        page: pageNumber
                    }
                };
                this.loading = true;
                axios.get(this.apiUrl + this.projectsApi, config).then(response => {
                    console.log(response.data);
                    this.projects = response.data.result.data;
                    this.projectsCurrentPage = response.data.result.current_page;
                    this.projectsTotalPages = response.data.result.last_page;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;
                });
            } else {
                console.error ("non ci sono piu pagine");
            }
        },
        getProjectsPrevPage(){
            this.getProjectsPage(this.projectsCurrentPage - 1);
        },
        getProjectsNextPage(){
            this.getProjectsPage(this.projectsCurrentPage + 1);
        }
    },
    mounted(){
        this.getProjectsFirstPage();
    }
}
</script>

<template>
    <main>
        <div class="mb-5 mt-4">
            <h2 class="text-center">Componente Main</h2>
            <h3 v-if="loading">
                <div class="spinner"></div>
                Caricameto dati
            </h3>
            <h3 v-if="loadingError"> {{ loadingError }} </h3>
        </div>
        <div class="container mx-auto">
            <div class="d-flex flex-wrap gap-3 justify-content-between">
                <div v-for="project in projects">
                    <div class="card"  style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-title"><strong>Titolo:</strong> {{ project.title }}</p>
                            <p v-if="project.tipe" class="card-text"><strong>Tipo</strong> {{ project.tipe.name }}</p>
                            <p v-else="project.tipe" class="card-text">
                                <strong>Tipo</strong>: Non esite un tipo per questo progetto</p>
                            <p class="card-text">
                                <strong>Tecnologia usata</strong>:
                                <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span></p>
                            <p class="card-text"><strong>Descrizione:</strong> {{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center gap-4 mt-5">
            <a class="btn btn-dark" @click="getProjectsPrevPage"><i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i><span class="ms-3">Previous</span></a>
            <a class="btn" :class="{ 'btn-dark': pageNumber === projectsCurrentPage }" @click="getProjectsPage(pageNumber)" v-for="pageNumber in projectsTotalPages">{{ pageNumber }}</a>
            <a class="btn btn-dark" @click="getProjectsNextPage"><span class="me-3">Next</span><i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></a>
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

