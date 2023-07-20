<script>
import axios from "axios";
import { store } from "../store";

export default{
    name: "ProjectCard",
    data(){
        return{
            store,
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
            axios.get(this.store.apiUrl + this.store.projectsApi).then(response => {
                console.log(response.data);
                this.projects = response.data.results.data;
                this.projectsCurrentPage = response.data.results.current_page;
                this.projectsTotalPages = response.data.results.last_page
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'error', params: { code: 404 } })
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
                axios.get(this.store.apiUrl + this.store.projectsApi, config).then(response => {
                    console.log(response.data);
                    this.projects = response.data.results.data;
                    this.projectsCurrentPage = response.data.results.current_page;
                    this.projectsTotalPages = response.data.results.last_page;
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
            <h3 v-if="loading">
                <div class="spinner"></div>
                Caricameto dati
            </h3>
            <h3 v-if="loadingError"> {{ loadingError }} </h3>
        </div>
        <div class="container mx-auto">
            <div class="d-flex flex-wrap gap-3 justify-content-between">
                <div v-for="project in projects">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" :src="store.storageUrl + project.image" />
                        <div class="card-body">
                            <p class="card-title">
                                <router-link :to="{name: 'single-project', params:{id: project.id}}">
                                    <strong>Titolo:</strong> {{ project.title }}
                                </router-link>
                            </p>
                            <p v-if="project.tipe" class="card-text"><strong>Tipo</strong> {{ project.tipe.name }}</p>
                            <p v-else="project.tipe" class="card-text">
                                <strong>Tipo</strong>: Non esite un tipo per questo progetto</p>
                            <p class="card-text">
                                <strong>Tecnologia usata</strong>:
                                <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span></p>
                            <p class="card-text lineClamp2"><strong>Descrizione:</strong> {{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center gap-4 mt-5">
            <a class="btn btn-primary" @click="getProjectsPrevPage"><i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i><span class="ms-3">Previous</span></a>
            <a class="btn text-white" :class="{ 'btn-primary': pageNumber === projectsCurrentPage }" @click="getProjectsPage(pageNumber)" v-for="pageNumber in projectsTotalPages">{{ pageNumber }}</a>
            <a class="btn btn-primary" @click="getProjectsNextPage"><span class="me-3">Next</span><i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></a>
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

.lineClamp2{
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
</style>

