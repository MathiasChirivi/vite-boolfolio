<script>
import axios from "axios";

export default {
    name: "SingleProject",
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            projectsApi: "projects/",
            loading: false,
            loadingError: false,
            project: null,
        }
    },
    methods: {
        getProject(id) {
            this.loading = true;
            axios.get(this.apiUrl + this.projectsApi + id).then(response => {
                console.log(response.data);
                this.project = response.data.result;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'error', params: { code: 404 } })
            })
        }
    },
    mounted() {
        this.getProject(this.$route.params.id);
    }
}

</script>

<template>
    <section v-if="project">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-title"><strong>Titolo:</strong> {{ project.title }}</p>
                <p v-if="project.tipe" class="card-text"><strong>Tipo</strong> {{ project.tipe.name }}</p>
                <p v-else="project.tipe" class="card-text">
                    <strong>Tipo</strong>: Non esite un tipo per questo progetto
                </p>
                <p class="card-text">
                    <strong>Tecnologia usata</strong>:
                    <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
                </p>
                <p class="card-text"><strong>Descrizione:</strong> {{ project.description }}</p>
            </div>
        </div>
    </section>
</template>